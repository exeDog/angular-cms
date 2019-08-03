import {Component, Input, OnInit} from '@angular/core';
import MediaItemListInterface from './mediaItemListInterface';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
  @Input() mediaItems: MediaItemListInterface;

  constructor() { }

  ngOnInit() {
  }

  delete(event) {
    console.log(event);
  }

}
