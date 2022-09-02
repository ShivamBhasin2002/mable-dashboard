import { useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Popover,
  PopoverTrigger,
  PopoverContent
} from '@chakra-ui/react';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'assets/styles/datePicker.css';

import Icon from 'assets/icons';
import colors from 'utility/colors';
import { ComponentWrapper } from 'components/elements/common';

import { useSelector, useDispatch } from 'redux/store';
import { setDates, setShop } from 'redux/reducers/dashboardSlice';

const DashboardHeader = () => {
  const dispatch = useDispatch();
  const { shop, shops, dateRange } = useSelector((state) => state.dashboard);
  const { screen } = useSelector((state) => state.general);
  const [focusedInput, setFocusedInput] = useState<any>(null); //eslint-disable-line
  return (
    <header>
      <div className="flex flex-row-reverse mb-3">
        <Menu isLazy>
          <MenuButton>
            <div className="p-[20px] bg-gradient-to-r from-bgContainerFrom to-bgContainerTo h-[55px] w-min rounded-xl flex flex-row items-center justify-evenly text-light gap-3">
              <span className="h-[10px] w-[10px] bg-success rounded-full" />
              {shop?.shop}
              <Icon icon="dropdown" />
            </div>
          </MenuButton>
          {shops && shops?.length > 1 && (
            <MenuList background={colors.bgContainerTo} textColor={colors.light} border="none">
              {shops
                ?.filter((thisShop) => {
                  if (thisShop._id.$oid !== shop?._id.$oid) return thisShop;
                })
                .map((shop) => (
                  <MenuItem
                    key={shop._id.$oid}
                    _hover={{ background: colors.bgContainerFrom }}
                    _active={{ background: colors.bgContainerFrom }}
                    _focus={{ background: colors.bgContainerFrom }}
                    onClick={() => {
                      dispatch(setShop(shop));
                    }}
                  >
                    {shop.shop}
                  </MenuItem>
                ))}
            </MenuList>
          )}
        </Menu>
      </div>
      {/* <hr className="h-[2px] border-none my-[23px] bg-lines/[0.15] w-[600px] ml-auto" /> */}
      <div className="flex justify-between items-center h-[45px]">
        <h1 className="text-bgPrimary-dark text-[42px] text-light font-heading font-bold relative top-[-16px]">
          {screen}
        </h1>
        <span className="flex flex-row text-bgPrimary-dark gap-[15px]">
          <span className="text-primary w-[60px] h-[45px] rounded-[10px] bg-gradient-to-r from-bgContainerFrom to-bgContainerTo flex justify-center items-center text-3xl">
            <Icon icon="refresh" />
          </span>
          <Popover gutter={10} autoFocus={false} placement="bottom-end" closeOnBlur={false}>
            <PopoverTrigger>
              <span className="bg-gradient-to-r from-bgContainerFrom to-bgContainerTo h-[45px] w-max px-[20px] rounded-[10px] flex flex-row gap-[20px] justify-evenly items-center text-[16px] font-text text-light cursor-pointer">
                {moment(dateRange[0]).format('DD.MM.YY')} to{' '}
                {moment(dateRange[1]).format('DD.MM.YY')}
                <Icon icon="dropdown" />
              </span>
            </PopoverTrigger>
            <PopoverContent bg="transparent" border="none" w={1000}>
              <ComponentWrapper
                width={1000}
                className="!rounded-[10px] shadow-xl shadow-background !h-[513px]"
              >
                <DateRangePicker
                  startDate={dateRange[0]}
                  endDate={dateRange[1]}
                  startDateId="startDateIdentifier"
                  endDateId="endDateIdentifier"
                  onDatesChange={({ startDate, endDate }) => {
                    dispatch(setDates([startDate, endDate]));
                  }}
                  focusedInput={focusedInput}
                  onFocusChange={(focusedInput) => {
                    if (!focusedInput) return;
                    setFocusedInput(focusedInput);
                  }}
                  displayFormat="DD.MM.YY"
                  isOutsideRange={() => false}
                  keepOpenOnDateSelect
                />
              </ComponentWrapper>
            </PopoverContent>
          </Popover>
        </span>
      </div>
    </header>
  );
};

export default DashboardHeader;
