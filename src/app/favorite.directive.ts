import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appFavorite]'
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;

  @HostBinding('class.is-favorite-hovering') hovering = false;

  @Input() set appFavorite(value) {
    this.isFavorite = value;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    this.hovering = false;
  }
  constructor() { }

}
