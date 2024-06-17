import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Channel = () => {
  const router = useRouter();
  useEffect(() => {
    alert('로그인이 필요한 페이지입니다. 로그인해주세요.');
    router.push('/login');
  }, []);

  return <div>Channel</div>;
};

export default Channel;
