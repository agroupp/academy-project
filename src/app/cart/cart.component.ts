import { CartQuery } from './store/cart.query';
import { CartService } from './../cart.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Item } from '../item.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {

  cart: Item[] = [];

  constructor(private cartQuery: CartQuery, private cartService: CartService) {
    console.log('cart cmp init');
    this.cartQuery.selectCart$.subscribe((result: Item[]) => {
      console.log('new cart arrived', result);
      this.cart = result;

    })

  }

  ngOnInit(): void {
  }

  removeFromCart(item: Item) {
    this.cartService.removeFromCart(item);
  }

}
