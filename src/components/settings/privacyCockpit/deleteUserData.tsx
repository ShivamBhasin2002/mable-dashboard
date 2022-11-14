import { ComponentWrapper } from 'components/common';
import { useSelector } from 'redux/store';
import { useEffect, useState } from 'react';
import { useShowToast } from 'utility/customHooks';
import { STATUS_TYPE } from 'utility/constants/enums';
import { Button } from '@chakra-ui/react';
import Pagination from 'components/dataQuality/General/Pagination';
import { clearDeleteUserState } from 'redux/reducers/settings/privacyCockpit/privacyCockpitSlice';
import PopupExample from './popUpAddUser';

const DeleteUserData = () => {
  const [display, setDisplay] = useState('hidden');
  const [email, setEmail] = useState('');
  const [futureTrack, setFutureTrack] = useState<boolean>(false);
  const [page, setPage] = useState(1);
  const [ordersPerPage, setOrdersPerPage] = useState(0);
  const { status } = useSelector((state) => state.privacyCockpit.deleteUserData);
  const toast = useShowToast();

  useEffect(() => {
    const height = document.getElementById('deleteUserDataTable')?.clientHeight;
    if (height) setOrdersPerPage(Math.floor((height - 240) / 40));
  }, []);

  useEffect(() => {
    if (status === STATUS_TYPE.SUCCESS || status === STATUS_TYPE.ERROR) {
      setDisplay('hidden');
      toast({
        title: status === STATUS_TYPE.SUCCESS ? `User Deleted` : `Oops Some error occured`,
        status
      });
      clearDeleteUserState();
      setEmail('');
      setFutureTrack(false);
    }
  }, [status]);

  const addEntry = () => (
    <Button
      className="ml-auto mb-2"
      type="submit"
      colorScheme="blue"
      onClick={() => setDisplay('flex')}
    >
      Request Deletion
    </Button>
  );
  const deleteCustomer = useSelector((state) => state.privacyCockpit.deleteUserData.userData);

  return (
    <ComponentWrapper
      title="Delete User Data"
      underlined={true}
      id="deleteUserDataTable"
      className="flex flex-col overflow-hidden relative"
      nextComponent={addEntry()}
      height="100%"
    >
      <PopupExample
        open={display}
        setDisplay={setDisplay}
        email={email}
        setEmail={setEmail}
        futureTrack={futureTrack}
        setFutureTrack={setFutureTrack}
      />
      <table className="w-full table-auto my-[10px]">
        <thead>
          <tr className="[&>*]:font-montserrat [&>*]:text-[14px] [&>*]:font-extrabold [&>*]:py-[12px] [&>*]:px-[20px] [&>*]:whitespace-nowrap">
            <td className="text-primary rounded-tl-[10px]">E-mail Address</td>
            <td className="text-primary rounded-tr-[10px]">Block for future tracking</td>
          </tr>
        </thead>
        <tbody className="last-of:rounded-b-[10px]">
          {Object.values(deleteCustomer)
            .slice(0)
            .reverse()
            .slice((page - 1) * ordersPerPage, page * ordersPerPage)
            .map((item, i) => (
              <tr
                key={i}
                className={`text-light [&>*]:font-montserrat [&>*]:text-[14px] [&>*]:font-normal [&>*]:py-[12px] [&>*]:px-[20px] ${
                  !(i & 1) && 'bg-tableStrips/[0.5]'
                }
                `}
              >
                <td width="1/2">{item.email}</td>
                <td width="1/2">{item.data_collection_active ? `Yes` : `No`}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="absolute bottom-0 left-0 w-full py-2">
        <Pagination
          page={page}
          setPage={setPage}
          array={deleteCustomer}
          itemsPerPage={ordersPerPage}
        />
      </div>
    </ComponentWrapper>
  );
};

export default DeleteUserData;
