import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient: HttpClient) { }

  getBooks(term: string): Observable<Item[]> {
    return this.httpClient.get<Item[]>(`https://www.googleapis.com/books/v1/volumes?q=${term}`)
      .pipe(
        map((res: any) => res.items),
        map((booksItems: any[]) => booksItems.map(item => ({
          id: item.id,
          title: item.volumeInfo.title,
          imageUrl: item.volumeInfo.imageLinks.thumbnail
        })))
      );
  }

}
