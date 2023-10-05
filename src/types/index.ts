/** IVideo - category
 * 0 - Undefined
 * 1 - "Home & Furniture"
 * 2 - "Living & Fun"
 * 3 - "Movie & Trailer"
 * 4 - "Kids & Family"
 * 5 - "Etc"
 */
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
