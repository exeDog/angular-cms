import MediaItemListInterface from './media-item-list/mediaItemListInterface';

export const payload: MediaItemListInterface = [
  {
    id: 1,
    name: 'Firebug',
    medium: 'Series',
    category: 'Science Fiction',
    year: 2019,
    watchedOn: new Date(),
    isFavorite: false
  },
  {
    id: 2,
    name: 'Firebug1',
    medium: 'Series',
    category: 'Drama',
    year: 2017,
    watchedOn: new Date(),
    isFavorite: true
  },
  {
    id: 3,
    name: 'Xyz',
    medium: 'Movie',
    category: 'Fiction',
    year: 1992,
    watchedOn: new Date(),
    isFavorite: true
  },
];
