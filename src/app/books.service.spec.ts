import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BooksService } from './books.service';

const SEARCH_TERM = 'serch term';
const RESPONSE_MOCK = {
  items: [
    {
      id: 'ID1',
      volumeInfo: {
        title: 'title',
        imageLinks: {
          thumbnail: 'image url',
        }
      }
    },
  ],
};

describe('BooksService', () => {
  let service: BooksService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BooksService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shoul return the books array', waitForAsync(() => {
    service.getBooks(SEARCH_TERM).subscribe(items => {
      expect(items.length).toBeGreaterThan(0);
      expect(items[0].title).toBe(RESPONSE_MOCK.items[0].volumeInfo.title);
    });

    const expectedUrl = `https://www.googleapis.com/books/v1/volumes?q=${SEARCH_TERM}&startIndex=0&maxResults=20`;
    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush(RESPONSE_MOCK);
    httpTestingController.verify();
  }));
});
