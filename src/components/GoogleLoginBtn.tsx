import React from 'react';
import Image from 'next/image';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { channelState } from '@/recoil/channel';
import {
  DocumentData,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import Cookies from 'js-cookie';

const GoogleLoginBtn = () => {
  const router = useRouter();
  const setChannel = useSetRecoilState(channelState);

  const fetchMyChannel = async (userId: string | undefined) => {
    try {
      const querySnapshot = await getDocs(
        query(collection(db, 'channels'), where('ownerId', '==', userId)),
      );
      querySnapshot.docs.map((doc: DocumentData) => {
        setChannel({ id: doc.id, ...doc.data() });
      });
    } catch (e) {
      console.error(e);
    }
  };

  const onGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);
      Cookies.set('uid', res.user.uid);
      await fetchMyChannel(res.user.uid);
      router.push('/');
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <button
      className="flex justify-center w-full px-4 py-3 border border-stone-600 focus:outline-none rounded-2xl active:border-indigo-500"
      onClick={onGoogleLogin}
    >
      <Image
        src="/logo-google.svg"
        alt="google logo"
        width={18}
        height={18}
        className="mr-2 "
      />
      Continue with Google
    </button>
  );
};

export default GoogleLoginBtn;
