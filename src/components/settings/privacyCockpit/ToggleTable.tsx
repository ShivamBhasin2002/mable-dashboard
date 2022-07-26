import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'redux/store';
import { useShowToast } from 'utility/customHooks';
import ToggleBtn from 'components/common/ToggleBtn/ToggleSwitch';
import { postParameterSettings } from 'redux/reducers/settings/privacyCockpit/privacyCockpitSlice';
import { Divider } from '@chakra-ui/react';
import { activeAllSettings } from 'utility/functions/defaultDataCollection';
import { camelCaseToTitleCase } from 'utility/functions/formattingFunctions';
import { perameterSettingsSocialType, STATUS_TYPE } from 'utility/constants/enums';
import { toggleColorCode } from 'utility/constants/extraConstants';

function toggleTable() {
  const toast = useShowToast();

  const dispatch = useDispatch();
  const {
    data_collection_settings: dataCollectionSettings,
    parsed_settings: parsedSettings,
    data_collection_destinations: dataCollectionDestinations,
    status
  } = useSelector((state) => state.privacyCockpit.paraMeterSettings);
  const [updateValue, setUpdateValue] = useState<{
    settingKey?: string;
    settingValue?: string;
  }>({
    settingKey: '',
    settingValue: ''
  });

  const [activeEverything, setActiveEverything] = useState<{
    settingKey?: string;
    settingValue?: string;
  }>({
    settingKey: '',
    settingValue: 'false'
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
        status: STATUS_TYPE.ERROR
      });
    }
    if (status === STATUS_TYPE.SUCCESS && updateValue.settingKey !== '') {
      toast({
        title: `Data Updated Successfully`,
        status: STATUS_TYPE.SUCCESS
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
        status: STATUS_TYPE.ERROR
      });
    }
    if (status === STATUS_TYPE.SUCCESS) {
      toast({
        title: `All Data Set to Active `,
        status: STATUS_TYPE.SUCCESS
      });
    }
  };

  useEffect(() => {
    if (activeEverything.settingValue === 'true') {
      handleActiveEverything();
    }
  }, [activeEverything]);

  const categories = ['personalData', 'location', 'others'];
  return (
    <div className="flex flex-col h-full w-full">
      {categories.map((category, catIdx) => (
        <div key="category" className="">
          <div
            className={`${catIdx === 0 ? 'category-header mt-4' : 'category-header mt-4 hd:mt-8'}`}
          >
            <p className="text-primary opacity-70 text-[.75rem] hd:text-[.875rem]">
              {camelCaseToTitleCase(category)}{' '}
            </p>
          </div>
          {dataCollectionSettings.map((data) => {
            if (category === data.category)
              return (
                <>
                  <div className="dataTable  text-[#FFFFFF] grid grid-cols-9 gap-0 flex-grow-[1]  ">
                    <div className="keyValue col-span-3 my-1 text-[.8125rem] hd:text-[1.125rem] font-[600] ">
                      {data.label}
                    </div>
                    {parsedSettings?.map(
                      (parsedData) =>
                        parsedData.label === data.value &&
                        parsedData.destination === perameterSettingsSocialType.DATABASE && (
                          <div className="toggle1   col-span-2 m-auto ">
                            <ToggleBtn
                              value={parsedData.settingValue === 'true'}
                              setState={setUpdateValue}
                              name={`${parsedData.category}_${parsedData.label}_${parsedData.destination}`}
                              activeColor={toggleColorCode.active}
                              inactiveColor={toggleColorCode.inactive}
                              disable={!dataCollectionDestinations[0].available}
                            />
                          </div>
                        )
                    )}
                    {parsedSettings?.map(
                      (parsedData) =>
                        parsedData.label === data.value &&
                        parsedData.destination === perameterSettingsSocialType.FACEBOOK && (
                          <div className="toggle1   col-span-2 m-auto">
                            <ToggleBtn
                              value={parsedData.settingValue === 'true'}
                              setState={setUpdateValue}
                              name={`${parsedData.category}_${parsedData.label}_${parsedData.destination}`}
                              activeColor={toggleColorCode.active}
                              inactiveColor={toggleColorCode.inactive}
                              disable={!dataCollectionDestinations[1].available}
                            />
                          </div>
                        )
                    )}
                    {parsedSettings?.map(
                      (parsedData) =>
                        parsedData.label === data.value &&
                        parsedData.destination === perameterSettingsSocialType.TIKTOK && (
                          <div className="toggle1   col-span-2 m-auto">
                            <ToggleBtn
                              value={parsedData.settingValue === 'true'}
                              setState={setUpdateValue}
                              name={`${parsedData.category}_${parsedData.label}_${parsedData.destination}`}
                              activeColor={toggleColorCode.active}
                              inactiveColor={toggleColorCode.inactive}
                              disable={!dataCollectionDestinations[2].available}
                            />
                          </div>
                        )
                    )}
                  </div>
                </>
              );
            return null;
          })}
        </div>
      ))}
      <Divider className="my-4" />
      <div className="flex justify-between items-center">
        <div className="active_all flex justify-end items-center">
          <p className="text-light text-[1.125rem] mr-3 opacity-50">Activate All </p>
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
