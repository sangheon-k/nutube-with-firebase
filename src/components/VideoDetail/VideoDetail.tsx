import React from 'react';
import Link from 'next/link';
import { IVideo } from '@/types';
import { format } from 'date-fns';
import Comments from './Comments';
import Recommend from './Recommend';
import PostCommentBox from './PostCommentBox';
import LikeDisLike from './LikeDisLike';
import { AiOutlineEye } from 'react-icons/ai';
import { BsGraphUp } from 'react-icons/bs';
import { GoBell } from 'react-icons/go';

interface Props {
  video: IVideo;
}

const VideoDetailPage = ({ video }: Props) => {
  return (
    <div className="flex flex-col w-full h-full overflow-y-auto md:flex-row">
      <div className="w-full px-4 mx-auto mt-6 border-r h-fit max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col -mx-4 sm">
          {/* Video Wrap */}
          <div className="md:flex-1 md:px-4">
            <div className="mb-4 bg-gray-100 rounded-lg aspect-video">
              <div className="flex items-center justify-center mb-4 bg-gray-100 rounded-lg aspect-video">
                <video
                  src={video.filePath}
                  poster={video.thumbnail}
                  controls
                  className="w-full h-full"
                />
                {/* <span className="text-4xl font-semibold text-gray-300 md:text-5xl">
              Nutube
            </span> */}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="px-6 md:flex-1 sm:px-4">
            <h2 className="flex items-center justify-between mb-2 font-bold leading-tight tracking-tight text-gray-800">
              <span className="text-2xl md:text-3xl">{video.title}</span>
              <span className="flex items-center gap-4">
                <LikeDisLike videoId={video.id} />

                <button
                  type="button"
                  className="flex gap-2 px-4 py-4 font-semibold text-white bg-red-600 rounded-xl hover:bg-red-500"
                  // UnSubscribe : bg-gray-400 rounded-xl hover:bg-gray-500
                >
                  Subscribe <span>0</span> <GoBell />
                </button>
              </span>
            </h2>

            <p className="mt-4 text-gray-500">
              {video.description}
              <span className="mt-2 ml-1 text-sm text-gray-500">
                <span className="text-gray-400">|</span> By{' '}
                <Link
                  href={`/channel/${video.writerId}`}
                  className="text-red-600 hover:underline"
                >
                  {video?.writer}
                </Link>
              </span>
            </p>

            <div className="flex items-center my-8 space-x-4 border-t-gray-400">
              <div>
                <div className="flex items-center gap-1.5 px-3 py-4 rounded-lg ">
                  <AiOutlineEye fontSize={21} color="#a8a29e" />
                  <span className="text-lg font-bold text-stone-500">
                    {video.views}
                  </span>
                </div>
              </div>
              <BsGraphUp className="text-2xl" />
              <div className="">
                <p className="text-xl font-semibold text-red-500 ">
                  Increase 12%
                </p>
                <p className="text-sm text-gray-400 ">
                  Inclusive of Last week.
                </p>
              </div>
              <div className="flex gap-2 px-3 py-1 font-semibold text-white bg-red-600 rounded-xl">
                popular
              </div>
              <span className="block mt-2 text-sm text-end">
                {format(video.createdAt, 'PPpp')}
              </span>
            </div>

            {/* Comments */}
            <div className="pt-8 mt-8 text-xl font-bold border-t md:text-2xl">
              <h2>Comments</h2>
              <PostCommentBox />
              <div className="pt-4">
                <Comments />
                <Comments />
                <Comments />
              </div>
            </div>

            {/* <div className="flex items-center border border-gray-200 appearance-none cursor-pointer rounded-xl h-28">
                  Comment Box
                  <span></span>
                </div> */}
          </div>
        </div>
      </div>

      <Recommend category={video.category} />
    </div>
  );
};

export default VideoDetailPage;
