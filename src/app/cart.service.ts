import { CartStore, CartState } from './cart/store/cart.store';
import { CartQuery } from './cart/store/cart.query';
import { Injectable } from '@angular/core';
import { Item } from './item.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // cart: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);

  constructor(private cartQuery: CartQuery, private cartStore: CartStore) { }

  addItemToCart(item: Item) {
    // this.cart.push(item);
    // const currentCart = this.cart.getValue();
    this.cartStore.update((cartState: CartState) => {
      return {
        ...cartState, cart: [...cartState.cart, item]
      }
    })

  }

  removeFromCart(item: Item) {
    // let currentCart = this.cart.getValue();
    // currentCart = currentCart.filter(cartItem => cartItem.id !== item.id);
    // this.cart.next(currentCart);

    this.cartStore.update((cartState: CartState) => {
      const cart = cartState.cart.filter(cartItem => cartItem.id !== item.id);
      return {
        ...cartState, cart
      }
    })


  }
}
