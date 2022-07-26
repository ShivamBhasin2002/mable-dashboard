import {FC} from 'react';

interface DashboardComponentWrapperProps {
  children: React.ReactNode;
}

const DashboardComponentWrapper:FC<DashboardComponentWrapperProps> = ({children}) => {
  return (
    <div className="min-w-[280px] min-h-[280px] bg-bgPrimary">
      {children}
    </div>
  );
}