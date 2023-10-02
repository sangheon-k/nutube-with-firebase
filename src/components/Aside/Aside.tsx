import React from 'react';
import Link from 'next/link';
import {
  FcHome,
  FcUpload,
  FcSettings,
  FcLikePlaceholder,
  FcBusinessman,
} from 'react-icons/fc';
import { auth } from '../../../firebase';

interface AsideProps {
  isAsideOpen: boolean;
}

const Aside = ({ isAsideOpen }: AsideProps) => {
  const user = auth.currentUser;

  return (
    <>
      {isAsideOpen && (
        <aside className="flex flex-col justify-between w-72 min-w-[200px] border-r border-gray-100 bg-white shadow-aside">
          <div className="p-3 space-y-2">
            {ASIDE_MENU_LIST.map((item) => {
              if (item.auth) {
                return user ? (
                  <Link
                    key={item.id}
                    href={item.url}
                    className="flex items-center px-2 py-3 space-x-2 rounded-md hover:bg-gray-100 hover:text-blue-600"
                  >
                    <span className="text-2xl">{item.icons}</span>
                    <span>{item.title}</span>
                  </Link>
                ) : null;
              }

              return (
                <Link
                  key={item.id}
                  href={item.url}
                  className="flex items-center px-2 py-3 space-x-2 rounded-md hover:bg-gray-100 hover:text-blue-600"
                >
                  <span className="text-2xl">{item.icons}</span>
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </div>
          <div className="px-3 py-4 border-t">
            Powered By <b>Sangheon</b>
          </div>
        </aside>
      )}
    </>
  );
};

export default Aside;

const ASIDE_MENU_LIST = [
  { id: 0, title: 'Home', url: '/', auth: false, icons: <FcHome /> },
  {
    id: 1,
    title: 'Likes',
    url: '/likes',
    auth: true,
    icons: <FcLikePlaceholder />,
  },
  {
    id: 2,
    title: 'Subscription',
    url: '/subscription',
    auth: true,
    icons: <FcBusinessman />,
  },
  {
    id: 3,
    title: 'Uploads',
    url: '/video/upload',
    auth: true,
    icons: <FcUpload />,
  },
  {
    id: 4,
    title: 'Setting',
    url: '/setting',
    auth: false,
    icons: <FcSettings />,
  },
];
