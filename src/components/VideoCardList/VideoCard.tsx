import Link from 'next/link';
import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import { IVideo } from '@/types';
import { useState } from 'react';
import { Skeleton } from 'antd';

interface VideoProps {
  video: IVideo;
  vertical?: boolean;
}

const VideoCard = ({ video, vertical }: VideoProps) => {
  const duration = Math.floor(video.duration);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`relative m-3 mb-0 overflow-hidden border-gray-800 cursor-pointer ${
        vertical && 'flex mx-4'
      }`}
    >
      <Link
        href={`/video/${video.id}`}
        className={`relative block overflow-hidden rounded-lg aspect-[15/9] ${
          vertical && 'max-w-[147px] w-full'
        }`}
        // style={{ aspectRatio: '15/9' }}
      >
        {isLoading && (
          <Skeleton.Node
            active={true}
            style={{ width: '100vw', height: '100vh' }}
          />
        )}
        <Image
          src={
            video.thumbnail ||
            'https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg'
          }
          fill
          style={{ objectFit: 'cover' }}
          alt="img"
          onLoadingComplete={() => setIsLoading(false)}
        />
        {/* <div className="absolute top-0 right-0 p-1 px-2 m-1 text-xs font-bold text-gray-200 bg-red-500 rounded badge">
          Live
        </div> */}
        <div className="absolute top-0 right-0 p-1 px-2 m-1 text-xs font-bold text-white bg-black bg-opacity-50	 rounded md:p-[3px] xl:px-2 ">
          {`00:${duration < 10 ? '0' + duration : duration}` || '00:00'}
        </div>
      </Link>

      <div
        className={`px-2 py-3 text-[#0f0f0f] ${vertical && 'px-4 flex-grow'}`}
      >
        <Link
          href={`/video/${video.id}`}
          className="max-w-[130px] block overflow-hidden font-bold cursor-pointer title hover:underline text-ellipsis whitespace-nowrap"
        >
          {video.title}
        </Link>

        <span className="text-[#606060] ">{video.writer}</span>

        <span className="block text-[#606060]">
          <span>조회수 {video.views}회</span>
          <span className="mx-1">&middot;</span>
          <span>
            {formatDistanceToNow(video.createdAt, {
              addSuffix: true,
              locale: ko,
            })}
          </span>
        </span>
      </div>

      {/* <div className="flex p-1 text-xs font-semibold text-gray-500 bg-gray-300 info-box">
          <span className="p-1 px-2 mr-1 font-bold">105 Watching</span>
          <span className="p-1 px-2 mr-1 font-bold border-l border-gray-400">
            105 Likes
          </span>
          <span className="p-1 px-2 mr-1 font-bold border-l border-gray-400">
            105 Dislikes
          </span>
        </div> */}
    </div>
  );
};

export default VideoCard;
