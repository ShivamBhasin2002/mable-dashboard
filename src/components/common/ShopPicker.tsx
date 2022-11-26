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
        <div className="px-[1.25rem] bg-gradient-to-r from-bgContainerFrom to-bgContainerTo h-[2.8125rem] w-min rounded-xl flex flex-row items-center justify-evenly text-light gap-3 whitespace-nowrap">
          <span className="h-[.625rem] w-[.625rem] bg-success rounded-full" />
          {active?.displayName}
          <Icon icon="dropdown" />
        </div>
      </MenuButton>
      {shops && shops?.length > 1 && (
        <MenuList background={colors.bgContainerTo} textColor={colors.light} border="none">
          {shops
            ?.filter((thisShop) => thisShop.id !== active?.id)
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
