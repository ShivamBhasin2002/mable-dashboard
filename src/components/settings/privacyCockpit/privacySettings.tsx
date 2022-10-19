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
  const {
    hashDataCheckBox,
    status: hashStatus,
    errorMsg: hashErrorMsg
  } = useSelector((state) => state.privacyCockpit.hashDataReducer);

  const {
    cookieConsentUrl,
    status: cookieStatus,
    errorMsg: cookieErrorMsg
  } = useSelector((state) => state.privacyCockpit.cookieConsentReducer);

  const [checkBoxStatus, setCheckBoxStatus] = useState<boolean>(hashDataCheckBox);
  const [cookieConsent, setCookieConsent] = useState<string>(cookieConsentUrl);

  const toast = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrivacySettings());
  }, []);

  const handleSave = () => {
    if (cookieConsent != '') {
      dispatch(postConsentUrlPrivacySettings({ url: cookieConsent }));
    }
    dispatch(postDataHashPrivacySettings({ checkBox: checkBoxStatus }));
  };

  useEffect(() => {
    if (hashStatus === STATUS_TYPE.ERROR) {
      toast({
        title: `${cookieErrorMsg}`,
        status: 'error',
        isClosable: true,
        position: 'top-right'
      });
    }
    if (hashStatus === STATUS_TYPE.SUCCESS) {
      toast({
        title: `Data Updated Succesfully`,
        status: 'success',
        isClosable: true,
        position: 'top-right'
      });
    }
  }, [hashStatus]);

  useEffect(() => {
    if (cookieStatus === STATUS_TYPE.ERROR) {
      toast({ title: `${hashErrorMsg}`, status: 'error', isClosable: true, position: 'top-right' });
    }
    if (cookieStatus === STATUS_TYPE.SUCCESS) {
      toast({
        title: `Cookie Consent Updated successfully`,
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
            placeholder="Paste your link here"
            backgroundColor="blue.800"
            textColor="white"
            onChange={(e) => setCookieConsent(e.target.value)}
          />
        </form>
      </div>
      <Button
        className="w-[8rem] mt-5"
        type="submit"
        colorScheme="blue"
        onClick={() => {
          handleSave();
        }}
      >
        {(hashStatus || cookieStatus) === STATUS_TYPE.FETCHING && <Spinner />} Save
      </Button>
    </ComponentWrapper>
  );
};

export default PrivacySettings;
