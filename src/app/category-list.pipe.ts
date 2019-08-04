import { Pipe, PipeTransform } from '@angular/core';
import mediaItemListInterface from './media-item-list/mediaItemListInterface';
import mediaItemInterface from './media-item/mediaItemInterface';

@Pipe({
  name: 'categoryList'
})
export class CategoryListPipe implements PipeTransform {

  transform(value: mediaItemListInterface, ...args: any[]): any {
    const categories = [];
    value.forEach((mediaItem: mediaItemInterface) => {
      if (categories.indexOf(mediaItem.category) <= -1) {
        categories.push(mediaItem.category);
      }
    });
    return categories.join(', ');
  }
}
