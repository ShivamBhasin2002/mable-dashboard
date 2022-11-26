import { useEffect, useRef } from 'react';
import { Popover, PopoverTrigger, PopoverContent, useDisclosure } from '@chakra-ui/react';
import moment from 'moment';

import Icon from 'assets/icons';

import DatePicker from 'components/common/DatePicker';

import { useSelector, useDispatch } from 'redux/store';
import { refresh } from 'redux/reducers/datesSlice';
import { showDatePicker, showReload } from 'utility/functions/helper';
// import ShopPicker from './ShopPicker';

const Header = () => {
  const datePickerRef = useRef<HTMLDivElement>(); //eslint-disable-line
  const dispatch = useDispatch();
  const { dateRange, datePreset } = useSelector((state) => state.dates);
  const { activeScreen } = useSelector((state) => state.screen);
  const { onClose, onOpen, isOpen } = useDisclosure();
  useEffect(() => {
    document.getElementById('startDateIdentifier')?.click();
  });
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const refreshBtn = document.querySelector('#refreshBtn');
    const clickHandler = () => {
      const refreshIcon = document.querySelector('#refreshIcon');
      refreshIcon?.classList.add('animate-spin');
      timeoutId = setTimeout(() => {
        refreshIcon?.classList.remove('animate-spin');
      }, 2000);
    };
    refreshBtn?.addEventListener('click', clickHandler);
    return () => {
      clearTimeout(timeoutId);
      refreshBtn?.removeEventListener('click', clickHandler);
    };
  }, []);

  return (
    <header>
      {/* <div className="flex flex-row-reverse mb-3">
        <ShopPicker />
      </div> */}
      <div className="flex justify-between items-center h-[2.5rem] mb-[1.5625rem]">
        <h1 className=" text-[1.25rem] lg:text-[1.75rem] text-light font-montserrat font-bold">
          {activeScreen}
        </h1>
        <span className="flex flex-row text-bgPrimary-dark gap-[.9375rem]">
          {showReload(activeScreen) && (
            <span
              id="refreshBtn"
              className="text-primary w-[3.75rem] h-[2.5rem] rounded-[.625rem] bg-gradient-to-r from-bgContainerFrom to-bgContainerTo flex justify-center items-center text-3xl cursor-pointer"
              onClick={() => {
                dispatch(refresh(false));
              }}
            >
              <Icon id="refreshIcon" icon="refresh" />
            </span>
          )}
          {showDatePicker(activeScreen) && (
            <Popover
              gutter={10}
              placement="bottom-end"
              onClose={onClose}
              isOpen={isOpen}
              onOpen={onOpen}
            >
              <PopoverTrigger>
                <span className="bg-gradient-to-r from-bgContainerFrom to-bgContainerTo h-[2.5rem] w-max px-[1.25rem] rounded-[.625rem] flex flex-row gap-[.625rem] justify-evenly items-center text-[1rem] font-lato text-light cursor-pointer whitespace-nowrap">
                  {datePreset && <span className="text-primary w-min">{datePreset}: </span>}
                  {dateRange[0] && moment(dateRange[0]).format('DD.MM.YY')} to{' '}
                  {dateRange[1] && moment(dateRange[1]).format('DD.MM.YY')}
                  <Icon icon="dropdown" />
                </span>
              </PopoverTrigger>
              <PopoverContent bg="transparent" border="none" w={1000}>
                <DatePicker close={onClose} isOpen={isOpen} />
              </PopoverContent>
            </Popover>
          )}
        </span>
      </div>
    </header>
  );
};

export default Header;
