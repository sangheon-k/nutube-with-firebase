import { db } from '../../../firebase';
import VideoList from '../common/VideoList';
import useGetSnapshot from '@/hooks/useGetSnapshot';
import { collection, limit, orderBy, query } from 'firebase/firestore';

const HomePage = () => {
  const { data: videos } = useGetSnapshot(
    query(collection(db, 'videos'), orderBy('createdAt', 'desc'), limit(25)),
  );

  return (
    <main className="px-2 overflow-y-auto md:p-8">
      <VideoList videos={videos} />
    </main>
  );
};

export default HomePage;
