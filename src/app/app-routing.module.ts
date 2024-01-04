import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeavePageComponent } from './pages/leave-page/leave-page.component';
import { RoutePaths } from './core/enum/route-path';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',redirectTo:RoutePaths.DASHBOARD_ROUTE,pathMatch:'full'},
  {path:RoutePaths.LEAVE_ROUTE,component:LeavePageComponent,canActivate:[AuthGuard]},
  {path:RoutePaths.DASHBOARD_ROUTE,loadChildren:()=>import('./modules/dashboard/dashboard.module').then(module => module.DashboardModule),canActivate:[AuthGuard]},
  {path:RoutePaths.LOGIN_ROUTE,loadChildren:()=>import('./modules/leaves/leaves.module').then(module => module.LeavesModule),canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
