import { useMemo } from 'react';
import { useRouter } from 'next/router';
import VideoDetailPage from '@/components/VideoDetail/VideoDetail';
import { useQuery } from 'react-query';

import { DocumentData, doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import LoadingScreen from '@/components/LoadingScreen/LoadingScreen';

const VideoDetail = () => {
  const { query: params } = useRouter();
  const videoId = useMemo(() => params.id?.toString?.() ?? '', [params.id]);
  const { data: video, isLoading } = useQuery({
    queryKey: ['video', videoId],
    queryFn: () => fetchVideo(videoId),
  });

  return <>{video ? <VideoDetailPage video={video} /> : <LoadingScreen />}</>;
};

export default VideoDetail;

export const fetchVideo = async (videoId: string) => {
  try {
    const docRef = doc(db, 'videos', videoId);
    const result = await getDoc(docRef);
    return result.data() as DocumentData;
  } catch (e) {
    console.error(e);
  }
};
