import { FC } from "react";

import SideBar from "components/SideBar";

interface LayoutProps {
  user: {
    name: string;
    designation: string;
  };
  children: any;
}

const Layout:FC<LayoutProps> = ({ user, children }) => {
  return (
    <div className="flex flex-row h-min-screen bg-background">
      <SideBar user={user} />
      {children}
    </div>
  );
};
export default Layout;
