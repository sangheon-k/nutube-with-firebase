import React from 'react';
import CreateOne from './CreateOne';
import ChannelDashBoard from './ChannelDashBoard';
import useGetChannelInfo from '@/hooks/useGetChannelInfo';

const ChannelPage = () => {
  const { isLoading, channel } = useGetChannelInfo();

  if (isLoading) return;
  return (
    <>
      {channel.id !== '' ? (
        <ChannelDashBoard channel={channel} />
      ) : (
        <CreateOne />
      )}
    </>
  );
};

export default ChannelPage;
