import ComponentWrapper from 'components/common/ComponentWrapper';
import { Divider } from '@chakra-ui/react';
import { useSelector } from 'redux/store';
import ToggleTable from './ToggleTable';

function ParameterSettings() {
  const { data_collection_destinations: dataCollectionDestinations } = useSelector(
    (state) => state.privacyCockpit.paraMeterSettings
  );

  return (
    <ComponentWrapper
      className="flex flex-col w-full h-full justify-start flex-grow-[1]"
      height="100%"
    >
      <div className="header w-full grid grid-cols-9 gap-0  content-center">
        <div className="header_title   col-span-3  m-right my-auto">
          <p className="text-[1.3rem] font-[700] text-light"> Parameter Settings</p>
        </div>

        {dataCollectionDestinations.map((item) => (
          <p
            key={item.value}
            className={
              item.available
                ? `text-gray-400 text-[.9rem] font-bold col-span-2  m-auto flex justify-start flex-col`
                : `text-gray-600 text-[.9rem] font-bold col-span-2  m-auto flex justify-start flex-col`
            }
          >
            <p className="">{item.label}</p>
            {!item.available && (
              <span className="text-[.5rem]  text-center text-primary opacity-70 rounded-2xl">
                Coming Soon
              </span>
            )}
          </p>
        ))}
      </div>
      <Divider className="my-1" />
      <div className="toggleArea flex  h-[95%] w-full flex-grow-[1]">
        <ToggleTable />
      </div>
    </ComponentWrapper>
  );
}

export default ParameterSettings;
