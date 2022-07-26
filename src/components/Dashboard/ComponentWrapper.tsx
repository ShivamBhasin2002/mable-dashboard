import { FC } from "react";
import Icon from "../../data/icons";

interface ComponentWrapperProps {
  width?: number;
  height?: number;
  children: React.ReactNode;
  title: string;
  titleIcon?: string;
  color?: string;
  textColor?: string;
}

const ComponentWrapper: FC<ComponentWrapperProps> = ({
  width = 280,
  height = 280,
  children,
  title,
  titleIcon,
  color = "bgPrimary",
  textColor = "bgPrimary-dark",
}) => {
  return (
    <article
      className={`w-[${width}px] h-[${height}px] bg-${color} rounded-2xl p-8`}
    >
      <div
        className={`font-bold text-lg text-${textColor} mb-[20px] flex items-center`}
      >
        {titleIcon ? (
          <span className="w-[44px] h-[44px] rounded-lg bg-primary/25 flex justify-center items-center mr-8 text-3xl">
            <Icon icon={titleIcon} />
          </span>
        ) : null}
        {title}
      </div>
      {children}
    </article>
  );
};

export default ComponentWrapper;
