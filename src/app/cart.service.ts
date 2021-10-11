import { Injectable } from '@angular/core';
import { Item } from './item.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Item[] = [];

  constructor() { }

  addItemToCart(item: Item) {
    this.cart.push(item);
  }

  removeFromCart(item: Item) {
    this.cart = this.cart.filter(cartItem => cartItem._id !== item._id);
  }
}
