import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import mediaItemInterface from './mediaItemInterface';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {
  @Input() mediaItem: mediaItemInterface;
  @Output() delete =  new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onDelete() {
      this.delete.emit(this.mediaItem);
  }

}
