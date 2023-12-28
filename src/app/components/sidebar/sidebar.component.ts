import { Component, HostListener, OnInit } from '@angular/core';
import { SideBarData } from 'src/app/core/models/sidebarData';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  selectedTab: string = '';
  isVisited: boolean = false;

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
    },
    {
      name: 'Organisation Chart',
      logo: this.orgChartIcon,
    },
    {
      name: 'My timeline',
      logo: this.myTimeLineIcon,
    },
    {
      name: 'Leaves',
      logo: this.leavesIcon,
    },
    {
      name: 'My tasks',
      logo: this.myTasksIcon,
    },
    {
      name: 'My assets',
      logo: this.myAssetsIcon,
    },
    {
      name: '1:1 Meetings',
      logo: this.meetingsIcon,
    },
  ];

  changeSelectedTab(value: string) {
    this.selectedTab = value;
  }

  hideSidebar() {
    this.isVisited = !this.isVisited;
  }
}
