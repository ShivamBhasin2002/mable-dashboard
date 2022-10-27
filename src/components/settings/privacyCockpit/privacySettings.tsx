import { ComponentWrapper } from 'components/common';
import { Button, Checkbox } from '@chakra-ui/react';
import colors from 'utility/colors';
import { useDispatch, useSelector } from 'redux/store';
import { Spinner, useToast } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { STATUS_TYPE } from 'utility/constants/enums';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import {
  postConsentUrlPrivacySettings,
  postDataHashPrivacySettings
} from 'redux/reducers/settings/privacyCockpit/privacyCockpitSlice';

const PrivacySettings = () => {
  const cookieConsentSchema = yup.object().shape({
    url: yup.string()
  });

  const { status: hashStatus, hashDataCheckBox } = useSelector(
    (state) => state.privacyCockpit.privacySettings.hashDataInDashboard
  );
  const { status: cookieStatus, cookieConsentUrl } = useSelector(
    (state) => state.privacyCockpit.privacySettings.cookieConsent
  );

  const [checkBoxStatus, setCheckBoxStatus] = useState<boolean>(hashDataCheckBox);
  const [cookieConsent, setCookieConsent] = useState<string>(cookieConsentUrl);
  const [disable, setDisable] = useState<boolean>(true);

  // useEffect(() => {
  //   setCheckBoxStatus(hashDataCheckBox);
  //   setCookieConsent(cookieConsentUrl);
  // }, [cookieConsentUrl, hashDataCheckBox]);

  const toast = useToast();
  const dispatch = useDispatch();

  const handleCookie = async () => {
    const isValid = await cookieConsentSchema.isValid({ url: cookieConsent });
    if (isValid) {
      dispatch(postConsentUrlPrivacySettings({ url: cookieConsent }));
    } else {
      console.log('enter correct url');
    }
  };

  const handleCheckBox = () => {
    dispatch(postDataHashPrivacySettings({ checkBox: checkBoxStatus }));
  };

  const handleSave = () => {
    if (cookieConsent != cookieConsentUrl && cookieConsent != '') {
      handleCookie();
    }
    if (checkBoxStatus != hashDataCheckBox) {
      handleCheckBox();
    }
    setDisable(true);
  };

  useEffect(() => {
    if (hashStatus === STATUS_TYPE.ERROR) {
      toast({
        title: `Error while updating ! from hash`,
        status: STATUS_TYPE.ERROR,
        isClosable: true,
        position: 'top-right'
      });
    }
    if (hashStatus === STATUS_TYPE.SUCCESS) {
      toast({
        title: `Data Hashed in Dashboard`,
        status: STATUS_TYPE.SUCCESS,
        isClosable: true,
        position: 'top-right'
      });
    }
  }, [hashStatus]);

  useEffect(() => {
    if (cookieStatus === STATUS_TYPE.ERROR) {
      toast({
        title: `Error while updating ! from cookie`,
        status: STATUS_TYPE.ERROR,
        isClosable: true,
        position: 'top-right'
      });
    }
    if (cookieStatus === STATUS_TYPE.SUCCESS) {
      toast({
        title: `Cookie Consent Linked`,
        status: STATUS_TYPE.SUCCESS,
        isClosable: true,
        position: 'top-right'
      });
    }
  }, [cookieStatus]);

  return (
    <ComponentWrapper
      title="Privacy Settings"
      underlined={true}
      className="flex flex-col max-w-4xl h-fit"
    >
      <div className="flex gap-4">
        <div className=" text-light flex items-center gap-2">Hash data in your dashboard</div>
        <Checkbox
          isChecked={checkBoxStatus}
          className=" text-light"
          size="lg"
          colorScheme="blue"
          _hover={{ background: colors.bgContainerFrom }}
          _active={{ background: colors.bgContainerFrom }}
          _focus={{ background: colors.bgContainerFrom }}
          onChange={() => {
            setCheckBoxStatus(!checkBoxStatus);
            setDisable(false);
          }}
        ></Checkbox>
      </div>
      <div className="flex gap-4 items-center mt-[40px]">
        <div className=" text-light">Please link your cookie consent</div>
        <form className="w-[20rem]">
          <Input
            value={cookieConsent}
            variant="filled"
            placeholder={cookieConsentUrl}
            backgroundColor="blue.800"
            textColor="white"
            onChange={(e) => {
              setCookieConsent(e.target.value);
              setDisable(false);
            }}
          />
        </form>
      </div>
      <Button
        disabled={disable}
        className="w-[8rem] mt-5"
        type="submit"
        colorScheme="blue"
        onClick={() => {
          handleSave();
        }}
      >
        Save
        {(hashStatus || cookieStatus) === STATUS_TYPE.FETCHING && <Spinner />}
      </Button>
    </ComponentWrapper>
  );
};

export default PrivacySettings;
