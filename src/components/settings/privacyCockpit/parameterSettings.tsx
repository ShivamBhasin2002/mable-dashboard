import { useState } from 'react';
import ComponentWrapper from 'components/common/ComponentWrapper';
import ToggleBtn from 'components/common/ToggleBtn/ToggleSwitch';
import { Button, Divider } from '@chakra-ui/react';
import ToggleTable from './toggleTable';
import { useSelector } from 'redux/store';
function parameterSettings() {
  const { data_collection_destinations } = useSelector(
    (state) => state.privacyCockpit.parameterSettingReducer
  );
  const [UpdateValue, setUpdateValue] = useState<{
    settingKey?: string;
    settingValue?: string;
  }>({
    settingKey: '',
    settingValue: ''
  });

  return (
    <ComponentWrapper className="flex flex-col  w-full">
      <div className="header w-full grid grid-cols-12 gap-0  content-center">
        <div className="header_title   col-span-3  m-auto">
          <p className="text-[20px] font-[700] text-primary"> Parameter Settings</p>
        </div>

        {data_collection_destinations.map((item) => {
          return (
            <p
              key={item.value}
              className={
                item.available
                  ? `text-gray-300 text-[1.2em] col-span-3  m-auto flex justify-start flex-col`
                  : `text-gray-500 text-[1.2em] col-span-3  m-auto flex justify-start flex-col`
              }
            >
              <p className="">{item.label}</p>
              {!item.available && (
                <span className="text-[.5em]  text-center text-primary rounded-2xl">
                  Coming Soon
                </span>
              )}
            </p>
          );
        })}
      </div>
      <Divider className="my-3" />
      <div className="toggleArea">
        <ToggleTable />
      </div>
    </ComponentWrapper>
  );
}

export default parameterSettings;
