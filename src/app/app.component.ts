import {Component, OnInit} from '@angular/core';
import {payload} from './jsonPayload';
import mediaItemListInterface from './media-item-list/mediaItemListInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private payload: mediaItemListInterface;

  ngOnInit() {
    this.payload = payload;
  }
}
