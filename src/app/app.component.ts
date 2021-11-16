import { CartQuery } from './cart/store/cart.query';
import { AuthQuery } from './auth/store/auth.query';
import { AuthService } from './auth/auth.service';
import { CartService } from './cart.service';
import { db } from './db';
import { Component, ChangeDetectionStrategy, ApplicationRef, ChangeDetectorRef } from '@angular/core';
import { Item } from './item.interface';
import { User } from './user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  user: User | null = null;
  cartLenth?: number;

  constructor(private authQuery: AuthQuery,
    private authService: AuthService,
    private cartQuery: CartQuery,
    private appRef: ApplicationRef,
    private cdr: ChangeDetectorRef) {
    // this.appRef.tick();
    // this.cdr.detectChanges();
    // this.authService.getUser().subscribe((user: User | null) => this.user = user);
    this.authQuery.selectUser$.subscribe((user: User | null) => this.user = user);
    this.cartQuery.selectCartLength$.subscribe(cartLength => this.cartLenth = cartLength);
  }

  logout() {
    this.authService.logout();
  }


}
