import { useEffect, useState } from 'react';
import { useSelector } from 'redux/store';
import ToggleBtn from 'components/common/ToggleBtn/ToggleSwitch';
import { postPerameterSettings } from 'redux/reducers/privacyCockpitSlice';
import { useDispatch } from 'redux/store';
function toggleTable() {
  const dispatch = useDispatch();
  const { data_collection_settings, parsed_settings } = useSelector(
    (state) => state.privacyCockpit.parameterSettingReducer
  );
  const [UpdateValue, setUpdateValue] = useState<{
    settingKey?: string;
    settingValue?: string;
  }>({
    settingKey: '',
    settingValue: ''
  });
  useEffect(() => {
    dispatch(
      postPerameterSettings({
        settings: [UpdateValue]
      })
    );
  }, [UpdateValue]);

  const categories = ['personalData', 'location', 'others'];
  return (
    <div className="flex flex-col">
      {categories.map((category) => {
        return (
          <>
            <div className="header">
              <p className="text-primary opacity-70">{category} </p>
            </div>
            {data_collection_settings.map((data) => {
              if (category === data.category)
                return (
                  <>
                    <div className="dataTable flex text-light grid grid-cols-12 gap-0">
                      <div className="keyValue col-span-3 my-auto">{data.label}</div>
                      {parsed_settings?.map((parsedData) => {
                        return (
                          parsedData.label === data.value &&
                          'database' === parsedData.destination && (
                            <div className="toggle1   col-span-3 m-auto">
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
                              />
                            </div>
                          )
                        );
                      })}
                      {parsed_settings?.map((parsedData) => {
                        return (
                          parsedData.label === data.value &&
                          'facebook' === parsedData.destination && (
                            <div className="toggle1   col-span-3 m-auto">
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
                              />
                            </div>
                          )
                        );
                      })}
                      {parsed_settings?.map((parsedData) => {
                        return (
                          parsedData.label === data.value &&
                          'tiktok' === parsedData.destination && (
                            <div className="toggle1   col-span-3 m-auto">
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
    </div>
  );
}

export default toggleTable;
