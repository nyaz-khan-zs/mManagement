import { Component, OnInit, Input } from '@angular/core';
import { RoutePaths } from 'src/app/core/enum/route-path';
import { Router,NavigationEnd } from '@angular/router';
import { LocalStorageService } from 'src/app/core/utils/local-storage/local-storage.service';
import { SessionData } from 'src/app/core/models/session-data.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activePage : string = '';
  @Input() toggleSidebar: () => boolean = () => false;

  pages : Map<string,string> = new Map([
    [RoutePaths.DASHBOARD_ROUTE,'DASHBOARD'],
    [RoutePaths.LEAVE_ROUTE,'LEAVES']
  ]);
  sessionData!: SessionData;

  constructor(private router: Router,private localStorgaeService: LocalStorageService) {
    this.sessionData = localStorgaeService.getSessionData();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let activeUrl = this.router.url;
        const matchingPage = Array.from(this.pages.entries())
          .find(([routePath]) => `/${routePath}` === activeUrl);
        this.activePage = matchingPage ? matchingPage[1] : '';
      }
    });
  }

  ngOnInit(): void {
  }

}
