import Image from 'next/image';
import React from 'react';

const Avatar = ({ photoUrl }: { photoUrl: string }) => {
  return (
    <div className="flex justify-center w-full relative rounded-full md avatar h-[9rem] md:w-[9rem] mt-[-80px]">
      <Image
        className="relative  rounded-full md h-[9rem] w-[9rem]"
        src={
          photoUrl ??
          'https://pbs.twimg.com/profile_images/1254779846615420930/7I4kP65u_400x400.jpg'
        }
        alt=""
        width={400}
        height={400}
      />
      <div className="absolute"></div>
    </div>
  );
};

export default Avatar;
