import { useLayoutEffect, useState } from 'react';
import Cookies from 'js-cookie';

// 로그인 상태만 확인해주는 Hooks
export const useAuth = () => {
  const hasUserUid = !!Cookies.get('uid');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(hasUserUid);

  useLayoutEffect(() => {
    setIsLoggedIn(hasUserUid);
  }, [hasUserUid]);

  return { isLoggedIn };
};
