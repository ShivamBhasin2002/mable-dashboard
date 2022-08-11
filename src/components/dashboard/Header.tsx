import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

import Icon from 'utility/icons';

import { useSelector, useDispatch } from 'redux/store';
import { setShop } from 'redux/reducers/dashboardSlice';

const DashboardHeader = () => {
  const dispatch = useDispatch();
  const { shop, shops } = useSelector((state) => state.dashboard);
  return (
    <header>
      <div className="flex flex-row-reverse">
        <Menu isLazy>
          <MenuButton>
            <div className="p-[20px] bg-gradient-to-r from-bgContainer-from to-bgContainer-to h-[55px] w-min rounded-xl flex flex-row items-center justify-evenly text-light gap-3">
              <span className="h-[10px] w-[10px] bg-success rounded-full" />
              {shop?.shop}
              <Icon icon="dropdown" />
            </div>
          </MenuButton>
          {shops && shops?.length > 1 && (
            <MenuList className="!p-[20px] !bg-gradient-to-r !from-bgContainer-from !to-bgContainer-to !h-[55px] !w-min !rounded-xl !flex !flex-row !items-center !justify-evenly !text-light !gap-3">
              {shops
                ?.filter((thisShop) => {
                  if (thisShop._id.$oid !== shop?._id.$oid) return thisShop;
                })
                .map((shop) => (
                  <MenuItem
                    key={shop._id.$oid}
                    className="!p-[20px] !bg-gradient-to-r !from-bgContainer-from !to-bgContainer-to !h-[55px] !w-min !rounded-xl !flex !flex-row !items-center !justify-evenly !text-light !gap-3"
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
      <hr className="h-[2px] border-none my-[23px] bg-lines/[0.15] w-[600px] ml-auto" />
      <div className="flex justify-between items-center h-[45px]">
        <h1 className="text-bgPrimary-dark text-[42px] text-light font-heading font-bold relative top-[-16px]">
          Dashboard
        </h1>
        <span className="flex flex-row text-bgPrimary-dark gap-[15px]">
          <span className="text-primary w-[60px] h-[45px] rounded-[10px] bg-gradient-to-r from-bgContainer-from to-bgContainer-to flex justify-center items-center text-3xl">
            <Icon icon="refresh" />
          </span>
          <span className="bg-gradient-to-r from-bgContainer-from to-bgContainer-to w-[220px] h-[45px] rounded-[10px] flex flex-row justify-evenly items-center text-[16px] font-text text-light">
            15.07.22 to 29.07.22
            <Icon icon="dropdown" />
          </span>
        </span>
      </div>
    </header>
  );
};

export default DashboardHeader;
