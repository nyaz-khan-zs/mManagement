import { Injectable } from '@angular/core';
import {
  GoogleUserData,
  SessionData,
} from '../../models/models/session-data.interface';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  isUserLoggedIn(): boolean {
    return (
      localStorage.getItem('token') !== null &&
      localStorage.getItem('token') !== undefined
    );
  }

  getSessionData(): SessionData {
    return {
      token: localStorage.getItem('token') ?? '',
      userData: JSON.parse(localStorage.getItem('userData') ?? '{}'),
      accessTokenForNewOrg: localStorage.getItem('createOrg') ?? '',
    };
  }

  setSessionData(sessionData: SessionData): void {
    try {
      localStorage.setItem('token', sessionData.token);
      localStorage.setItem('userData', JSON.stringify(sessionData.userData));
      localStorage.setItem(
        'accessTokenForNewOrg',
        sessionData.accessTokenForNewOrg ?? ''
      );
    } catch (error) {
      console.log('Error while update local storage -> ', error);
    }
  }

  clearSessionData() {
    localStorage.clear();
  }
}
