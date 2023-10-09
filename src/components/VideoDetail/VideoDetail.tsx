import React from 'react';
import { BsGraphUp } from 'react-icons/bs';
import { GoBell } from 'react-icons/go';
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
  AiOutlineEye,
} from 'react-icons/ai';
import Comments from './Comments';
import Recommend from './Recommend';
import PostCommentBox from './PostCommentBox';

const VideoDetailPage = () => {
  return (
    <div className="flex w-full h-full overflow-y-auto">
      <div className="w-full px-4 mx-auto mt-6 border-r h-fit max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col -mx-4">
          <div className="px-4 md:flex-1">
            <div className="mb-4 bg-gray-100 rounded-lg aspect-video">
              <div className="flex items-center justify-center mb-4 bg-gray-100 rounded-lg aspect-video">
                <video className="w-full h-full" controls />
                {/* <span className="text-4xl font-semibold text-gray-300 md:text-5xl">
                  Nutube
                </span> */}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="px-4 md:flex-1">
            <h2 className="flex items-center justify-between mb-2 font-bold leading-tight tracking-tight text-gray-800">
              <span className="text-2xl md:text-3xl">
                Lorem ipsum dolor, sit amet consectetur, adipisicing elit.
              </span>
              <span className="flex items-center gap-4">
                <button
                  type="button"
                  className="flex items-end gap-2 text-gray-500 hover:text-red-600"
                >
                  <AiOutlineLike className="text-2xl" />
                  {/* <AiFillLike className="text-2xl" /> */}
                  <span>0</span>
                </button>

                <button
                  type="button"
                  className="flex items-end gap-2 text-gray-500 hover:text-red-600"
                >
                  <AiOutlineDislike className="text-2xl" />
                  {/* <AiFillDislike className="text-2xl" /> */}
                  <span>0</span>
                </button>

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
              Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae
              exercitationem porro saepe ea harum corrupti vero id laudantium
              <br />
              enim, libero blanditiis expedita cupiditate a est.
              <span className="mt-2 ml-1 text-sm text-gray-500">
                By{' '}
                <a href="#" className="text-red-600 hover:underline">
                  ABC Company
                </a>
              </span>
            </p>

            <div className="flex items-center my-8 space-x-4 border-t-gray-400">
              <div>
                <div className="flex items-center gap-1.5 px-3 py-4 rounded-lg ">
                  <AiOutlineEye fontSize={21} color="#a8a29e" />
                  <span className="text-lg font-bold text-stone-500">250</span>
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
      <div className="w-1/4  min-w-[350px]">
        <h2 className="px-4 pt-8 pb-0 text-xl font-bold md:text-2xl">
          Recommend
        </h2>
        <Recommend category="0" />
      </div>
    </div>
  );
};

export default VideoDetailPage;
