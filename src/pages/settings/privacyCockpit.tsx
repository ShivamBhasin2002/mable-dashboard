import { ComponentWrapper } from 'components/common';
import React from 'react';
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
        <div className="active_all flex justify-end">
          <p className="text-light">Active Everything</p>
        </div>
        <div className="header w-full flex items-center">
          <div className="header_title  text-light w-30 text-[2em] font-[700]">
            Parameter Settings
          </div>
          <div className="options w-70 flex justify-evenly ">
            {data_collection_destinations.map((item) => {
              return (
                <p
                  key={item.value}
                  className={
                    item.available ? `text-gray-300 text-[1.2em]` : `text-gray-500 text-[1.2em]`
                  }
                >
                  {item.label}
                </p>
              );
            })}
          </div>
        </div>
      </ComponentWrapper>
    </>
  );
}

export default privacyCockpit;
