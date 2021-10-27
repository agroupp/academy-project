import { Item } from './../../item.interface';
import { User } from './../../user.interface';
import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface CartState {
    cart: Item[];
}

export function createInitialState(): CartState {
    return {
        cart: []
    };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'Cart' })
export class CartStore extends Store<CartState> {
    constructor() {
        super(createInitialState());
    }
}