import { Spinner } from "@chakra-ui/react";
import colors from "@utility/colors";

import { LoadingProps } from "@utility/typeDefinitions/componentPropTypes";

const Loading = ({ message = "Loading", className }: LoadingProps) => (
  <div
    className={`flex flex-col items-center justify-center gap-4 w-full h-full ${className}`}
  >
    <div>
      <Spinner color={colors.light} size="xl" />
    </div>
    <div className="text-3xl font-montserrat font-bold text-light">
      {message}
    </div>
  </div>
);

export default Loading;
