import { Injectable } from '@angular/core';
import { SessionData } from 'src/app/core/models/session-data.interface';
import { HttpService } from 'src/app/core/utils/http-service/http.service';
import { LocalStorageService } from 'src/app/core/utils/local-storage/local-storage.service';
import { Observable } from 'rxjs';
import {map,catchError} from 'rxjs/operators';
import { Employee } from 'src/app/core/models/employee.interface';
import { SubordinatesData } from 'src/app/core/models/subordinates-data.interface';
import { LocalDate } from 'src/app/core/utils/local-date/local-date';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  sessionData !: SessionData;

  constructor(private httpService: HttpService, private localStorageService: LocalStorageService) {
    this.sessionData = localStorageService.getSessionData();
  }

  getReportees(): Observable<Employee[]> {
    return this.httpService.get(`employees?reportingTo=${this.sessionData.userData.employeeId}`)
      .pipe(
        map((json: any) => {
          return json.data.map((employee: any) => ({
            id: employee.id,
            name: employee.name,
            location: employee.location,
            email: employee.email,
            designation: employee.designation,
            joiningDate: employee.date,
            reportingTo: employee.reportingTo,
            employeeId: employee.employeeId,
            profileUrl: employee.profileUrl,
            viewTimeline: employee.viewTimeline,
            isActive: employee.isActive,
            removalDate: employee.removalDate,
            exempted: employee.exempted,
            officeLocation: employee.officeLocation,
            githubUsername: employee.githubUsername,
            gender: employee.gender,
            numberOfSubOrdinates: employee.numberOfSubOrdinates
          }));
        }),
        catchError((error) => {
          throw error;
        })
      );
  }

  getSubordinateLeaves(date:LocalDate) : Observable<SubordinatesData>{
    return this.httpService.get(`employees/${this.sessionData.userData.employeeId}/subordinates-leaves?date=${date.toLocale()}`)
    .pipe(
      map((json: any) => {
        return json.data as SubordinatesData;
      }),
      catchError((error) => {
        throw error;
      })
    );
  }

  getSubordinateNoUpdates(date:LocalDate) : Observable<SubordinatesData>{
    return this.httpService.get(`employees/${this.sessionData.userData.employeeId}/subordinates-no-updates?date=${date.toLocale()}`)
    .pipe(
      map((json: any) => {
        return json.data as SubordinatesData;
      }),
      catchError((error) => {
        throw error;
      })
    );
  }
  
}
