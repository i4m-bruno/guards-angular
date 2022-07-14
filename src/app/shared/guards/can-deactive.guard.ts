import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AccountsComponent } from '../pages/accounts/accounts.component';

@Injectable({
  providedIn: 'root',
})
export class CanDeactiveGuard implements CanDeactivate<AccountsComponent> {
  canDeactivate(
    component: AccountsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return component.exit();
  }
}
