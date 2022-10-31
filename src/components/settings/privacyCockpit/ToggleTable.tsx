import { useEffect, useState } from 'react';
import { useSelector } from 'redux/store';
import ToggleBtn from 'components/common/ToggleBtn/ToggleSwitch';
import { postParameterSettings } from 'redux/reducers/settings/privacyCockpit/privacyCockpitSlice';
import { useDispatch } from 'redux/store';
import { Divider, useToast } from '@chakra-ui/react';
import { activeAllSettings } from 'utility/functions/defaultDataCollection';
import { camelCaseToTitleCase } from 'utility/functions/formattingFunctions';
import { STATUS_TYPE } from 'utility/constants/enums';
import { toggleColorCode } from 'utility/constants/extraConstants';

function toggleTable() {
  const toast = useToast();
  const dispatch = useDispatch();
  const { data_collection_destinations, data_collection_settings, parsed_settings, status } =
    useSelector((state) => state.privacyCockpit.paraMeterSettings);
  const [updateValue, setUpdateValue] = useState<{
    settingKey?: string;
    settingValue?: string;
  }>({
    settingKey: '',
    settingValue: ''
  });

  useEffect(() => {
    dispatch(
      postParameterSettings({
        settings: [updateValue]
      })
    );
    if (status === STATUS_TYPE.ERROR) {
      toast({
        title: `Something Went Wrong, Try Again ! `,
        status: 'error',
        isClosable: true,
        position: 'top-right'
      });
    }
    if (status === STATUS_TYPE.SUCCESS && updateValue.settingKey !== '') {
      toast({
        title: `Data Updated Succesfully`,
        status: 'success',
        isClosable: true,
        position: 'top-right'
      });
    }
    setActiveEverything({ ...activeEverything, settingValue: 'false' });
  }, [updateValue]);

  const handleActiveEverything = () => {
    dispatch(
      postParameterSettings({
        settings: activeAllSettings
      })
    );
    if (status === STATUS_TYPE.ERROR) {
      toast({
        title: `Something Went Wrong, Try Again ! `,
        status: 'error',
        isClosable: true,
        position: 'top-right'
      });
    }
    if (status === STATUS_TYPE.SUCCESS) {
      toast({
        title: `All Data Set to Active `,
        status: 'success',
        isClosable: true,
        position: 'top-right'
      });
    }
  };

  const [activeEverything, setActiveEverything] = useState<{
    settingKey?: string;
    settingValue?: string;
  }>({
    settingKey: '',
    settingValue: 'false'
  });
  useEffect(() => {
    if (activeEverything.settingValue === 'true') {
      handleActiveEverything();
    }
  }, [activeEverything]);

  const categories = ['personalData', 'location', 'others'];
  return (
    <div className="flex flex-col">
      {categories.map((category) => {
        return (
          <>
            <div className="category-header mt-5">
              <p className="text-primary opacity-70 text-[14px]">
                {camelCaseToTitleCase(category)}{' '}
              </p>
            </div>
            {data_collection_settings.map((data) => {
              if (category === data.category)
                return (
                  <>
                    <div className="dataTable flex text-[#FFFFFF] grid grid-cols-9 gap-0">
                      <div className="keyValue col-span-3 my-auto text-[18px] font-[600]">
                        {data.label}
                      </div>
                      {parsed_settings?.map((parsedData) => {
                        return (
                          parsedData.label === data.value &&
                          'database' === parsedData.destination && (
                            <div className="toggle1   col-span-2 m-auto">
                              <ToggleBtn
                                value={parsedData.settingValue === 'true'}
                                setState={setUpdateValue}
                                name={
                                  parsedData.category +
                                  '_' +
                                  parsedData.label +
                                  '_' +
                                  parsedData.destination
                                }
                                activeColor={toggleColorCode.active}
                                inactiveColor={toggleColorCode.inactive}
                                disable={!data_collection_destinations[0].available}
                              />
                            </div>
                          )
                        );
                      })}
                      {parsed_settings?.map((parsedData) => {
                        return (
                          parsedData.label === data.value &&
                          'facebook' === parsedData.destination && (
                            <div className="toggle1   col-span-2 m-auto">
                              <ToggleBtn
                                value={parsedData.settingValue === 'true'}
                                setState={setUpdateValue}
                                name={
                                  parsedData.category +
                                  '_' +
                                  parsedData.label +
                                  '_' +
                                  parsedData.destination
                                }
                                activeColor={toggleColorCode.active}
                                inactiveColor={toggleColorCode.inactive}
                                disable={!data_collection_destinations[1].available}
                              />
                            </div>
                          )
                        );
                      })}
                      {parsed_settings?.map((parsedData) => {
                        return (
                          parsedData.label === data.value &&
                          'tiktok' === parsedData.destination && (
                            <div className="toggle1   col-span-2 m-auto">
                              <ToggleBtn
                                value={parsedData.settingValue === 'true'}
                                setState={setUpdateValue}
                                name={
                                  parsedData.category +
                                  '_' +
                                  parsedData.label +
                                  '_' +
                                  parsedData.destination
                                }
                                activeColor={toggleColorCode.active}
                                inactiveColor={toggleColorCode.inactive}
                                disable={!data_collection_destinations[2].available}
                              />
                            </div>
                          )
                        );
                      })}
                    </div>
                  </>
                );
            })}
          </>
        );
      })}
      <Divider className="my-3" />
      <div className="flex justify-between items-center">
        <div className="active_all flex justify-end items-center">
          <p className="text-light text-[18px] mx-2 opacity-50">Activate All </p>
          <ToggleBtn
            value={activeEverything.settingValue === 'true'}
            setState={setActiveEverything}
            name="updateAll"
            activeColor="#0EBA12"
            inactiveColor="#D90D19"
          />
        </div>
      </div>
    </div>
  );
}

export default toggleTable;
