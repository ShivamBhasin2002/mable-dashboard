import { useEffect, useRef } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
  useOutsideClick
} from '@chakra-ui/react';
import moment from 'moment';

import Icon from 'assets/icons';
import colors from 'utility/colors';
import DatePicker from 'components/elements/common/DatePicker';

import { useSelector, useDispatch } from 'redux/store';
import { setShop } from 'redux/reducers/shopSlice';

const DashboardHeader = () => {
  const datePickerRef = useRef<any>(); //eslint-disable-line
  const dispatch = useDispatch();
  const { dateRange, datePreset } = useSelector((state) => state.dates);
  const { active, shops } = useSelector((state) => state.shop);
  const { activeScreen } = useSelector((state) => state.screen);
  const { onClose, onOpen, isOpen } = useDisclosure();
  useOutsideClick({ ref: datePickerRef, handler: onClose });
  useEffect(() => {
    document.getElementById('startDateIdentifier')?.click();
  });

  return (
    <header>
      <div className="flex flex-row-reverse mb-3">
        <Menu isLazy>
          <MenuButton>
            <div className="p-[20px] bg-gradient-to-r from-bgContainerFrom to-bgContainerTo h-[55px] w-min rounded-xl flex flex-row items-center justify-evenly text-light gap-3">
              <span className="h-[10px] w-[10px] bg-success rounded-full" />
              {active?.name}
              <Icon icon="dropdown" />
            </div>
          </MenuButton>
          {shops && shops?.length > 1 && (
            <MenuList background={colors.bgContainerTo} textColor={colors.light} border="none">
              {shops
                ?.filter((thisShop) => {
                  if (thisShop.id !== active?.id) return thisShop;
                })
                .map((shop) => (
                  <MenuItem
                    key={shop.id}
                    _hover={{ background: colors.bgContainerFrom }}
                    _active={{ background: colors.bgContainerFrom }}
                    _focus={{ background: colors.bgContainerFrom }}
                    onClick={() => {
                      dispatch(setShop(shop));
                    }}
                  >
                    {shop.name}
                  </MenuItem>
                ))}
            </MenuList>
          )}
        </Menu>
      </div>
      <div className="flex justify-between items-center h-[45px]">
        <h1 className="text-bgPrimary-dark text-[42px] text-light font-montserrat font-bold relative top-[-16px]">
          {activeScreen}
        </h1>
        <span className="flex flex-row text-bgPrimary-dark gap-[15px]">
          <span className="text-primary w-[60px] h-[45px] rounded-[10px] bg-gradient-to-r from-bgContainerFrom to-bgContainerTo flex justify-center items-center text-3xl">
            <Icon icon="refresh" />
          </span>
          <Popover
            gutter={10}
            autoFocus={false}
            placement="bottom-end"
            onClose={onClose}
            isOpen={isOpen}
            closeOnBlur={false}
            onOpen={onOpen}
          >
            <PopoverTrigger>
              <span className="bg-gradient-to-r from-bgContainerFrom to-bgContainerTo h-[45px] w-max px-[20px] rounded-[10px] flex flex-row gap-[10px] justify-evenly items-center text-[16px] font-lato text-light cursor-pointer whitespace-nowrap">
                {datePreset && <span className="text-primary w-min">{datePreset}: </span>}
                {dateRange[0] && moment(dateRange[0]).format('DD.MM.YY')} to{' '}
                {dateRange[1] && moment(dateRange[1]).format('DD.MM.YY')}
                <Icon icon="dropdown" />
              </span>
            </PopoverTrigger>
            <PopoverContent bg="transparent" border="none" w={1000} ref={datePickerRef}>
              <DatePicker close={onClose} isOpen={isOpen} />
            </PopoverContent>
          </Popover>
        </span>
      </div>
    </header>
  );
};

export default DashboardHeader;
