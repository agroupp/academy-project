import { Item } from './../../item.interface';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-feed-presentation',
  templateUrl: './feed-presentation.component.html',
  styleUrls: ['./feed-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedPresentationComponent implements OnInit {

  @Input() items: Item[] = [];

  @Output() addToCart = new EventEmitter<Item>();

  constructor() { }

  ngOnInit(): void {
  }

}
