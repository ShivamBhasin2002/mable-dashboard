import { ComponentWrapper } from 'components/common';
import { useSelector } from 'redux/store';
import { Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { STATUS_TYPE } from 'utility/constants/general';
import PopupExample from './popUpAddUser';

const DeleteUserData = () => {
  const [display, setDisplay] = useState('hidden');
  const { status } = useSelector((state) => state.privacyCockpit.deleteUserData);

  useEffect(() => {
    if (status === STATUS_TYPE.SUCCESS) {
      setDisplay('hidden');
    }
  });

  const addEntry = () => {
    return (
      <Button
        className="w-[8rem] ml-auto"
        type="submit"
        colorScheme="blue"
        onClick={() => setDisplay('flex')}
      >
        + Add User
      </Button>
    );
  };
  const deleteCustomer = useSelector((state) => state.privacyCockpit.deleteUserData.userData);

  return (
    <ComponentWrapper
      title="Delete User Data"
      underlined={true}
      className="mt-[30px] flex flex-col max-w-4xl"
      nextComponent={addEntry()}
    >
      <PopupExample open={display} setDisplay={setDisplay} />
      <table className="w-full table-auto my-[10px]">
        <thead>
          <tr className="[&>*]:font-montserrat [&>*]:text-[14px] [&>*]:font-extrabold [&>*]:py-[12px] [&>*]:px-[20px] [&>*]:whitespace-nowrap">
            <td className="text-primary rounded-tl-[10px]">E-mail Address</td>
            <td className="text-primary rounded-tr-[10px]">Block for future tracking</td>
          </tr>
        </thead>
        {deleteCustomer.map((item, key) => {
          return (
            <tbody key={key} className="last-of:rounded-b-[10px]">
              <tr
                className={`text-light [&>*]:font-montserrat [&>*]:text-[14px] [&>*]:font-normal [&>*]:py-[12px] [&>*]:px-[20px] ${
                  !(key & 1) && 'bg-tableStrips/[0.5]'
                }
          `}
              >
                <td>{item.email}</td>
                <td>{item.data_collection_active ? `Yes` : `No`}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </ComponentWrapper>
  );
};

export default DeleteUserData;
