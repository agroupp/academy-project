import { map } from 'rxjs/operators';
import { User } from './../../user.interface';
import { Query } from '@datorama/akita';
import { AuthState, AuthStore } from './auth.store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<AuthState> {

    authState$ = this.select();

    selectUser$: Observable<User | null> = this.select('user');
    isLoggedIn$: Observable<boolean> = this.selectUser$.pipe(map((user: User | null) => !!user));
    constructor(protected store: AuthStore) {
        super(store);
    }


}