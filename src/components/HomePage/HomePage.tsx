import { db } from '../../../firebase';
import VideoCard from '../VideoCardList/VideoCard';
import useGetSnapshot from '@/hooks/useGetSnapshot';
import { collection, limit, orderBy, query } from 'firebase/firestore';
import { IVideo } from '@/types';

const HomePage = () => {
  const { data: videos } = useGetSnapshot(
    query(collection(db, 'videos'), orderBy('createdAt', 'desc'), limit(25)),
  );

  return (
    <main className="px-2 overflow-y-auto md:p-8">
      <div className="grid mx-auto sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {videos.map((video: IVideo) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
