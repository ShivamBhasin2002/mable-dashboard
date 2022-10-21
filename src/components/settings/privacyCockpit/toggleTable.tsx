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

  let SocialCount = 1;
  const checkSocial = (value: number) => {
    console.log(SocialCount);
    if (SocialCount === value && value === 3) {
      SocialCount = 1;
      return true;
    } else if (SocialCount === value) {
      SocialCount++;
      return true;
    }

    return false;
  };

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

                      {parsed_settings?.map((parsedData, index) => {
                        console.log(parsedData);

                        return (
                          parsedData.label === data.value && (
                            <>
                              <div className="toggle1   col-span-3 m-auto">
                                {parsedData.destination === 'database' && checkSocial(1) && (
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
                                )}
                                {parsedData.destination === 'facebook' && checkSocial(2) && (
                                  <ToggleBtn
                                    value={parsedData?.settingValue === 'true'}
                                    setState={setUpdateValue}
                                    name={
                                      parsedData.category +
                                      '_' +
                                      parsedData.label +
                                      '_' +
                                      parsedData.destination
                                    }
                                  />
                                )}
                                {parsedData.destination === 'tiktok' && checkSocial(3) && (
                                  <ToggleBtn
                                    value={parsedData?.settingValue === 'true'}
                                    setState={setUpdateValue}
                                    name={
                                      parsedData.category +
                                      '_' +
                                      parsedData.label +
                                      '_' +
                                      parsedData.destination
                                    }
                                  />
                                )}
                              </div>
                            </>
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
