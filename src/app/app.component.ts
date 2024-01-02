import { Component } from '@angular/core';
import { HttpService } from './core/utils/http-service/http.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './core/utils/local-storage/local-storage.service';
import { SessionData } from './core/models/session-data.interface';
import { Router, NavigationEnd } from '@angular/router';
import { RoutePaths } from './core/enum/route-path';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  ACCESS_TOKEN_REFRESH_TIME = environment.ACCESS_TOKEN_REFRESH_TIME;
  title = 'mManagement';
  isLoggedIn:boolean = true;
  sessionData!: SessionData;
  isExpanded: boolean = true;

  constructor(private httpService : HttpService,private localStorageService: LocalStorageService,private router: Router){
    this.startBackgroundTask();
    this.isLoggedIn = this.localStorageService.isUserLoggedIn();
    this.sessionData = this.localStorageService.getSessionData();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoggedIn = this.localStorageService.isUserLoggedIn();
      }
    });
  }

  toggleSidebar():boolean{
    this.isExpanded = this.isExpanded === undefined ? false : this.isExpanded = this.isExpanded ? false : true;
    console.log('---> ',this.isExpanded);
    return this.isExpanded;
  }

  private startBackgroundTask(): void {
    if(this.localStorageService.isUserLoggedIn()){
      setInterval(()=>{
        let httpHeaders = new HttpHeaders({
          refreshToken : `${this.sessionData.userData.refreshToken}`
        })
        this.httpService.post('login/refreshToken',{},httpHeaders).subscribe(
          (response : any)=>{
            const token:string = response.data.accessToken;
            this.sessionData.userData.accessToken = token;
            this.sessionData.token = token;
            this.localStorageService.setSessionData(this.sessionData);
          },(error : any)=>{
            console.log(error);
            this.localStorageService.clearSessionData();
            this.router.navigate([RoutePaths.LOGIN_ROUTE]);
          }
        )
      },this.ACCESS_TOKEN_REFRESH_TIME);
    }
    }
    
}
