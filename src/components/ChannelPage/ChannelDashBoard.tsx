import React from 'react';
import { useRouter } from 'next/router';
import { IChannel } from '@/types';

import Banner from './components/Banner';
import Avatar from './components/Avatar';
import Profile from './components/Profile';
import EditButton from './components/EditButton';
import VideoList from '../common/VideoList';

import useGetSnapshot from '@/hooks/useGetSnapshot';
import { db } from '../../../firebase';
import {
  DocumentData,
  collection,
  limit,
  orderBy,
  query,
  where,
} from 'firebase/firestore';

interface Props {
  channel: DocumentData;
}

const ChannelDashBoard = ({ channel }: Props) => {
  const router = useRouter();
  const pathId = router.query.id;
  const { data: channelVideos, size } = useGetSnapshot(
    query(
      collection(db, 'videos'),
      where('channelId', '==', pathId),
      orderBy('createdAt', 'desc'),
      limit(25),
    ),
  );

  return (
    <div className="w-full overflow-y-auto">
      <div className="">
        <Banner />
        <div className="relative flex flex-col gap-6 px-6 py-6 pt-8 md:px-40 md:flex-row">
          <Avatar photoUrl={channel.ownerPhotoUrl} />
          <Profile channel={channel} />
          <EditButton channelId={channel.id} />
        </div>
      </div>
      <hr className="border-gray-300" />
      <div className="md:px-40">
        <div className="p-4">
          {size > 0 ? (
            <VideoList videos={channelVideos} />
          ) : (
            <p className="px-2 text-gray-500">
              업로드된 영상이 없습니다. 영상을 업로드해주세요.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChannelDashBoard;
