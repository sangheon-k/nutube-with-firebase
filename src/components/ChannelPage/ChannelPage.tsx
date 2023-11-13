import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CreateOne from './CreateOne';
import ChannelDashBoard from './ChannelDashBoard';
import { db } from '../../../firebase';
import { DocumentData, doc, getDoc } from 'firebase/firestore';

const ChannelPage = () => {
  const router = useRouter();
  const pathId = router.query.id as string;
  const [channel, setChannel] = useState<DocumentData | undefined>({});

  const getChannelInfo = async (channelId: string) => {
    try {
      const docRef = doc(db, 'channels', channelId);
      const result = await getDoc(docRef);
      setChannel({ id: result.id, ...result.data() });
    } catch (e) {
      console.error(e);
    }
  };

  console.log('Channel Page Info', channel);

  useEffect(() => {
    console.log(pathId);

    getChannelInfo(pathId);
  }, [pathId]);

  if (!channel) return;
  return (
    <>
      {channel.id !== '' ? (
        <ChannelDashBoard channel={channel} />
      ) : (
        <CreateOne />
      )}
    </>
  );
};

export default ChannelPage;
