import { AuthQuery } from './auth/store/auth.query';
import { map, tap } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authQuery: AuthQuery, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.authQuery.isLoggedIn$.pipe(
      tap(isloggedIn => {
        if (!isloggedIn) {
          this.router.navigateByUrl('/login');
        }
      })
    )
  }

}
