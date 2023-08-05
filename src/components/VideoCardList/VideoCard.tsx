import Image from 'next/image';
import Link from 'next/link';

interface VideoProps {
  video: {
    _id: string;
    views: string;
    writer: string;
    title: string;
    description: string;
    privacy: string;
    filePath: string;
    category: string;
    duration: string;
    thumbnail: string;
    createdAt: string;
    updatedAt: string;
  };
}

const VideoCard = ({ video }: VideoProps) => {
  return (
    <div className="relative m-3 mb-8 overflow-hidden border-gray-800 cursor-pointer">
      <Link href="#" className="block overflow-hidden rounded-lg">
        <Image
          className="w-full"
          src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
          alt="img"
        />
      </Link>
      {/* <div className="absolute top-0 right-0 p-1 px-2 m-1 text-xs font-bold text-gray-200 bg-red-500 rounded badge">
          Live
        </div> */}
      <div className="absolute top-0 right-0 p-1 px-2 m-1 text-xs font-bold text-white bg-blue-500 rounded">
        10:53
      </div>

      <div className="px-2 py-3 text-[#0f0f0f] desc">
        <Link
          href="#"
          className="block font-bold cursor-pointer title hover:underline"
        >
          Pubg Mobile Custom Room
        </Link>

        <span className="text-[#606060] ">dynamo_gaming</span>

        <span className="block text-[#606060]">
          <span className="mr-1">조회수 105회</span>
          <span className="mr-1">&middot; 4시간 전</span>
        </span>
      </div>

      {/* <div className="flex p-1 text-xs font-semibold text-gray-500 bg-gray-300 info-box">
          <span className="p-1 px-2 mr-1 font-bold">105 Watching</span>
          <span className="p-1 px-2 mr-1 font-bold border-l border-gray-400">
            105 Likes
          </span>
          <span className="p-1 px-2 mr-1 font-bold border-l border-gray-400">
            105 Dislikes
          </span>
        </div> */}
    </div>
  );
};

export default VideoCard;
