export interface IChannel {
  id: string;
  channelName: string;
  description: string;
  channelBannerImg: string;
  ownerId: string;
  ownerName: string;
  ownerPhotoUrl: string;
  createdAt: Date;
}

export interface IVideo {
  /** IVideo - category
   * 0 - Undefined
   * 1 - "Home & Furniture"
   * 2 - "Living & Fun"
   * 3 - "Movie & Trailer"
   * 4 - "Kids & Family"
   * 5 - "Etc"
   */
  id: string;
  views: number;
  channelName: string;
  channelId: string;
  title: string;
  description: string;
  privacy: string;
  filePath: string;
  category: string;
  duration: number;
  thumbnail: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ILike {
  id: string;
  videoId: string;
  userId: string;
  createdAt: Date;
}

export interface IDisLike {
  id: string;
  videoId: string;
  userId: string;
  createdAt: Date;
}

export interface ISubscribe {
  userId: string;
  channelId: string;
  createdAt: Date;
}
