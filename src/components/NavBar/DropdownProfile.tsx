import Image from 'next/image';
import Link from 'next/link';
import { GrLogout } from 'react-icons/gr';
import { auth } from '../../../firebase';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { toggleProfileState } from '@/recoil/common';

const DropdownProfile = () => {
  const user = auth.currentUser;
  const router = useRouter();
  const [isProfileOpen, setIsProfileOpen] = useRecoilState(toggleProfileState);

  const onLogOut = async () => {
    const isConfirmed = confirm('Are you  sure you want to log out?');
    if (isConfirmed) {
      await auth.signOut();
      setIsProfileOpen(false);
      router.push('/');
    }
  };

  return (
    <div className="absolute right-0 z-10 w-48 mt-1 bg-white border border-gray-200 divide-y divide-gray-200 rounded-md shadow-md top-10">
      <div className="flex items-center p-4 space-x-2">
        <Image
          src="https://plchldr.co/i/40x40?text=T"
          alt="profile"
          className="rounded-full h-9 w-9"
          width={40}
          height={40}
        />
        <div className="font-medium">{user?.displayName}</div>
      </div>

      <div className="flex flex-col p-4 space-y-4">
        {PROFILE_MENU_LIST.map((item) => {
          return (
            <Link
              key={item.id}
              href={item.id === 0 ? `${item.url}/${user?.uid}` : item.url}
              className="transition hover:text-blue-600"
            >
              {item.title}
            </Link>
          );
        })}
      </div>

      <div className="p-4">
        <button
          className="flex items-center space-x-2 transition hover:text-blue-600"
          onClick={onLogOut}
        >
          <GrLogout />
          <div>Log Out</div>
        </button>
      </div>
    </div>
  );
};

export default DropdownProfile;

const PROFILE_MENU_LIST = [
  { id: 0, title: 'My channel', url: '/channel' },
  { id: 1, title: 'Upload', url: '/video/upload' },
  { id: 2, title: 'Settings', url: '/' },
];
