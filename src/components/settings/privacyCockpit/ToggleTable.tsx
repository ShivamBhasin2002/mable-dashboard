import { useEffect, useState } from 'react';
import { useSelector } from 'redux/store';
import ToggleBtn from 'components/common/ToggleBtn/ToggleSwitch';
import { postParameterSettings } from 'redux/reducers/privacyCockpitSlice';
import { useDispatch } from 'redux/store';
import { Button, Divider, useToast } from '@chakra-ui/react';
import { activeAllSettings } from 'utility/functions/defaultDataCollection';
import { camelCaseToTitleCase } from 'utility/functions/formattingFunctions';

function toggleTable() {
  const toast = useToast();
  const dispatch = useDispatch();
  const { data_collection_settings, parsed_settings, status } = useSelector(
    (state) => state.privacyCockpit.paraMeterSettings
  );
  const [updateValue, setUpdateValue] = useState<{
    settingKey?: string;
    settingValue?: string;
  }>({
    settingKey: '',
    settingValue: ''
  });

  const handleSave = () => {
    dispatch(
      postParameterSettings({
        settings: [updateValue]
      })
    );
    setActiveEverything({ ...activeEverything, settingValue: 'false' });
  };

  useEffect(() => {
    dispatch(
      postParameterSettings({
        settings: [updateValue]
      })
    );
    setActiveEverything({ ...activeEverything, settingValue: 'false' });
  }, [updateValue]);

  useEffect(() => {
    if (status === 'error') {
      toast({
        title: `Something Went Wrong, Try Again ! `,
        status: 'error',
        isClosable: true,
        position: 'top-right'
      });
    }
    if (status === 'success') {
      toast({
        title: `Data Updated Succesfully`,
        status: 'success',
        isClosable: true,
        position: 'top-right'
      });
    }
  }, [status]);

  const handleActiveEverything = () => {
    dispatch(
      postParameterSettings({
        settings: activeAllSettings
      })
    );

    toast({
      title: `All Data Set to Active `,
      status: 'success',
      isClosable: true,
      position: 'top-right'
    });
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
                                activeColor="#0EBA12"
                                inactiveColor="#D90D19"
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
                                activeColor="#0EBA12"
                                inactiveColor="#D90D19"
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
                                disable={true}
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
          <p className="text-light text-[18px] mx-2 opacity-50">Active Everything </p>
          <ToggleBtn
            value={activeEverything.settingValue === 'true'}
            setState={setActiveEverything}
            name="updateAll"
            activeColor="#0EBA12"
            inactiveColor="#D90D19"
          />
        </div>
        {false && (
          <div className="button">
            {status === 'error' && (
              <Button
                className="w-[8rem] mt-5"
                type="submit"
                colorScheme="blue"
                onClick={handleSave}
              >
                Save
              </Button>
            )}
            {status === 'fetching' && (
              <Button
                isLoading
                loadingText="Saving"
                spinnerPlacement="start"
                className="w-[8rem] mt-5"
                type="submit"
                colorScheme="blue"
                onClick={handleSave}
              >
                Save
              </Button>
            )}
            {status === 'success' && (
              <Button
                className="w-[8rem] mt-5"
                type="submit"
                colorScheme="gray"
                onClick={handleSave}
                disabled
              >
                Save
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default toggleTable;
