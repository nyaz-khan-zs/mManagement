import { Injectable } from '@angular/core';
import { GoogleUserData,SessionData } from '../../models/session-data.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  isUserLoggedIn():boolean{
    return localStorage.getItem('token') !== null;
  }

  getSessionData(): SessionData{
    return {
      token: localStorage.getItem("token") ?? "",
      userData: JSON.parse(localStorage.getItem("userData") ?? "{}"),
      accessTokenForNewOrg: localStorage.getItem("createOrg") ?? ""
    };
  }

  setSessionData(sessionData : SessionData) : void{
    localStorage.setItem("token", sessionData.token);
    localStorage.setItem("userData", JSON.stringify(sessionData.userData));
    localStorage.setItem("accessTokenForNewOrg", sessionData.accessTokenForNewOrg ?? "");
  }
}
