import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

import colors from 'utility/colors';
import Icon from 'assets/icons';
import { eventSelectedType } from 'utility/constants/enums';
import { SelectorMenuProps } from 'utility/typeDefinitions/componentPropTypes';

const SelectorMenu = ({ active, onChange }: SelectorMenuProps) => (
  <Menu gutter={0} isLazy>
    <MenuButton
      as={Button}
      rightIcon={<Icon icon="dropdown" color="lines/[0.20]" />}
      background={colors.transparent}
      className="!border-lines/[0.20]"
      border="1px"
      h="30px"
      w="170px"
      fontSize="14px"
      textAlign="left"
      outline="none"
      _hover={{ backgroundColor: 'transparent' }}
      _active={{ backgroundColor: 'transparent', borderBottomRadius: 0, borderBottom: 0 }}
    >
      {active}
    </MenuButton>
    <MenuList
      background={colors.bgContainerTo}
      w={170}
      minW={170}
      borderTop={0}
      borderTopRadius={0}
      borderColor={`${colors.lines}20`}
      className="z-[1000] absolute"
    >
      {Object.values(eventSelectedType).map(
        (item) =>
          item !== active && (
            <MenuItem
              key={item}
              _hover={{ background: colors.bgContainerFrom }}
              _active={{ background: colors.bgContainerFrom }}
              _focus={{ background: colors.bgContainerFrom }}
              fontSize="14px"
              h="30px"
              onClick={() => onChange(item)}
            >
              {item}
            </MenuItem>
          )
      )}
    </MenuList>
  </Menu>
);

export default SelectorMenu;
