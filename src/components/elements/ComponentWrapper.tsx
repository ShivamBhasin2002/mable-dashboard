import { FC } from 'react';
interface ComponentWrapperProps {
  width?: number | undefined;
  height?: number | undefined;
  children: React.ReactNode;
  title?: string | undefined;
  nextComponent?: React.ReactNode | undefined;
  underlined?: boolean | undefined;
  className?: string | undefined;
}

const ComponentWrapper: FC<ComponentWrapperProps> = ({
  width,
  height,
  children,
  title,
  nextComponent,
  underlined = false,
  className
}) => {
  return (
    <article
      className={`lg:min-w-[${width}px] h-[${height}px] bg-gradient-to-r from-bgContainerFrom to-bgContainerTo rounded-[30px] px-[40px] py-[30px] flex-grow ${className}`}
    >
      <div
        className={` text-light ${
          title && 'mb-[20px]'
        } flex items-center font-heading text-[22px] font-bold justify-between ${
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