import { Spinner } from '@chakra-ui/react';
import Icon from 'assets/icons';
import colors from 'utility/colors';
import { STATUS_TYPE } from 'utility/constants/enums';
import { ComponentWrapperProps } from 'utility/typeDefinitions/componentPropTypes';

const ComponentWrapper = ({
  width,
  height,
  children,
  title,
  nextComponent,
  underlined = false,
  className,
  status,
  id
}: ComponentWrapperProps) => {
  const checkStatus = (equalTo: STATUS_TYPE) => {
    if (Array.isArray(status)) return status.includes(equalTo);
    return status === equalTo;
  };
  return (
    <article
      id={id}
      className={`bg-gradient-to-r from-bgContainerFrom to-bgContainerTo rounded-[.625rem] px-[1.25rem] py-[.9375rem] relative ${className}`}
      style={{ width: width ?? 'auto', height: height ?? 'auto' }}
    >
      {checkStatus(STATUS_TYPE.FETCHING) && (
        <div
          className={`w-full h-full z-[2] bg-black/20 absolute top-0 left-0 rounded-[.625rem]  backdrop-blur-sm flex flex-col justify-center gap-2 items-center `}
        >
          <Spinner size="xl" thickness="5px" color={colors.lines} />
          <span className="text-light/40 flex items-center font-montserrat text-[.8rem] font-bold text-center `">
            Loading
          </span>
        </div>
      )}
      {checkStatus(STATUS_TYPE.ERROR) && (
        <div
          className={`w-full h-full z-[2] bg-black/20 absolute top-0 left-0 rounded-[.625rem] px-[2.5rem] py-[1.875rem] backdrop-blur-sm flex flex-col justify-center gap-2 items-center `}
        >
          <Icon
            size="100px"
            className="text-error/30"
            icon="errorTriangular"
            color={colors.light}
          />
          <span className="text-light/40 flex items-center font-montserrat text-[1.375rem] font-bold text-center `">
            Error While Fetching
          </span>
        </div>
      )}
      <>
        {(title || nextComponent) && (
          <div
            className={` text-light ${
              title && 'mb-[.625rem]'
            } flex items-center font-montserrat text-[.8rem] lg:text-[1.1rem] font-bold justify-between ${
              underlined ? 'border-b-2 border-lines/[0.15]' : ''
            }`}
          >
            {title}
            {nextComponent}
          </div>
        )}
        <div className={title || nextComponent ? 'h-[calc(100%-45px)]' : 'h-full'}>{children}</div>
      </>
    </article>
  );
};

export default ComponentWrapper;
