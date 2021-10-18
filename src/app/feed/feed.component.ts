import { Item } from './../item.interface';
import { BooksService } from './../books.service';
import { CartService } from './../cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {

  items: Item[] = [];

  term: string = '';

  search$: Subject<string> = new Subject<string>();
  subscription?: Subscription;

  constructor(private cartService: CartService, private booksService: BooksService) { }


  ngOnInit(): void {
    this.subscription = this.search$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(
          (searchTerm: string) => this.booksService.getBooks(searchTerm)
        )
      ).subscribe((itemsResult: Item[]) => this.items = itemsResult);
  }


  addItemToCart(item: Item) {
    this.cartService.addItemToCart(item);
  }

  search(term: string) {
    this.search$.next(term);
    // this.booksService.getBooks(term)
    //   .subscribe((itemsResult: Item[]) => this.items = itemsResult);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }



}
