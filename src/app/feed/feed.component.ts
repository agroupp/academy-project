import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { db } from '../db';
import { Item } from '../item.interface';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  items: Item[] = db;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addItemToCart(item: Item) {
    this.cartService.addItemToCart(item);
  }

}
