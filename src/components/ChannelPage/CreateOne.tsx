import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../../firebase';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const CreateOne = () => {
  const user = auth.currentUser;
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

  const onCreateChannel = async () => {
    if (!user) return;
    try {
      setLoading(true);
      await addDoc(collection(db, 'channels'), {
        channelName: user.uid,
        description: '',
        channelBannerImg: '',
        ownerId: user.uid,
        ownerName: user.email ? user.email.split('@')[0] : user.uid,
        ownerPhotoUrl: user.photoURL,
        createdAt: Date.now(),
      });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
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
          {isLoading ? <LoadingScreen /> : 'Create a Channel'}
        </button>
      </div>
    </div>
  );
};

export default CreateOne;
