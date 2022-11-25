import ComponentWrapper from '@components/common/ComponentWrapper';
import { Divider } from '@chakra-ui/react';
import { useSelector } from '@redux/store';
import ToggleTable from './ToggleTable';

function ParameterSettings() {
  const { data_collection_destinations: dataCollectionDestinations } = useSelector(
    (state) => state.privacyCockpit.paraMeterSettings
  );

  return (
    <ComponentWrapper className="flex flex-col w-full h-fit">
      <div className="header w-full grid grid-cols-9 gap-0  content-center">
        <div className="header_title   col-span-3  m-right my-auto">
          <p className="text-[24px] font-[700] text-light"> Parameter Settings</p>
        </div>

        {dataCollectionDestinations.map((item) => (
          <p
            key={item.value}
            className={
              item.available
                ? `text-gray-400 text-[1.1em] font-bold col-span-2  m-auto flex justify-start flex-col`
                : `text-gray-600 text-[1.1em] font-bold col-span-2  m-auto flex justify-start flex-col`
            }
          >
            <p className="">{item.label}</p>
            {!item.available && (
              <span className="text-[.5em]  text-center text-primary opacity-70 rounded-2xl">
                Coming Soon
              </span>
            )}
          </p>
        ))}
      </div>
      <Divider className="my-3" />
      <div className="toggleArea">
        <ToggleTable />
      </div>
    </ComponentWrapper>
  );
}

export default ParameterSettings;
