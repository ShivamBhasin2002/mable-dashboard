import { ComponentWrapper } from 'components/common';
import { useSelector } from 'redux/store';
import { useEffect, useState } from 'react';
import { useShowToast } from 'utility/customHooks';
import { STATUS_TYPE } from 'utility/constants/enums';
import { Button } from '@chakra-ui/react';
import { clearDeleteUserState } from 'redux/reducers/settings/privacyCockpit/privacyCockpitSlice';
import Icon from 'assets/icons';
import PopupExample from './popUpAddUser';

const DeleteUserData = () => {
  const [display, setDisplay] = useState('hidden');
  const [email, setEmail] = useState('');
  const [futureTrack, setFutureTrack] = useState<boolean>(false);
  const [page, setPage] = useState(1);
  const { status } = useSelector((state) => state.privacyCockpit.deleteUserData);
  const toast = useShowToast();

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
      className="flex flex-col overflow-hidden"
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
            .slice((page - 1) * 5, page * 5)
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
      {deleteCustomer.length > 5 && (
        <div className="flex justify-center items-center gap-4">
          <button
            className="w-[35px] h-[35px] rounded-[8px] bg-primary text-light disabled:text-dark flex items-center justify-center"
            disabled={page === 1}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            <Icon icon="left" />
          </button>
          <div className=" text-light">
            Page {page}/{Math.ceil(deleteCustomer.length / 5)}
          </div>
          <button
            className="w-[35px] h-[35px] rounded-[8px] bg-primary text-light disabled:text-dark flex items-center justify-center"
            disabled={page === Math.ceil(deleteCustomer.length / 5)}
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
          >
            <Icon icon="right" />
          </button>
        </div>
      )}
    </ComponentWrapper>
  );
};

export default DeleteUserData;
