import { ComponentWrapper } from 'components/common';
import { Button } from '@chakra-ui/react';
import { submitLink } from 'utility/functions/helper';

const DeleteUserData = () => {
  const addEntry = () => {
    return (
      <Button className="w-[8rem]" type="submit" colorScheme="blue" onClick={() => submitLink()}>
        + Add Entry
      </Button>
    );
  };
  return (
    <ComponentWrapper
      title="Delete User Data"
      underlined={true}
      className=" flex flex-col h-90 w-full"
      nextComponent={addEntry()}
    >
      <table className="w-full table-auto my-[10px]">
        <thead>
          <tr className="[&>*]:font-montserrat [&>*]:text-[14px] [&>*]:font-extrabold [&>*]:py-[12px] [&>*]:px-[20px] [&>*]:whitespace-nowrap">
            <td className="text-primary rounded-tl-[10px]">E-mail Address</td>
            <td className="text-primary rounded-tr-[10px]">Block for future tracking</td>
          </tr>
        </thead>
        <tbody className="last-of:rounded-b-[10px]">
          <tr
            className={`text-light [&>*]:font-montserrat [&>*]:text-[14px] [&>*]:font-normal [&>*]:py-[12px] [&>*]:px-[20px] bg-tableStrips/[0.5]
            `}
          >
            <td>sampleEmail.com</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>
    </ComponentWrapper>
  );
};

export default DeleteUserData;
