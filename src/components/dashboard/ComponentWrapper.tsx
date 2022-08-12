import { FC } from 'react';
interface ComponentWrapperProps {
  width?: number;
  height?: number;
  children: React.ReactNode;
  title: string;
  nextComponent?: React.ReactNode;
  underlined?: boolean;
}

const ComponentWrapper: FC<ComponentWrapperProps> = ({
  width,
  height,
  children,
  title,
  nextComponent,
  underlined = false
}) => {
  return (
    <article
      className={`lg:min-w-[${width}px] h-[${height}px] bg-gradient-to-r from-bgContainer-from to-bgContainer-to rounded-[30px] px-[40px] py-[30px] flex-grow`}
    >
      <div
        className={` text-light mb-[20px] flex items-center font-heading text-[22px] font-bold justify-between ${
          underlined ? 'border-b-2 border-lines/[0.15]' : ''
        }`}
      >
        {title}
        {nextComponent}
      </div>
      {children}
    </article>
  );
};

export default ComponentWrapper;
