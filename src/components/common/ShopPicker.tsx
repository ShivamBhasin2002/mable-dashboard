import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

import Icon from 'assets/icons';

import colors from 'utility/colors';

import { useSelector, useDispatch } from 'redux/store';
import { setShop } from 'redux/reducers/shopSlice';

const ShopPicker = () => {
  const dispatch = useDispatch();
  const { active, shops } = useSelector((state) => state.shop);

  return (
    <Menu isLazy>
      <MenuButton>
        <div className="px-[20px] bg-gradient-to-r from-bgContainerFrom to-bgContainerTo h-[45px] w-min rounded-xl flex flex-row items-center justify-evenly text-light gap-3 whitespace-nowrap">
          <span className="h-[10px] w-[10px] bg-success rounded-full" />
          {active?.displayName}
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
                {shop.displayName}
              </MenuItem>
            ))}
        </MenuList>
      )}
    </Menu>
  );
};

export default ShopPicker;
