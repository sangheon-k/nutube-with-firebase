import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
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
import { channelState, checkHasChannelState } from '@/recoil/channel';

const ChannelPage = () => {
  const user = auth.currentUser;
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [channel, setChannel] = useRecoilState(channelState);
  const hasChannel = useRecoilValue(checkHasChannelState);
  const setIsMyChannel = useSetRecoilState(toggleMyChannelState);

  const pathId = router.asPath.split('/').slice(-1)[0];

  const fetchMyChannel = async (userId: string) => {
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
    setIsMyChannel(user?.uid === pathId);
    fetchMyChannel(pathId);
  }, [pathId]);

  console.log(channel);
  return (
    <>
      {!isLoading && !hasChannel && <CreateOne />}
      {!isLoading && hasChannel && <ChannelDashBoard channel={channel} />}
    </>
  );
};

export default ChannelPage;
