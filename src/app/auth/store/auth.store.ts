import { User } from './../../user.interface';
import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface AuthState {
  user: User | null;
  token: string;
}

export function createInitialState(): AuthState {
  return {
    user: null,
    token: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'Auth' })
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(createInitialState());
  }
}