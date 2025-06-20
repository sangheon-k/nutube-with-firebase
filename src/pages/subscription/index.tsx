import React, { useEffect, useState } from 'react';
import { auth, db } from '../../../firebase';
import { Typography } from 'antd';
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { ISubscribe } from '@/types';
import useGetSnapshot from '@/hooks/useGetSnapshot';
import VideoList from '@/components/common/VideoList';

const SubscriptionPage = () => {
  const user = auth.currentUser;
  const { data: subscribeDatas } = useGetSnapshot(
    query(
      collection(db, 'subscribes'),
      orderBy('createdAt', 'desc'),
      limit(25),
      where('userId', '==', user?.uid),
    ),
  );

  const [videos, setVideos] = useState([]);

  const getSubscribeVideos = async () => {
    const channelIds = subscribeDatas.map((v: ISubscribe) => v.channelId);
    console.log('channelIds', channelIds);

    const q = query(
      collection(db, 'videos'),
      where('channelId', 'in', [...channelIds]),
      orderBy('createdAt', 'desc'),
      limit(25),
    );

    const results: any = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
      results.push({ id: doc.id, ...doc.data() });
    });

    setVideos(results);
  };

  useEffect(() => {
    if (subscribeDatas.length > 0) {
      getSubscribeVideos();
    }
  }, [subscribeDatas]);

  return (
    <div className="flex-auto px-2 overflow-y-auto md:p-8">
      <Typography.Title level={4}>Subscribe Videos</Typography.Title>
      <div>
        {videos.length > 0 ? (
          <VideoList videos={videos} />
        ) : (
          <p className="px-2 text-gray-500">구독한 영상이 존재하지 않습니다.</p>
        )}
      </div>
    </div>
  );
};

export default SubscriptionPage;
