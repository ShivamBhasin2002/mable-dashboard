// import { Spinner } from '@chakra-ui/react';
// import { STATUS_TYPE } from 'utility/constants/general';
import { ComponentWrapperProps } from 'utility/typeDefinitions/componentPropTypes';

const ComponentWrapper = ({
  width,
  height,
  children,
  title,
  nextComponent,
  underlined = false,
  className
}: // status
ComponentWrapperProps) => {
  return (
    <article
      className={`lg:min-w-[${width}px] h-[${height}px] bg-gradient-to-r from-bgContainerFrom to-bgContainerTo rounded-[30px] px-[40px] py-[30px] ${className}`}
    >
      {/* {status === STATUS_TYPE.FETCHING ? (
        <Spinner />
      ) : ( */}
      <>
        <div
          className={` text-light ${
            title && 'mb-[20px]'
          } flex items-center font-montserrat text-[22px] font-bold justify-between ${
            underlined ? 'border-b-2 border-lines/[0.15]' : ''
          }`}
        >
          {title}
          {nextComponent}
        </div>
        {children}
      </>
      {/* )} */}
    </article>
  );
};

export default ComponentWrapper;
