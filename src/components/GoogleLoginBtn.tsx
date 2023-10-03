import React from 'react';
import Image from 'next/image';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';
import { useRouter } from 'next/router';

const GoogleLoginBtn = () => {
  const router = useRouter();
  const onGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
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
