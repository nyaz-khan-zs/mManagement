import { Component, Input, OnInit } from '@angular/core';
import { SideBarData } from 'src/app/core/models/sidebarData';
import { RoutePaths } from 'src/app/core/enum/route-path';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  selectedTab: string = '';
  @Input() isExpanded !: boolean;

  dashboardIcon: string = '../../../assets/dashboard.svg';
  orgChartIcon: string = '../../../assets/orgChart.svg';
  myTimeLineIcon: string = '../../../assets/mytimeline.svg';
  leavesIcon: string = '../../../assets/leaves.svg';
  myTasksIcon: string = '../../../assets/mytasks.svg';
  myAssetsIcon: string = '../../../assets/myassets.svg';
  meetingsIcon: string = '../../../assets/meetings.svg';

  data: SideBarData[] = [
    {
      name: 'Dashboard',
      logo: this.dashboardIcon,
      routerLink : RoutePaths.DASHBOARD_ROUTE
    },
    {
      name: 'Organisation Chart',
      logo: this.orgChartIcon,
      routerLink : RoutePaths.DASHBOARD_ROUTE
    },
    {
      name: 'My timeline',
      logo: this.myTimeLineIcon,
      routerLink : RoutePaths.DASHBOARD_ROUTE
    },
    {
      name: 'Leaves',
      logo: this.leavesIcon,
      routerLink : RoutePaths.LEAVE_ROUTE
    },
    {
      name: 'My tasks',
      logo: this.myTasksIcon,
      routerLink : RoutePaths.DASHBOARD_ROUTE
    },
    {
      name: 'My assets',
      logo: this.myAssetsIcon,
      routerLink : RoutePaths.DASHBOARD_ROUTE
    },
    {
      name: '1:1 Meetings',
      logo: this.meetingsIcon,
      routerLink : RoutePaths.DASHBOARD_ROUTE
    },
  ];

  changeSelectedTab(value: string) {
    this.selectedTab = value;
  }
}
