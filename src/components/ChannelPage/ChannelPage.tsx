import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { toggleMyChannelState } from '@/recoil/common';
import { auth } from '../../../firebase';
import CreateOne from './CreateOne';
import ChannelDashBoard from './ChannelDashBoard';
import { channelState, checkHasChannelState } from '@/recoil/channel';

const ChannelPage = () => {
  const user = auth.currentUser;
  const router = useRouter();
  const [channel, setChannel] = useRecoilState(channelState);
  const hasChannel = useRecoilValue(checkHasChannelState);
  const setIsMyChannel = useSetRecoilState(toggleMyChannelState);

  const pathId = router.asPath.split('/').slice(-1)[0];

  useEffect(() => {
    setIsMyChannel(user?.uid === pathId);
  }, [pathId]);

  console.log(channel);
  return (
    <>
      {!hasChannel && <CreateOne />}
      {hasChannel && <ChannelDashBoard channel={channel} />}
    </>
  );
};

export default ChannelPage;
