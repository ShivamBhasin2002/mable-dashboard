import { useState } from 'react';
import ComponentWrapper from 'components/common/ComponentWrapper';
import ToggleBtn from 'components/common/ToggleBtn/Togglebtn';
import { Button, Divider } from '@chakra-ui/react';
import ToggleTable from './toggle_table';
function parameterSettings() {
  const [UpdateValue, setUpdateValue] = useState({
    settingKey: '',
    settingValue: ''
  });

  const data_collection_destinations: {
    value: string;
    label: string;
    available: boolean;
  }[] = [
    {
      value: 'database',
      label: 'Database',
      available: true
    },
    {
      value: 'facebook',
      label: 'Facebook',
      available: true
    },
    {
      value: 'tiktok',
      label: 'Tik Tok',
      available: false
    }
  ];
  return (
    <ComponentWrapper className="flex flex-col">
      <div className="header w-full grid grid-cols-12 gap-0  content-center">
        <div className="header_title text-[1.8em] font-[700] text-primary col-span-3  ">
          Parameter Settings
        </div>

        {data_collection_destinations.map((item) => {
          return (
            <p
              key={item.value}
              className={
                item.available
                  ? `text-gray-300 text-[1.2em] col-span-3  m-auto`
                  : `text-gray-500 text-[1.2em] col-span-3  m-auto `
              }
            >
              {item.label}
            </p>
          );
        })}
      </div>
      <Divider className="my-3" />
      <div className="toggleArea">
        <ToggleTable />
      </div>
      <Divider className="my-3" />
      <div className="flex justify-between items-center">
        <div className="active_all flex justify-end items-center">
          <p className="text-light mx-2 opacity-50">Active Everything </p>
          <ToggleBtn value={false} setState={setUpdateValue} />
        </div>
        <div className="button">
          <Button className="w-[8rem] mt-5" type="submit" colorScheme="blue">
            Save
          </Button>
        </div>
      </div>
    </ComponentWrapper>
  );
}

export default parameterSettings;
