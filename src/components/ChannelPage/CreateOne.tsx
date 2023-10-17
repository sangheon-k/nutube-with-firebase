import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../../../firebase';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { useRouter } from 'next/router';

interface Props {
  userId: string | undefined;
}

const CreateOne = ({ userId }: Props) => {
  const router = useRouter();
  const onCreateChannel = async () => {
    try {
      await addDoc(collection(db, 'channels'), {
        channelName: userId,
        channelOwnerId: userId,
      });
    } catch (e) {
      console.error(e);
    } finally {
      router.reload();
    }
  };
  return (
    <div className="flex items-center justify-center w-full ">
      <div className="text-center">
        <h2 className="flex flex-col text-2xl font-medium text-red-500 ">
          You don&apos;t have a channel yet.
          <span className="text-xl font-normal text-[#1a1a2b]">
            Please create one!
          </span>
        </h2>
        <button
          onClick={onCreateChannel}
          className=" mt-4 inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D] hover:border-rose-300 hover:bg-rose-50 hover:text-red-500 cursor-pointer"
        >
          Create a Channel
        </button>
      </div>
    </div>
  );
};

export default CreateOne;
