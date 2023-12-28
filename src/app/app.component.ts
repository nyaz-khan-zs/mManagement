import { Component } from '@angular/core';
import { HttpService } from './core/utils/http-service/http.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './core/utils/local-storage/local-storage.service';
import { SessionData } from './core/models/session-data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ACCESS_TOKEN_REFRESH_TIME = environment.ACCESS_TOKEN_REFRESH_TIME;
  title = 'mManagement';

  constructor(private httpService : HttpService,private localStorageService: LocalStorageService){
    this.startBackgroundTask();
  }

  private startBackgroundTask(): void {
    if(!this.localStorageService.isUserLoggedIn()){
      setInterval(()=>{
        let sessionData : SessionData = this.localStorageService.getSessionData();
        let httpHeaders = new HttpHeaders({
          Refreshtoken : `${sessionData.userData.refreshToken}`
        })
        this.httpService.post('login/refreshToken',{},httpHeaders).subscribe(
          (response)=>{
            const token:string = response.data.token;
            sessionData.userData.accessToken = token;
            sessionData.token = token;
            this.localStorageService.setSessionData(sessionData);
          },(error)=>{
            localStorage.clear();
          }
        )
      },this.ACCESS_TOKEN_REFRESH_TIME);
    }
    }
}
