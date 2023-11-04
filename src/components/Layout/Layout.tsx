import React, { ReactNode } from 'react';
import Aside from '../Aside/Aside';
import NavBar from '../NavBar/NavBar';
import useGetChannelInfo from '@/hooks/useGetChannelInfo';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isLoading } = useGetChannelInfo();

  return (
    <div className="h-full">
      <NavBar />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="flex h-[calc(100%-62px)]">
          <Aside />
          {children}
        </div>
      )}
    </div>
  );
};

export default Layout;
