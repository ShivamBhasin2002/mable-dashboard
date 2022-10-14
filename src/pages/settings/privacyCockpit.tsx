import { ComponentWrapper } from 'components/common';
import React from 'react';
import ToggleTable from 'components/settings/toggle_table';
import ToggleBtn from 'components/common/ToggleBtn/Togglebtn';
import { Divider } from '@chakra-ui/react';
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
function privacyCockpit() {
  return (
    <>
      <ComponentWrapper className="flex flex-col">
        <div className="active_all flex justify-end items-center">
          <p className="text-light mx-2">Active Everything </p>
          <ToggleBtn value={false} on={'on'} off={'off'} />
        </div>
        <div className="header w-full grid grid-cols-12 gap-0  content-center">
          <div className="header_title  text-light  text-[2em] font-[700] text-primary col-span-3  ">
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
      </ComponentWrapper>
    </>
  );
}

export default privacyCockpit;
