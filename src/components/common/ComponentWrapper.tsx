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
  status
}: ComponentWrapperProps) => {
  const checkStatus = (equalTo: STATUS_TYPE) => {
    if (Array.isArray(status)) return status.includes(equalTo);
    return status === equalTo;
  };
  return (
    <article
      className={`bg-gradient-to-r from-bgContainerFrom to-bgContainerTo rounded-[30px] px-[40px] py-[30px] relative ${className}`}
      style={{ width: width ?? 'auto', height: height ?? 'auto' }}
    >
      {checkStatus(STATUS_TYPE.FETCHING) && (
        <div
          className={`w-full h-full z-[2] bg-black/20 absolute top-0 left-0 rounded-[30px] px-[40px] py-[30px] backdrop-blur-sm flex flex-col justify-center gap-2 items-center `}
        >
          <Spinner w={50} h={50} thickness="7px" color={colors.lines} speed="2s" />
          <span className="text-light/40 flex items-center font-montserrat text-[22px] font-bold text-center `">
            Loading
          </span>
        </div>
      )}
      {checkStatus(STATUS_TYPE.ERROR) && (
        <div
          className={`w-full h-full z-[2] bg-black/20 absolute top-0 left-0 rounded-[30px] px-[40px] py-[30px] backdrop-blur-sm flex flex-col justify-center gap-2 items-center `}
        >
          <Icon
            size="100px"
            className="text-error/30"
            icon="errorTriangular"
            color={colors.light}
          />
          <span className="text-light/40 flex items-center font-montserrat text-[22px] font-bold text-center `">
            Error While Fetching
          </span>
        </div>
      )}
      <>
        <div
          className={` text-primary ${
            title && 'mb-[20px]'
          } flex items-center font-montserrat text-[16px] lg:text-[22px] font-bold justify-between ${
            underlined ? 'border-b-2 border-lines/[0.15]' : ''
          }`}
        >
          {title}
          {nextComponent}
        </div>
        {children}
      </>
    </article>
  );
};

export default ComponentWrapper;
