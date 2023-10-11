import { useMemo } from 'react';
import { useRouter } from 'next/router';
import VideoDetailPage from '@/components/VideoDetail/VideoDetail';
import { useQuery } from 'react-query';

import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import LoadingScreen from '@/components/LoadingScreen/LoadingScreen';
import { IVideo } from '@/types';

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

export const fetchVideo = async (id: string) => {
  try {
    const docRef = doc(db, 'videos', id);
    const result = await getDoc(docRef);
    const newCountViews = result.data()?.views + 1;
    await updateDoc(docRef, { views: newCountViews });
    return { ...result.data(), views: newCountViews } as IVideo;
  } catch (e) {
    console.error(e);
  }
};
