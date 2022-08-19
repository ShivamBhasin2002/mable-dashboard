import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

import colors from 'utility/colors';
import Icon from 'utility/icons';

import { useDispatch, useSelector } from 'redux/store';
import { setEventSelected } from 'redux/reducers/dashboardSlice';

const SelectorMenu = () => {
  const dispatch = useDispatch();
  const { eventSelected } = useSelector((state) => state.dashboard);
  return (
    <Menu gutter={0}>
      <MenuButton
        as={Button}
        rightIcon={<Icon icon="dropdown" />}
        background={colors.transparent}
        borderColor={colors.lines}
        border="1px"
        h="30px"
        w="170px"
        fontSize="14px"
        textAlign="left"
        outline="none"
        _hover={{ backgroundColor: 'transparent' }}
        _active={{ backgroundColor: 'transparent', borderBottomRadius: 0, borderBottom: 0 }}
      >
        {eventSelected}
      </MenuButton>
      <MenuList
        background={colors.bgContainerTo}
        w={170}
        minW={170}
        borderTop={0}
        borderTopRadius={0}
      >
        {['Purchase', 'Add Payment Info', 'Initiat Checkout', 'Add to Cart', 'Page View'].map(
          (item) =>
            item !== eventSelected && (
              <MenuItem
                key={item}
                _hover={{ background: colors.bgContainerFrom }}
                _active={{ background: colors.bgContainerFrom }}
                _focus={{ background: colors.bgContainerFrom }}
                fontSize="14px"
                h="30px"
                onClick={() => dispatch(setEventSelected(item))}
              >
                {item}
              </MenuItem>
            )
        )}
      </MenuList>
    </Menu>
  );
};

export default SelectorMenu;
