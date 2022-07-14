import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './shared/pages/accounts/accounts.component';
import { CanActiveGuard } from './shared/guards/can-active.guard';
import { CanDeactiveGuard } from './shared/guards/can-deactive.guard';
import { HomeComponent } from './shared/pages/home/home.component';
import { CanLoadGuard } from './shared/guards/can-load.guard';
import { CanActiveChildGuard } from './shared/guards/can-active-child.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'accounts',
    component: AccountsComponent,
    canActivate: [CanActiveGuard],
    canDeactivate: [CanDeactiveGuard],
  },
  {
    path: 'core',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
    canLoad: [CanLoadGuard],
    canActivateChild: [CanActiveChildGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
