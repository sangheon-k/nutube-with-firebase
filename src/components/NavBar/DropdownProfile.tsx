import Image from 'next/image';
import Link from 'next/link';
import { GrLogout } from 'react-icons/gr';

const DropdownProfile = () => {
  return (
    <div className="absolute z-10 w-48 mt-1 bg-white border border-gray-200 divide-y divide-gray-200 rounded-md shadow-md right-2">
      <div className="flex items-center p-4 space-x-2">
        <Image
          src="https://plchldr.co/i/40x40?text=T"
          alt="plchldr.co"
          className="rounded-full h-9 w-9"
          width={40}
          height={40}
        />
        <div className="font-medium">Matthew</div>
      </div>

      <div className="flex flex-col p-4 space-y-4">
        {PROFILE_MENU_LIST.map((item) => {
          return (
            <Link
              key={item.id}
              href="#"
              className="transition hover:text-blue-600"
            >
              {item.title}
            </Link>
          );
        })}
      </div>

      <div className="p-4">
        <button className="flex items-center space-x-2 transition hover:text-blue-600">
          <GrLogout />
          <div>Log Out</div>
        </button>
      </div>
    </div>
  );
};

export default DropdownProfile;

const PROFILE_MENU_LIST = [
  { id: 0, title: 'My Profile' },
  { id: 1, title: 'Edit Profile' },
  { id: 2, title: 'Settings' },
];
