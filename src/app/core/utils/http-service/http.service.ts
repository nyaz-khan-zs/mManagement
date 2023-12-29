import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { SessionData } from '../../models/session-data.interface';
import { map,catchError,retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  API_URL = environment.REACT_APP_BASE_URL;
  sessionData !: SessionData;

  constructor(private httpClient: HttpClient,private localStorageService: LocalStorageService) {
    this.sessionData = this.localStorageService.getSessionData();
  }

  createHeader() : HttpHeaders{
    let httpHeader = new HttpHeaders({Authorization : `Bearer ${this.sessionData.token}`});
    return httpHeader;
  }

  refreshToken():void{
    if(this.localStorageService.isUserLoggedIn()){
        let sessionData : SessionData = this.localStorageService.getSessionData();
        let httpHeaders = new HttpHeaders({
          Refreshtoken : `${sessionData.userData.refreshToken}`
        })
        this.post('login/refreshToken',{},httpHeaders).subscribe(
          (response)=>{
            const token:string = response.data.accessToken;
            sessionData.userData.accessToken = token;
            sessionData.token = token;
            this.localStorageService.setSessionData(sessionData);
          },(error)=>{
            console.log(error);
            localStorage.clear();
          }
        )    
    }
  }

  get(endPoint:string): Observable<any> {
    let headers = this.createHeader();
    return this.httpClient.get(`${this.API_URL}/${endPoint}`,{headers:headers})
  }

  post<T>(endPoint: string, payload: T): Observable<any>;
  post<T>(endPoint: string, payload: T, headers: HttpHeaders): Observable<any>;
  
  post<T>(endPoint: string, payload: T, headers?: HttpHeaders): Observable<any> {
    const url = `${this.API_URL}/${endPoint}`;
    
    if (headers) {
      return this.httpClient.post(url, payload,{ headers : headers });
    } else {
      headers = this.createHeader();
      return this.httpClient.post(url, payload, {headers : headers});
    }
  }

  put<T>(endPoint: string, payload: T):Observable<any>{
    let headers = this.createHeader();
    return this.httpClient.put(`${this.API_URL}/${endPoint}`,payload,{headers : headers});
  }

  delete(endPoint: string):Observable<any>{
    let headers = this.createHeader();
    return this.httpClient.delete(`${this.API_URL}/${endPoint}`,{headers : headers});
  }

}
