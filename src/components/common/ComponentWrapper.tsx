import { Spinner } from '@chakra-ui/react';
import Icon from 'assets/icons';
import colors from 'utility/colors';
import { STATUS_TYPE } from 'utility/constants/general';
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
  return (
    <article
      className={`lg:min-w-[${width}px] h-[${height}px] bg-gradient-to-r from-bgContainerFrom to-bgContainerTo rounded-[30px] px-[40px] py-[30px] relative ${className}`}
    >
      {status === STATUS_TYPE.FETCHING && (
        <div
          className={`lg:min-w-[${width}px] h-[${height}px] w-full h-full z-[2] bg-black/20 absolute top-0 left-0 rounded-[30px] px-[40px] py-[30px] backdrop-blur-sm flex flex-col justify-evenly items-center `}
        >
          <Spinner w={100} h={100} thickness="7px" color={colors.light} />
          <span className="text-light flex items-center font-montserrat text-[22px] font-bold `">
            Loading
          </span>
        </div>
      )}
      {status === STATUS_TYPE.ERROR && (
        <div
          className={`lg:min-w-[${width}px] h-[${height}px] w-full h-full z-[2] bg-black/20 absolute top-0 left-0 rounded-[30px] px-[40px] py-[30px] backdrop-blur-sm flex flex-col justify-evenly items-center `}
        >
          <Icon
            size="100px"
            className="text-error/30"
            icon="errorTriangular"
            color={colors.light}
          />
          <span className="text-light flex items-center font-montserrat text-[22px] font-bold `">
            Error While Fetching
          </span>
        </div>
      )}
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
    </article>
  );
};

export default ComponentWrapper;
