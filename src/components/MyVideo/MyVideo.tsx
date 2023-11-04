import React from 'react';
import VideoCard from '../VideoCardList/VideoCard';
import useGetSnapshot from '@/hooks/useGetSnapshot';
import { collection, limit, orderBy, query, where } from 'firebase/firestore';
import { auth, db } from '../../../firebase';
import { IVideo } from '@/types';

const MyVideo = () => {
  const user = auth.currentUser;
  const { data: videos, size } = useGetSnapshot(
    query(
      collection(db, 'videos'),
      where('writerId', '==', user?.uid),
      orderBy('createdAt', 'desc'),
      limit(25),
    ),
  );

  return (
    <article className="p-4">
      {size > 0 ? (
        <div className="grid mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {videos.map((video: IVideo) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      ) : (
        <p className="px-2 text-gray-500">
          업로드된 영상이 없습니다. 영상을 업로드해주세요.
        </p>
      )}
    </article>
  );
};

export default MyVideo;
