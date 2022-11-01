import { ComponentWrapper } from 'components/common';
import { Button, Menu, MenuButton, MenuList, Checkbox, Stack } from '@chakra-ui/react';
import colors from 'utility/colors';
import Icon from 'assets/icons';

const EventUsage = () => {
  const dropdown = () => (
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
          <Checkbox
            isChecked={true}
            className=" pl-3"
            size="md"
            colorScheme="blue"
            _hover={{ background: colors.bgContainerFrom }}
            _active={{ background: colors.bgContainerFrom }}
            _focus={{ background: colors.bgContainerFrom }}
            fontSize="14px"
            h="30px"
            onChange={() => {
              // dispatch(setColumnSelected(item[0]));
            }}
          >
            Hello
          </Checkbox>
        </Stack>
      </MenuList>
    </Menu>
  );
  return (
    <ComponentWrapper
      title="Event Usage"
      className="text-light h-fit mt-[20px] flex flex-col"
      nextComponent={dropdown()}
    >
      <div className="flex justify-end mb-6 mt-6">
        <div className="flex flex-col items-end">
          <div className="">Estimated Tier this month:</div>
          <div className=" text-xl text-light font-bold">Tier 2 - 149E</div>
        </div>
      </div>

      <div className="h-[1.2rem] w-full bg-secondary/[0.3] rounded-full mb-6">
        <div
          className={`h-full bg-green-800 transition-[width] ease-in-out duration-1000 rounded-full`}
          style={{ width: `${(0.6 ?? 0) * 100}%` }}
        >
          <div
            className={`h-full bg-primary transition-[width] ease-in-out duration-1000 rounded-full`}
            style={{ width: `${(0.4 ?? 0) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className=" flex justify-between">
        <div className="flex flex-col items-end">
          <div className="flex mr-10 text-gray-400">
            <div className="w-5 h-5 bg-primary rounded-full mr-2"></div>
            Event Used
          </div>
          <div className="text-lg">13,463/150.000</div>
        </div>

        <div className="flex flex-col items-end">
          <div className="flex text-gray-400">
            <div className="w-5 h-5 bg-green-800 rounded-full mr-2"></div>
            Estimated Events this month
          </div>
          <div className="text-lg">139.463/150.000</div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default EventUsage;
