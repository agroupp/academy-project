import { Injectable } from '@angular/core';
import { Item } from './item.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);

  constructor() { }

  addItemToCart(item: Item) {
    // this.cart.push(item);
    const currentCart = this.cart.getValue();
    currentCart.push(item);
    this.cart.next(currentCart);
  }

  removeFromCart(item: Item) {
    let currentCart = this.cart.getValue();
    currentCart = currentCart.filter(cartItem => cartItem._id !== item._id);
    this.cart.next(currentCart);
  }
}
