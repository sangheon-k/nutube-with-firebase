import React, { useEffect, useState } from 'react';
import CreateOne from './CreateOne';
import { auth, db } from '../../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import ChannelDashBoard from './ChannelDashBoard';

const ChannelPage = () => {
  const user = auth.currentUser;
  const [channelId, setChannelId] = useState('');
  const [isLoading, setLoading] = useState(false);

  const fetchMyChannel = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(
        query(
          collection(db, 'channels'),
          where('channelOwnerId', '==', user?.uid),
        ),
      );
      querySnapshot.docs.map((doc) => {
        setChannelId(doc.data().id);
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
      {!isLoading && channelId === '' && <CreateOne userId={user?.uid} />}
      {!isLoading && channelId !== '' && <ChannelDashBoard />}
    </>
  );
};

export default ChannelPage;
