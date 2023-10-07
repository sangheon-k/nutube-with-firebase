import { useEffect, useState } from 'react';
import { Unsubscribe } from 'firebase/auth';
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import { db } from '../../../firebase';
import { IVideo } from '@/types';
import VideoCard from '../VideoCardList/VideoCard';

const HomePage = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);
  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;
    const fetchVideos = async () => {
      const videosQuery = query(
        collection(db, 'videos'), // collection
        orderBy('createdAt', 'desc'), // orderBy
        limit(25), // limit
      );
      unsubscribe = await onSnapshot(videosQuery, (snapshot) => {
        const videos = snapshot.docs.map((doc) => {
          const {
            views,
            writer,
            writerId,
            title,
            description,
            privacy,
            filePath,
            category,
            duration,
            thumbnail,
            createdAt,
            updatedAt,
          } = doc.data();
          return {
            id: doc.id,
            views,
            writer,
            writerId,
            title,
            description,
            privacy,
            filePath,
            category,
            duration,
            thumbnail,
            createdAt,
            updatedAt,
          };
        });
        setVideos(videos);
      });
    };
    fetchVideos();
    return () => {
      unsubscribe && unsubscribe();
    };
  }, []);

  console.log(videos);

  return (
    <main className="p-10 overflow-y-auto">
      <div className="grid mx-auto sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
