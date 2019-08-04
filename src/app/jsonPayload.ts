import MediaItemListInterface from './media-item-list/mediaItemListInterface';
import {Categories} from './media-item/mediaItemInterface';

export const payload: MediaItemListInterface = [
  {
    id: 1,
    name: 'Firebug',
    medium: 'Series',
    category: Categories['Science-Fiction'],
    year: 2019,
    watchedOn: new Date(),
    isFavorite: false
  },
  {
    id: 2,
    name: 'Firebug1',
    medium: 'Series',
    category: Categories.Drama,
    year: 2017,
    watchedOn: new Date(),
    isFavorite: true
  },
  {
    id: 3,
    name: 'Xyz',
    medium: 'Movie',
    category: Categories.Fiction,
    year: 1992,
    watchedOn: new Date(),
    isFavorite: true
  },
];
