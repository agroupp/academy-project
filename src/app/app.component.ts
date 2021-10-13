import { AuthService } from './auth.service';
import { CartService } from './cart.service';
import { db } from './db';
import { Component } from '@angular/core';
import { Item } from './item.interface';
import { User } from './user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user: User | null = null;

  constructor(private authService: AuthService) {
    this.authService.getUser().subscribe((user: User | null) => this.user = user);
  }

  logout(){
    this.authService.logout();
  }


}
