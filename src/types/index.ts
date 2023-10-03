export interface IVideo {
  id: string;
  views: number;
  writer: string; // userId
  title: string;
  description: string;
  privacy: number;
  filePath: string;
  category: number;
  duration: string;
  thumbnail: string;
  createdAt: Date;
  updatedAt: Date;
}
