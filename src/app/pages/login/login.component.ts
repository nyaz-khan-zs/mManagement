import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http-service/http.service';
import { environment } from 'src/environments/environment';
import { jwtDecode } from 'jwt-decode';
import { LocalStorageService } from 'src/app/service/local-storage/local-storage.service';
import { GoogleUserData } from 'src/app/models/models/session-data.interface';
import { LoginRequest } from 'src/app/models/models/request/login-request.interface';
import { Router } from '@angular/router';
import { RoutePaths } from '../../models/models/route_path';

declare global {
  interface Window {
    google: any;
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  GOOGLE_CLIENT_ID = environment.REACT_APP_GOOGLE_LOGIN_CLIENT_ID;

  constructor(
    private httpService: HttpService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.localStorageService.isUserLoggedIn()) {
      this.router.navigate([RoutePaths.DASHBOARD_ROUTE]);
    }
    try {
      if (window.google !== undefined && window.google.accounts !== undefined) {
        window.google.accounts.id.initialize({
          client_id: this.GOOGLE_CLIENT_ID,
          callback: this.onSuccess.bind(this),
          ux_mode: 'popup',
        });
        window.google.accounts.id.prompt();
        window.google.accounts.id.renderButton(
          document.getElementById('google-signin-button'),
          {
            theme: 'light',
            size: 'large',
            type: 'standard',
            width: '350px',
            text: 'Signin with Google',
            logo_alignment: 'left',
            auto_select: 'true',
          }
        );
      }
    } catch (error) {
      setTimeout(this.ngOnInit, 1500);
    }
  }

  onSuccess(googleUser: any): void {
    const token = googleUser.credential;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const userObject: any = jwtDecode(token);
    const userData: GoogleUserData = {
      name: userObject.name,
      firstName: userObject.given_name,
      lastName: userObject.family_name,
      email: userObject.email,
      profileImage: userObject.picture,
      domain: userObject.hd,
      accessToken: token,
      timezone,
      roles: [],
      employeeId: '',
      authToken: '',
      tenantId: '',
      organizationName: '',
      subOrdinates: [],
      refreshToken: '',
    };
    let loginRequest: LoginRequest = {
      email: userData.email,
      name: userData.name,
      profileUrl: userData.profileImage,
      token,
      timezone: userData.timezone,
      domain: userData.domain,
      fcmToken: 'LAPTOP',
    };
    this.httpService.post<LoginRequest>('login', loginRequest).subscribe({
      next: (loginResponse: any) => {
        userData.roles = loginResponse.data.roles;
        userData.employeeId = loginResponse.data.id;
        userData.authToken = loginResponse.data.accessToken;
        userData.tenantId = loginResponse.data.tenantId;
        userData.organizationName = loginResponse.data.tenantName;
        userData.timezone = loginResponse.data.timezone;
        userData.subOrdinates =
          loginResponse.data.subOrdinates === null
            ? []
            : loginResponse.data.subOrdinates;
        userData.gender =
          loginResponse.data.gender !== 'null'
            ? null
            : loginResponse.data.gender;
        userData.refreshToken = loginResponse.data.refreshToken;
        this.localStorageService.setSessionData({
          token: loginResponse.data.accessToken,
          userData: userData,
        });
        this.router.navigate([RoutePaths.DASHBOARD_ROUTE]);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onFailure(): void {
    console.log('Google Sign-In failed');
  }
}
