import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  API_URL = environment.REACT_APP_BASE_URL;
  ACCESS_TOKEN_REFRESH_TIME = environment.ACCESS_TOKEN_REFRESH_TIME;

  constructor(private httpClient: HttpClient) {
  }

  get(endPoint:string): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/${endPoint}`);
  }

  post<T>(endPoint: string, payload: T): Observable<any>;
  post<T>(endPoint: string, payload: T, headers: HttpHeaders): Observable<any>;
  
  post<T>(endPoint: string, payload: T, headers?: HttpHeaders): Observable<any> {
    const url = `${this.API_URL}/${endPoint}`;
    
    if (headers) {
      return this.httpClient.post(url, payload,{ headers : headers });
    } else {
      return this.httpClient.post(url, payload);
    }
  }

  put<T>(endPoint: string, payload: T):Observable<any>{
    return this.httpClient.put(`${this.API_URL}/${endPoint}`,payload);
  }

  delete(endPoint: string):Observable<any>{
    return this.httpClient.delete(`${this.API_URL}/${endPoint}`);
  }

}
