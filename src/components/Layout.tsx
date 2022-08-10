import React, { FC } from 'react';

import SideBar from 'components/SideBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-row h-min-screen bg-background">
      <SideBar />
      {children}
    </div>
  );
};
export default Layout;
