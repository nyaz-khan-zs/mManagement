import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { LocalStorageService } from './service/local-storage/local-storage.service';
import { RoutePaths } from '../app/models/models/route_path';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let isLoggedIn = this.localStorageService.isUserLoggedIn();
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate([RoutePaths.LOGIN_ROUTE]);
    }
    return false;
  }
}
