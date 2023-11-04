import React from 'react';
import CreateOne from './CreateOne';
import ChannelDashBoard from './ChannelDashBoard';
import { useRecoilValue } from 'recoil';
import { channelState } from '@/recoil/channel';

const ChannelPage = () => {
  const channel = useRecoilValue(channelState);

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
