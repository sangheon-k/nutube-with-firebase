import useGetSnapshot from '@/hooks/useGetSnapshot';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  query,
  where,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { GoBell } from 'react-icons/go';
import { auth, db } from '../../../firebase';
import { ISubscribe } from '@/types';

interface Props {
  writerId: string;
}

const Subscribe = ({ writerId }: Props) => {
  const user = auth.currentUser;
  const [subsFromMeId, setSubsFromMeId] = useState('');
  const { data: subscribe } = useGetSnapshot(
    query(collection(db, 'subscribes'), where('channelId', '==', writerId)),
  );

  const onSubscribe = async () => {
    if (!user) return;
    try {
      const isNotSubscribed = subsFromMeId === '';
      if (isNotSubscribed) {
        await addDoc(collection(db, 'subscribes'), {
          writerId: writerId,
          userId: user?.uid,
          createdAt: Date.now(),
        });
      } else {
        await deleteDoc(doc(db, 'subscribes', subsFromMeId));
        setSubsFromMeId('');
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const subsFromMe = subscribe.find(
      (item: ISubscribe) => item.userId === user?.uid,
    );
    subsFromMe && setSubsFromMeId(subsFromMe.id);
  }, [subscribe]);

  return (
    <button
      type="button"
      className={`flex gap-2 px-4 py-4 font-semibold text-white rounded-xl ${
        subsFromMeId === ''
          ? ' bg-red-600  hover:bg-red-500'
          : ' bg-gray-400 hover:bg-gray-500'
      }`}
      onClick={onSubscribe}
    >
      {subsFromMeId === '' ? 'Subscribe' : 'Subscribed'}
      <span> {subscribe.length}</span> <GoBell />
    </button>
  );
};

export default Subscribe;
