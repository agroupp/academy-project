import { Item } from './../item.interface';
import { BooksService } from './../books.service';
import { CartService } from './../cart.service';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subject, Subscription, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent implements OnInit, OnDestroy {

  items$?: Observable<Item[]>;

  term: string = '';
  page = 0;

  search$: Subject<string> = new Subject<string>();
  // subscription?: Subscription;

  constructor(private cartService: CartService, private booksService: BooksService) { }


  ngOnInit(): void {
    this.items$ = this.search$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(
          (searchTerm: string) => this.booksService.getBooks(searchTerm, 1)
        )
      );
  }


  addItemToCart(item: Item) {
    this.cartService.addItemToCart(item);
  }

  search(term: string) {
    this.search$.next(term);
    // this.booksService.getBooks(term)
    //   .subscribe((itemsResult: Item[]) => this.items = itemsResult);
  }

  loadMore() {
    this.page++;
    // this.booksService.getBooks(this.term, this.page).subscribe((result: Item[]) =>
    //   this.items = [...this.items, ...result]);
  }

  ngOnDestroy(): void {
    // this.subscription?.unsubscribe();
  }



}
