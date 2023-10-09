import Image from 'next/image';
import React from 'react';

const Comments = () => {
  return (
    <div className="relative grid grid-cols-1 px-4 py-3 mb-4 bg-white border-b rounded-[18px]">
      <div className="relative flex gap-4">
        <Image
          src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
          className="relative bg-white border rounded-full h-fit"
          alt="profile"
          loading="lazy"
          width={45}
          height={45}
        />
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            <p className="relative overflow-hidden text-base truncate whitespace-nowrap">
              COMMENTOR
            </p>
            {/* <a className="text-xl text-gray-500" href="#">
              <i className="fa-solid fa-trash"></i>
            </a> */}
            <p className="text-sm text-gray-400">1 days ago</p>
          </div>

          <p className="text-base font-normal leading-5 text-gray-500 text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Maxime quisquam vero adipisci beatae voluptas dolor ame.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
