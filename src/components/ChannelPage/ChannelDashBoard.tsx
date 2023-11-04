import React from 'react';
import MyVideo from '../MyVideo/MyVideo';
import { IChannel } from '@/types';
import { useRecoilValue } from 'recoil';
import { toggleMyChannelState } from '@/recoil/common';

import Banner from './components/Banner';
import Avatar from './components/Avatar';
import Profile from './components/Profile';
import EditButton from './components/EditButton';

interface Props {
  channel: IChannel;
}

const ChannelDashBoard = ({ channel }: Props) => {
  const isMyChannel = useRecoilValue(toggleMyChannelState);
  return (
    <div className="w-full overflow-y-auto">
      <div className="">
        <Banner />
        <div className="relative flex flex-col gap-6 px-6 py-6 pt-8 md:px-40 md:flex-row">
          <Avatar photoUrl={channel.ownerPhotoUrl} />
          <Profile channel={channel} />
          <EditButton />
        </div>
      </div>
      <hr className="border-gray-300" />
      <div className="md:px-40">
        <h2 className="px-6 pt-6 text-2xl font-semibold">My Video</h2>
        <MyVideo />
      </div>
    </div>
  );
};

export default ChannelDashBoard;
