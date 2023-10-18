import React, { useEffect, useState } from 'react';
import CreateOne from './CreateOne';
import { auth, db } from '../../../firebase';
import {
  DocumentData,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import ChannelDashBoard from './ChannelDashBoard';
import { IChannel } from '@/types';

const ChannelPage = () => {
  const user = auth.currentUser;
  const [channel, setChannel] = useState<IChannel | null>(null);
  const [isLoading, setLoading] = useState(false);

  const fetchMyChannel = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(
        query(collection(db, 'channels'), where('ownerId', '==', user?.uid)),
      );
      querySnapshot.docs.map((doc: DocumentData) => {
        setChannel({ id: doc.data().id, ...doc.data() });
      });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyChannel();
  }, []);

  return (
    <>
      {!isLoading && !channel && <CreateOne />}
      {!isLoading && channel && <ChannelDashBoard channel={channel} />}
    </>
  );
};

export default ChannelPage;
