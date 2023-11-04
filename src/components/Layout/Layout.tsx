import React, { ReactNode } from 'react';
import Aside from '../Aside/Aside';
import NavBar from '../NavBar/NavBar';
import useGetChannelInfo from '@/hooks/useGetChannelInfo';
import { useRecoilValue } from 'recoil';
import { channelState } from '@/recoil/channel';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isLoading } = useGetChannelInfo();
  const channel = useRecoilValue(channelState);
  console.log(channel);

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
