import React from 'react';
import { useRecoilValue } from 'recoil';
import { channelState } from '@/recoil/channel';

interface Props {
  channelId: string;
}

const EditButton = ({ channelId }: Props) => {
  const { ownerId } = useRecoilValue(channelState);
  const isMyChannel = channelId === ownerId;

  console.log(ownerId, channelId);

  return (
    <>
      {isMyChannel ? (
        <div className="absolute md:top-8 right-7 md:right-40">
          <button className="flex items-center justify-center px-4 py-2 ml-auto mr-0 font-bold text-blue-500 bg-transparent border border-blue-500 rounded-full max-h-max whitespace-nowrap max-w-max hover:border-blue-800 hover:shadow-md">
            Edit Profile
          </button>
        </div>
      ) : null}
    </>
  );
};

export default EditButton;
