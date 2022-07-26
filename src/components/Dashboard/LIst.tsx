import { FC } from "react";
import ComponentWrapper from "./ComponentWrapper";

interface ListProps {
  data: {
    title: string;
    array: {
      name: string;
      number: number;
    }[];
  };
}

const List: FC<ListProps> = ({ data }) => {
  return (
    <ComponentWrapper title={data.title}>
      {data.array.map(({ name, number }, i) => (
        <div key={i}>
          <span className="flex flex-row items-center justify-between">
            <span className="text-bgPrimary-dark">{name}</span>
            <span className="text-primary">{number}</span>
          </span>
          <hr className="h-[2px] border-none my-[10px] bg-[#7F8C9F]/20" />
        </div>
      ))}
    </ComponentWrapper>
  );
};
export default List;
