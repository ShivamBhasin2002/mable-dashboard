import { Button, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import colors from 'utility/colors';
import Icon from 'assets/icons';
import { Checkbox, Stack } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setColumnSelected } from 'redux/reducers/analytics/reportsSlice';
import { filterType } from 'utility/constants/enums';
import { useSelector } from 'redux/store';
import { SelectedEventsType } from 'utility/typeDefinitions/reduxTypes';

const ColumnSelectorMenu = () => {
  const dispatch = useDispatch();
  const selectedEvents = useSelector((state) => state.analytics).selected_events;
  return (
    <Menu gutter={0} isLazy>
      <MenuButton
        as={Button}
        rightIcon={<Icon icon="dropdown" className="text-lines/[0.20]" />}
        background={colors.transparent}
        className="!border-lines/[0.20] !flex !justify-evenly"
        border="1px"
        h="30px"
        w="170px"
        fontSize="14px"
        textAlign="left"
        outline="none"
        _hover={{ backgroundColor: 'transparent' }}
        _active={{ backgroundColor: 'transparent', borderBottomRadius: 0, borderBottom: 0 }}
      >
        Columns
      </MenuButton>
      <MenuList
        background={colors.bgContainerTo}
        w={170}
        minW={170}
        borderTop={0}
        borderTopRadius={0}
        borderColor={`${colors.lines}20`}
      >
        <Stack spacing={[1]} direction={['column']}>
          {Object.entries(filterType).map((item) => (
            <Checkbox
              isChecked={selectedEvents[item[0] as keyof SelectedEventsType]}
              key={item[0]}
              className=" pl-3"
              size="md"
              colorScheme="blue"
              _hover={{ background: colors.bgContainerFrom }}
              _active={{ background: colors.bgContainerFrom }}
              _focus={{ background: colors.bgContainerFrom }}
              fontSize="14px"
              h="30px"
              onChange={() => {
                dispatch(setColumnSelected(item[0]));
              }}
            >
              {item[1]}
            </Checkbox>
          ))}
        </Stack>
      </MenuList>
    </Menu>
  );
};

export default ColumnSelectorMenu;
