import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

import ComponentWrapper from 'components/elements/ComponentWrapper';
import LineChart from 'components/elements/quality/LineChart';
import QualityCombined from 'components/elements/quality/QualityCombined';
import Stats from 'components/orderAnalysis/Statistics';

import Icon from 'utility/icons';
import colors from 'utility/colors';

import { useSelector } from 'redux/store';

const OrderAnalysis = () => {
  const { shopifyOrders, ordersWithCorrectCV, recievedByFB, avgDelieveryTime } = useSelector(
    (state) => state.dashboard
  );
  return (
    <div className="flex flex-col mt-[40px] gap-[40px]">
      <ComponentWrapper>
        <div className="flex flex-row flex-wrap gap-[40px] justify-evenly">
          <QualityCombined />
          <LineChart width={520} height={140} />
          <Stats value={shopifyOrders} message="Shopify Orders" />
          <Stats value={ordersWithCorrectCV} message="Orders with correct CV" />
          <Stats value={recievedByFB} message="Received by FB" />
          <Stats value={avgDelieveryTime} message="Avg. Delivery Time" />
        </div>
      </ComponentWrapper>
      <ComponentWrapper>
        <Menu isLazy>
          <MenuButton>
            <div className="p-[20px] bg-gradient-to-r from-bgContainerFrom to-bgContainerTo h-[55px] w-max rounded-xl flex flex-row items-center justify-evenly text-light gap-3 border-[1px] border-lines">
              <span className="h-[10px] w-[10px] bg-success rounded-full" />
              Status: All
              <Icon icon="dropdown" />
            </div>
          </MenuButton>
          <MenuList className="!p-[20px] !bg-gradient-to-r !from-bgContainerFrom !to-bgContainerTo !w-min !rounded-xl !text-light border-lines">
            {['All', 'Pending', 'Success', 'Delayed', 'All'].map((stat) => (
              <MenuItem
                key={`stat${stat}`}
                className="!p-[5px] !w-full !rounded-xl !text-light !gap-3"
                _hover={{ background: colors.background }}
                _active={{ background: colors.transparent }}
                _focus={{ background: colors.transparent }}
              >
                {stat}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </ComponentWrapper>
    </div>
  );
};

export default OrderAnalysis;
