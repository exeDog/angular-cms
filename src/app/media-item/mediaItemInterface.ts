export default interface MediaItemInterface {
  id: number;
  name: string;
  medium: string;
  category: Categories;
  year: number;
  watchedOn: Date;
  isFavorite: boolean;
}

export enum Categories {
  'Fiction',
  'Science-Fiction',
  'Action',
  'Science',
  'Comedy',
  'Drama',
  'Horror',
}

