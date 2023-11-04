import React, { useEffect, useState } from 'react';
import {
  DocumentData,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { useRecoilState } from 'recoil';
import { channelState } from '@/recoil/channel';
import { auth, db } from '../../firebase';

const useGetChannelInfo = () => {
  const [isLoading, setLoading] = useState(false);
  const [channel, setChannel] = useRecoilState(channelState);
  const user = auth.currentUser;

  const fetchMyChannel = async (userId: string | undefined) => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(
        query(collection(db, 'channels'), where('ownerId', '==', userId)),
      );
      querySnapshot.docs.map((doc: DocumentData) => {
        setChannel({ id: doc.id, ...doc.data() });
      });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyChannel(user?.uid);
  }, []);

  return { isLoading, channel };
};

export default useGetChannelInfo;
