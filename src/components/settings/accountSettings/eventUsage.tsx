import { ComponentWrapper } from "@components/common";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import colors from "@utility/colors";
import Icon from "@assets/icons";
import { tiers } from "@utility/constants/enums";
import { useState } from "react";
import { useDispatch, useSelector } from "@redux/store";
import { TierRange } from "@redux/reducers/eventUsageSlice";
import { daysInThisMonth } from "@utility/functions/helper";

const EventUsage = () => {
  const [selectedTier, setTier] = useState(tiers.tierOne);
  const dispatch = useDispatch();
  const { range } = useSelector((state) => state.eventUsage.selectedTier);
  const todayDate = new Date();
  const { current_month: currentMonth } = useSelector(
    (state) => state.eventUsage.monthEvents
  );

  const estimatedEvent =
    (currentMonth / todayDate.getDate()) * daysInThisMonth() -
    todayDate.getDate();

  const dropdown = () => (
    <Menu gutter={0} isLazy>
      <MenuButton
        as={Button}
        rightIcon={<Icon icon="dropdown" className="text-lines/[0.20]" />}
        background={colors.transparent}
        className="!border-lines/[0.20] !flex !justify-evenly"
        border="1px"
        h="30px"
        w="130px"
        fontSize="15px"
        textAlign="left"
        outline="none"
        _hover={{ backgroundColor: "transparent" }}
        _active={{
          backgroundColor: "transparent",
          borderBottomRadius: 0,
          borderBottom: 0,
        }}
      >
        {selectedTier}
      </MenuButton>
      <MenuList
        background={colors.bgContainerTo}
        w={130}
        minW={130}
        borderTop={0}
        borderTopRadius={0}
        borderColor={`${colors.lines}20`}
      >
        {Object.entries(tiers).map((item) => (
          <MenuItem
            className="text-sm"
            _hover={{ background: colors.bgContainerFrom }}
            _active={{ background: colors.bgContainerFrom }}
            _focus={{ background: colors.bgContainerFrom }}
            key={item[0]}
            onClick={() => {
              setTier(item[1]);
              dispatch(TierRange(item[0]));
            }}
          >
            {item[1]}
          </MenuItem>
        ))}
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
          <div className="">Estimated tier this month</div>
          <div className=" text-xl text-light font-bold">
            {selectedTier} - {estimatedEvent}
          </div>
        </div>
      </div>

      <div className="h-[1.2rem] w-full bg-secondary/[0.3] rounded-full mb-6 relative">
        {currentMonth > estimatedEvent ? (
          <>
            <div
              className={`h-full bg-primary transition-[width] ease-in-out duration-1000 rounded-full`}
              style={{
                width: `${(currentMonth / range) * 100}%`,
              }}
            ></div>
            <div
              className={`h-full bg-green-800 transition-[width] ease-in-out duration-1000 rounded-full absolute top-0`}
              style={{
                width: `${(estimatedEvent / range) * 100}%`,
              }}
            ></div>
          </>
        ) : (
          <>
            <div
              className={`h-full bg-green-800 transition-[width] ease-in-out duration-1000 rounded-full`}
              style={{
                width: `${(estimatedEvent / range) * 100}%`,
              }}
            ></div>
            <div
              className={`h-full bg-primary transition-[width] ease-in-out duration-1000 rounded-full absolute top-0`}
              style={{
                width: `${(currentMonth / range) * 100}%`,
              }}
            ></div>
          </>
        )}
      </div>

      <div className=" flex justify-between">
        <div className="flex flex-col items-end">
          <div className="flex mr-10 text-gray-400">
            <div className="w-5 h-5 bg-primary rounded-full mr-2"></div>
            Current Month
          </div>
          <div className="text-lg">
            {currentMonth}/{range}
          </div>
        </div>

        <div className="flex flex-col items-end">
          <div className="flex mr-10 text-gray-400">
            <div className="w-5 h-5 bg-green-800 rounded-full mr-2"></div>
            Estimated event this month
          </div>
          <div className="text-lg">
            {estimatedEvent}/{range}
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default EventUsage;
