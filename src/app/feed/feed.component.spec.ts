import { BooksService } from './../books.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { FeedComponent } from './feed.component';
import { of } from 'rxjs';

const SEARCH_TERM = 'SEARCH_TERM';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;
  const booksServiceSpy: jasmine.SpyObj<BooksService> = jasmine.createSpyObj('BooksService', ['getBooks']);
  let booksService: BooksService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedComponent ],
      providers: [
        { provide: BooksService, useValue: booksServiceSpy },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
    booksService = TestBed.inject(BooksService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when search initiated', () => {
    it('should call "getBooks" method of the BooksService', fakeAsync(() => {
      booksServiceSpy.getBooks.and.returnValue(of([]));
      fixture.componentInstance.search('ABC');
      fixture.componentInstance.search('DEF');
      fixture.componentInstance.search(SEARCH_TERM);
      tick(300);
      expect(booksService.getBooks).toHaveBeenCalled();
      expect(booksService.getBooks).toHaveBeenCalledTimes(1);
      expect(booksService.getBooks).toHaveBeenCalledWith(SEARCH_TERM, 1);
    }));
  });
});
