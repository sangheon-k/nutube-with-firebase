import React, { ReactNode } from 'react';
import Aside from '../Aside/Aside';
import NavBar from '../NavBar/NavBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-full">
      <NavBar />
      <div className="flex h-[calc(100%-62px)]">
        <Aside />
        {children}
      </div>
    </div>
  );
};

export default Layout;
