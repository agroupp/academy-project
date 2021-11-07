import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Item } from '../item.interface';

import { ItemComponent } from './item.component';
import { ItemModule } from './item.module';

const ITEM: Item = {
  id: 'id',
  title: 'Dummy item',
  imageUrl: 'URL',
};

function getButton(fixture: ComponentFixture<ItemComponent>) {
  return fixture.debugElement.query(By.css('button'));
}

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemModule],
      // declarations: [ ItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.componentInstance.item = ITEM;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when item is set', () => {
    it('should show the title', () => {
      const titleElement = fixture.debugElement.query(By.css('.title'));
      expect(titleElement.nativeElement.textContent).toBe(ITEM.title);
    });
  });

  describe('when item is not in the cart', () => {
    it('should show "Add To Cart" button', () => {
      const buttonElement = getButton(fixture);
      expect(buttonElement.nativeElement.textContent).toBe('Add To Cart');
    });
  });

  describe('when item is in the cart', () => {
    beforeEach(() => {
      fixture.componentInstance.isInCart = true;
      fixture.detectChanges();
    });

    it('should show "Remove from Cart" button', () => {
      const buttonElement = getButton(fixture);
      expect(buttonElement.nativeElement.textContent).toBe('Remove from Cart');
    });

    describe('when "Remove" button clicked', () => {
      it('should emit "removeFromCart" event with the item', () => {
        const button = getButton(fixture);
        spyOn(fixture.componentInstance.removeFromCart, 'emit');
        button.nativeElement.click();
        expect(fixture.componentInstance.removeFromCart.emit).toHaveBeenCalledWith(ITEM);
      });
    });
  });
});
