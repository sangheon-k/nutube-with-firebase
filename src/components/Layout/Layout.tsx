import React, { ReactNode, useState } from 'react';
import Aside from '../Aside/Aside';
import NavBar from '../NavBar/NavBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isAsideOpen, setIsAsideOpen] = useState<boolean>(true);

  return (
    <div className="h-full">
      <NavBar setIsAsideOpen={setIsAsideOpen} />
      <div className="flex h-[calc(100%-53px)]">
        <Aside isAsideOpen={isAsideOpen} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
