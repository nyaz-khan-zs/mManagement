import { Component } from '@angular/core';
import { SideBarData } from 'src/app/models/models/sidebarData';
import { RoutePaths } from '../../models/models/route_path';
import { SharedDataService } from 'src/app/service/shared-data/shared-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  selectedTab: string = '';

  dashboardIcon: string = '../../../assets/dashboard.svg';
  orgChartIcon: string = '../../../assets/orgChart.svg';
  myTimeLineIcon: string = '../../../assets/mytimeline.svg';
  leavesIcon: string = '../../../assets/leaves.svg';
  myTasksIcon: string = '../../../assets/mytasks.svg';
  myAssetsIcon: string = '../../../assets/myassets.svg';
  meetingsIcon: string = '../../../assets/meetings.svg';
  isExpanded: boolean = true;

  data: SideBarData[] = [
    {
      name: 'Dashboard',
      logo: this.dashboardIcon,
      routerLink: RoutePaths.DASHBOARD_ROUTE,
    },
    {
      name: 'Organisation Chart',
      logo: this.orgChartIcon,
      routerLink: RoutePaths.ORG_ROUTE,
    },
    {
      name: 'My timeline',
      logo: this.myTimeLineIcon,
      routerLink: RoutePaths.DASHBOARD_ROUTE,
    },
    {
      name: 'Leaves',
      logo: this.leavesIcon,
      routerLink: RoutePaths.LEAVE_ROUTE,
    },
    {
      name: 'My tasks',
      logo: this.myTasksIcon,
      routerLink: RoutePaths.DASHBOARD_ROUTE,
    },
    {
      name: 'My assets',
      logo: this.myAssetsIcon,
      routerLink: RoutePaths.ASSEST_ROUTE,
    },
    {
      name: '1:1 Meetings',
      logo: this.meetingsIcon,
      routerLink: RoutePaths.DASHBOARD_ROUTE,
    },
  ];

  constructor(public sharedDataService: SharedDataService) {}

  changeSelectedTab(value: string) {
    this.selectedTab = value;
  }
}
