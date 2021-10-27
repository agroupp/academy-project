import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPresentationComponent } from './feed-presentation.component';

describe('FeedPresentationComponent', () => {
  let component: FeedPresentationComponent;
  let fixture: ComponentFixture<FeedPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
