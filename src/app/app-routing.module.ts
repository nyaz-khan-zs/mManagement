import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeavePageComponent } from './pages/leave-page/leave-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RoutePaths } from '../../src/app/models/models/route_path';
import { AuthGuard } from './auth.guard';
import { D3OrgChartComponent } from './modules/orgchart/d3-org-chart/d3-org-chart.component';
import { ProjectTimelineComponent } from './modules/project-timeline/project-timeline.component';
import { AssetsComponent } from './modules/assets/assets.component';

const routes: Routes = [
  { path: '', redirectTo: RoutePaths.DASHBOARD_ROUTE, pathMatch: 'full' },
  {
    path: RoutePaths.LEAVE_ROUTE,
    component: LeavePageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: RoutePaths.DASHBOARD_ROUTE,
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: RoutePaths.LOGIN_ROUTE, component: LoginComponent },
  { path: RoutePaths.ORG_ROUTE, component: D3OrgChartComponent },
  { path: RoutePaths.PROJECT_ROUTE, component: ProjectTimelineComponent },
  { path: RoutePaths.ASSEST_ROUTE, component: AssetsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
