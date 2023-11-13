import { IVideo } from '@/types';
import React from 'react';
import VideoCard from '../VideoCardList/VideoCard';
import { DocumentData } from 'firebase/firestore';

interface IVideoList {
  videos: DocumentData;
}

const VideoList = ({ videos }: IVideoList) => {
  return (
    <div className="grid mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {videos.map((video: IVideo) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoList;
