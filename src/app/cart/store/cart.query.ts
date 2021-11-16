import { Item } from './../../item.interface';
import { Query } from '@datorama/akita';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CartState, CartStore } from './cart.store';
import { tap, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CartQuery extends Query<CartState> {

    selectCart$: Observable<Item[]> = this.select(state => state.cart);
    selectCartLength$: Observable<number> = this.select('cart').pipe(map((items: Item[]) => items.length));

    constructor(protected store: CartStore) {
        super(store);
    }


}
