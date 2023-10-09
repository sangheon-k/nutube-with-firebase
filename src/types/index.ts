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
  writer: string;
  writerId: string;
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
