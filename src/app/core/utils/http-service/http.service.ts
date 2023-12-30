import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concat } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { SessionData } from '../../models/session-data.interface';
import { catchError, retryWhen, mergeMap, delayWhen, map, switchMap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { RoutePaths } from '../../enum/route-path';
import { timer, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  API_URL = environment.REACT_APP_BASE_URL;
  sessionData !: SessionData;

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService, private router: Router) {
    this.sessionData = this.localStorageService.getSessionData();
  }

  createHeader(token?: string): HttpHeaders;

  createHeader(token?: string): HttpHeaders {
    if (token === null || token === undefined){
      this.sessionData = this.localStorageService.getSessionData();
      return new HttpHeaders({ Authorization: `Bearer ${this.sessionData.token}`});
    }
    else
      return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  refreshToken(): Observable<SessionData> {
    if(this.sessionData.userData.refreshToken === null || this.sessionData.userData.refreshToken === undefined){
      this.localStorageService.clearSessionData();
      this.router.navigate([RoutePaths.LOGIN_ROUTE]);
      throwError('Refresh token has been expired');
    }
    let httpHeaders = new HttpHeaders({
      refreshToken: `${this.sessionData.userData.refreshToken}`
    })
    return this.post('login/refreshToken', {}, httpHeaders).pipe(
      map((response: any) => {
        let token = response.data.accessToken;
        this.sessionData.token = token;
        this.sessionData.userData.accessToken = token;
        this.localStorageService.setSessionData(this.sessionData);
        return this.sessionData;
      }),
      catchError((error) => {
        throw error;
      })
    )
  }

  get(endPoint: string): Observable<any> {
    let url = `${this.API_URL}/${endPoint}`;
    let headers = this.createHeader();
    return this.httpClient.get(url, { headers: this.createHeader()}).pipe(
      catchError((error) => {
        if (error.status === 401) {
          return this.refreshToken().pipe(
            switchMap((refreshResponse) => {
              return this.httpClient.get(url, { headers: this.createHeader(refreshResponse.token) });
            }),
            catchError((refreshError) => {
              this.localStorageService.clearSessionData();
              this.router.navigate([RoutePaths.LOGIN_ROUTE]);
              return throwError(refreshError);
            })
          );
        } else {
          return throwError(error);
        }
      })
    );
  }

  post<T>(endPoint: string, payload: T): Observable<any>;
  post<T>(endPoint: string, payload: T, headers: HttpHeaders): Observable<any>;

  post<T>(endPoint: string, payload: T, headers?: HttpHeaders): Observable<any> {
    const url = `${this.API_URL}/${endPoint}`;

    if (headers) {
      return this.httpClient.post(url, payload, { headers: headers }).pipe(
        catchError((error) => {
          if (error.status === 401) {
            return this.refreshToken().pipe(
              switchMap((refreshResponse) => {
                return this.httpClient.post(url, payload, { headers: this.createHeader(refreshResponse.token) });
              }),
              catchError((refreshError) => {
                this.localStorageService.clearSessionData();
                this.router.navigate([RoutePaths.LOGIN_ROUTE]);
                return throwError(refreshError);
              })
            );
          } else {
            return throwError(error);
          }
        })
      );
    } else {
      return this.httpClient.post(url, payload, { headers: this.createHeader() }).pipe(
        catchError((error) => {
          if (error.status === 401) {
            return this.refreshToken().pipe(
              switchMap((refreshResponse) => {
                return this.httpClient.post(url, payload, { headers: this.createHeader(refreshResponse.token) })
              }),
              catchError((refreshError) => {
                this.localStorageService.clearSessionData();
                this.router.navigate([RoutePaths.LOGIN_ROUTE]);
                return throwError(refreshError);
              })
            );
          } else {
            return throwError(error);
          }
        })
      );
    }
  }

  put<T>(endPoint: string, payload: T): Observable<any> {
    return this.httpClient.put(`${this.API_URL}/${endPoint}`, payload, { headers: this.createHeader() }).pipe(
      catchError((error) => {
        if (error.status === 401) {
          return this.refreshToken().pipe(
            switchMap((refreshResponse) => {
              return this.httpClient.put(`${this.API_URL}/${endPoint}`, payload, { headers: this.createHeader(refreshResponse.token) })
            }),
            catchError((refreshError) => {
              this.localStorageService.clearSessionData();
              this.router.navigate([RoutePaths.LOGIN_ROUTE]);
              return throwError(refreshError);
            })
          );
        } else {
          return throwError(error);
        }
      })
    );
  }

  delete(endPoint: string): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/${endPoint}`, { headers: this.createHeader() }).pipe(
      catchError((error) => {
        if (error.status === 401) {
          return this.refreshToken().pipe(
            switchMap((refreshResponse) => {
              return this.httpClient.delete(`${this.API_URL}/${endPoint}`, { headers: this.createHeader(refreshResponse.token) })
            }),
            catchError((refreshError) => {
              this.localStorageService.clearSessionData();
              this.router.navigate([RoutePaths.LOGIN_ROUTE]);
              return throwError(refreshError);
            })
          );
        } else {
          return throwError(error);
        }
      })
    );
  }

}
