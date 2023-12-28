import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeavePageComponent } from './pages/leave-page/leave-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RoutePaths } from './core/enum/route-path';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',redirectTo:RoutePaths.DASHBOARD_ROUTE,pathMatch:'full'},
  {path:RoutePaths.LEAVE_ROUTE,component:LeavePageComponent,canActivate:[AuthGuard]},
  {path:RoutePaths.DASHBOARD_ROUTE,component:DashboardComponent,canActivate:[AuthGuard]},
  {path:RoutePaths.LOGIN_ROUTE,component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
