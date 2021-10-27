import { AuthStore, AuthState } from './store/auth.store';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(private router: Router, private authStore: AuthStore) { }

  // getUser(): Observable<User | null> {
  //   return this.user$.asObservable();
  // }

  private setUser(user: User | null) {
    // this.user$.next(user);
    this.authStore.update((authState: AuthState) => {
      return { ...authState, user }
    })

  }

  login(user: User) {
    this.setUser(user);
    this.router.navigateByUrl('/feed');
  }

  logout() {
    this.setUser(null);
    this.router.navigateByUrl('/login');
  }
}
