import { Component, OnInit, Input } from '@angular/core';
import { RoutePaths } from '../../models/models/route_path';
import { Router, NavigationEnd } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage/local-storage.service';
import { SessionData } from 'src/app/models/models/session-data.interface';
import { SharedDataService } from 'src/app/service/shared-data/shared-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  activePage: string = '';

  pages: Map<string, string> = new Map([
    [RoutePaths.DASHBOARD_ROUTE, 'DASHBOARD'],
    [RoutePaths.LEAVE_ROUTE, 'LEAVES'],
  ]);
  sessionData!: SessionData;

  constructor(
    private router: Router,
    private localStorgaeService: LocalStorageService,
    public sharedDataService: SharedDataService
  ) {
    this.sessionData = localStorgaeService.getSessionData();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let activeUrl = this.router.url;
        const matchingPage = Array.from(this.pages.entries()).find(
          ([routePath]) => `/${routePath}` === activeUrl
        );
        this.activePage = matchingPage ? matchingPage[1] : '';
      }
    });
  }

  ngOnInit(): void {}
}
