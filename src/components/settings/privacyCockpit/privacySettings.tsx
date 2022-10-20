import { ComponentWrapper } from 'components/common';
import { Button, Checkbox } from '@chakra-ui/react';
import colors from 'utility/colors';
import Icon from 'assets/icons';
import { useDispatch, useSelector } from 'redux/store';
import { Spinner, useToast } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { STATUS_TYPE } from 'utility/constants/general';
import { useEffect, useState } from 'react';
import {
  getPrivacySettings,
  postConsentUrlPrivacySettings,
  postDataHashPrivacySettings
} from 'redux/reducers/privacyCockpitSlice';

const PrivacySettings = () => {
  const checkBoxValue = useSelector(
    (state) => state.privacyCockpit.privacySettings.hashDataInDashboard.hashDataCheckBox
  );
  const cookieConsentUrl = useSelector(
    (state) => state.privacyCockpit.privacySettings.cookieConsent.cookieConsentUrl
  );
  const { status: hashStatus } = useSelector(
    (state) => state.privacyCockpit.privacySettings.hashDataInDashboard
  );
  const { status: cookieStatus } = useSelector(
    (state) => state.privacyCockpit.privacySettings.cookieConsent
  );
  const [checkBoxStatus, setCheckBoxStatus] = useState<boolean>(checkBoxValue);
  const [cookieConsent, setCookieConsent] = useState<string>(cookieConsentUrl);

  const toast = useToast();
  const dispatch = useDispatch();

  const handleSave = () => {
    if (cookieConsent != '' && cookieConsent != cookieConsentUrl) {
      dispatch(postConsentUrlPrivacySettings({ url: cookieConsent }));
    }
    if (checkBoxStatus != checkBoxValue) {
      dispatch(postDataHashPrivacySettings({ checkBox: checkBoxStatus }));
    }
  };

  useEffect(() => {
    if (hashStatus === STATUS_TYPE.ERROR) {
      toast({
        title: `Error while updating ! from hash`,
        status: 'error',
        isClosable: true,
        position: 'top-right'
      });
    }
    if (hashStatus === STATUS_TYPE.SUCCESS) {
      toast({
        title: `Privacy Updated Succesfully from hash`,
        status: 'success',
        isClosable: true,
        position: 'top-right'
      });
    }
  }, [hashStatus]);

  useEffect(() => {
    if (cookieStatus === STATUS_TYPE.ERROR) {
      toast({
        title: `Error while updating ! from cookie`,
        status: 'error',
        isClosable: true,
        position: 'top-right'
      });
    }
    if (cookieStatus === STATUS_TYPE.SUCCESS) {
      toast({
        title: `Privacy Updated Succesfully from cookie`,
        status: 'success',
        isClosable: true,
        position: 'top-right'
      });
    }
  }, [cookieStatus]);

  return (
    <ComponentWrapper
      title="Privacy Settings"
      underlined={true}
      className="mt-[30px] flex flex-col max-w-4xl"
    >
      <div className="flex gap-4">
        <div className=" text-light text-xl flex items-center gap-2">
          Hash data in your dashboard <Icon icon="info" width={40} />
        </div>
        <Checkbox
          isChecked={checkBoxStatus}
          className=" text-light"
          size="lg"
          colorScheme="blue"
          _hover={{ background: colors.bgContainerFrom }}
          _active={{ background: colors.bgContainerFrom }}
          _focus={{ background: colors.bgContainerFrom }}
          onChange={() => setCheckBoxStatus(!checkBoxStatus)}
        ></Checkbox>
      </div>
      <div className="flex gap-4 items-center mt-[40px]">
        <div className=" text-light text-xl">Please link your cookie consent</div>
        <form className="w-[20rem]">
          <Input
            value={cookieConsent}
            variant="filled"
            placeholder={cookieConsent}
            backgroundColor="blue.800"
            textColor="white"
            onChange={(e) => setCookieConsent(e.target.value)}
          />
        </form>
      </div>
      {cookieConsentUrl != cookieConsent || checkBoxStatus != checkBoxValue ? (
        <Button
          className="w-[8rem] mt-5"
          type="submit"
          colorScheme="blue"
          onClick={() => {
            handleSave();
          }}
        >
          Save
          {hashStatus === STATUS_TYPE.FETCHING && <Spinner />}
        </Button>
      ) : (
        <Button
          disabled
          className="w-[8rem] mt-5"
          type="submit"
          colorScheme="blue"
          onClick={() => {
            handleSave();
          }}
        >
          Save
          {hashStatus === STATUS_TYPE.FETCHING && <Spinner />}
        </Button>
      )}
    </ComponentWrapper>
  );
};

export default PrivacySettings;
