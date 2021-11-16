import {CartQuery} from './store/cart.query';
import {CartService} from './../cart.service';
import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Item} from '../item.interface';
import {CdkDragDrop} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {

  cart: Item[] = [

    {
      id: "n5mJAwAAQBAJ",
      imageUrl: "http://books.google.com/books/content?id=n5mJAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      title: "Pro AngularJS"
    },
    {
      id: 't-laBAAAQBAJ',
      title: 'AngularJS Web Application Development Blueprints',
      imageUrl: 'http://books.google.com/books/content?id=t-laBAAAQ…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
    },
    {
      id: 'BHs2DwAAQBAJ',
      title: 'Learning Angular',
      imageUrl: 'http://books.google.com/books/content?id=BHs2DwAAQ…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
    }


  ];

  constructor(private cartQuery: CartQuery, private cartService: CartService
  ) {
    console.log('cart cmp init');
    this.cartQuery.selectCart$.subscribe((result: Item[]) => {
      console.log('new cart arrived', result);
      // this.cart = result;

    })

  }

  ngOnInit():
    void {
  }

  removeFromCart(item: Item) {
    this.cartService.removeFromCart(item);
  }

  dropTrash($event: CdkDragDrop<Item, any>) {
    console.log($event);
    this.cart = this.cart.filter(c => c.id !== this.cart[$event.previousIndex]?.id);
  }
}
