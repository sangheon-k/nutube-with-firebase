import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { IChannel } from '@/types';
import { toggleMyChannelState } from '@/recoil/common';
import { auth, db } from '../../../firebase';
import {
  DocumentData,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import CreateOne from './CreateOne';
import ChannelDashBoard from './ChannelDashBoard';

const ChannelPage = () => {
  const user = auth.currentUser;
  const router = useRouter();
  const [channel, setChannel] = useState<IChannel | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [isMyChannel, setIsMyChannel] = useRecoilState(toggleMyChannelState);

  const pathId = router.asPath.split('/').slice(-1)[0];

  const fetchMyChannel = async (userId: string) => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(
        query(collection(db, 'channels'), where('ownerId', '==', userId)),
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
    setIsMyChannel(user?.uid === pathId);
    fetchMyChannel(pathId);
  }, [pathId]);

  return (
    !isLoading && (
      <>
        {!channel && <CreateOne />}
        {channel && <ChannelDashBoard channel={channel} />}
      </>
    )
  );
};

export default ChannelPage;
