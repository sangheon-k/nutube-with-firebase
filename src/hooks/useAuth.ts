import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

// 로그인 상태만 확인해주는 Hooks
export const useAuth = () => {
  const router = useRouter();
  const hasAccessToken = !!Cookies.get('accessToken');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(hasAccessToken);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, []);

  return { isLoggedIn };
};
