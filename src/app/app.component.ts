import { CartService } from './cart.service';
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
  cart: Item[];

  constructor(private cartService: CartService) {
    this.cart = this.cartService.cart;
  }

  addItemToCart(item: Item) {
    this.cartService.addItemToCart(item);
  }

  removeFromCart(item: Item) {
    this.cartService.removeFromCart(item);
  }


}
