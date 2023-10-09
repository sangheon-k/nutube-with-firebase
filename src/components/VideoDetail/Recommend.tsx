import { IVideo } from '@/types';
import { Unsubscribe } from 'firebase/auth';
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase';
import VideoCard from '../VideoCardList/VideoCard';

interface Props {
  category: string;
}

const Recommend = ({ category }: Props) => {
  const [videos, setVideos] = useState<IVideo[]>([]);
  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;
    const fetchVideos = async () => {
      const videosQuery = query(
        collection(db, 'videos'), // collection
        where('category', '==', category), // where
        orderBy('createdAt', 'desc'), // orderBy
        limit(25), // limit
      );
      unsubscribe = await onSnapshot(videosQuery, (snapshot) => {
        const videos = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          } as IVideo;
        });
        setVideos(videos);
      });
    };
    fetchVideos();
    return () => {
      unsubscribe && unsubscribe();
    };
  }, []);

  return (
    <div className="flex flex-col mt-1">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} vertical />
      ))}
    </div>
  );
};

export default Recommend;
