import { useQuery } from 'react-query';
import VideoCard from './VideoCard';
import MockData from '../../mock/video.json';

const VideoCardList = () => {
  const { data } = useQuery({
    queryKey: [],
    queryFn: getVideoList,
  });

  return (
    <div className="grid mx-auto sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {data?.map((video) => (
        <VideoCard key={video._id} video={video} />
      ))}
    </div>
  );
};

export default VideoCardList;

const getVideoList = () => {
  return MockData;
};
