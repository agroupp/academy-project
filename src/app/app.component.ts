import { db } from './db';
import { Component } from '@angular/core';
import { Item } from './item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: Item[] = db;
  cart: Item[] = [];

  constructor() {

  }

  addItemToCart(item: Item) {
    this.cart.push(item);
  }

  removeFromCart(item: Item) {
    this.cart = this.cart.filter(cartItem => cartItem._id !== item._id);
  }


}
