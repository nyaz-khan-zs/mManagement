import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/models/project.interface';
import { Organisation } from 'src/app/models/models/organisation.interface';
import { Employee } from 'src/app/models/models/employee.interface';
import { Timeline } from 'src/app/models/models/timeline.interface';
import { SubordinatesData } from 'src/app/models/models/subordinates-data.interface';
import { LocalDate } from 'src/app/utils/local-date/local-date';
import { EmployeeService } from 'src/app/service/employee/employee.service';
import { OrganisationService } from 'src/app/service/organisation/organisation.service';
import { ProjectService } from 'src/app/service/project/project.service';

import { LocalStorageService } from 'src/app/service/local-storage/local-storage.service';
import { SessionData } from 'src/app/models/models/session-data.interface';
import { Router } from '@angular/router';
import { RoutePaths } from 'src/app/models/models/route_path';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  projects: Project[] = [];
  organisation!: Organisation;
  directReportees: Employee[] = [];
  update!: Timeline;
  subordinateLeaves!: SubordinatesData;
  subordinateNoUpdates!: SubordinatesData;
  subordinateLeavesDate: LocalDate = new LocalDate();
  selectedLeaveDate: string = this.subordinateLeavesDate.toLocale();
  subordinateNoUpdateDate: LocalDate = new LocalDate();
  selectedNoUpdatesDate: string = this.subordinateNoUpdateDate.toLocale();
  localDate: LocalDate = new LocalDate();
  sessionData!: SessionData;

  constructor(
    private employeeService: EmployeeService,
    private organisationService: OrganisationService,
    private projectService: ProjectService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.sessionData = localStorageService.getSessionData();
  }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe({
      next: (value: Project[]) => {
        this.projects = value;
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.employeeService.getReportees().subscribe({
      next: (value: Employee[]) => {
        this.directReportees = value;
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.employeeService
      .getEmployeeTimeline(
        parseInt(this.sessionData.userData.employeeId),
        this.localDate,
        this.localDate
      )
      .subscribe({
        next: (value: Timeline[]) => {
          this.update = value[0];
        },
        error: (error) => {
          console.log(error);
        },
      });
    this.organisationService.getOrganisation().subscribe({
      next: (value: Organisation) => {
        this.organisation = value;
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.employeeService
      .getSubordinateLeaves(this.subordinateLeavesDate)
      .subscribe({
        next: (value: SubordinatesData) => {
          this.subordinateLeaves = value;
        },
        error: (error) => {
          console.log(error);
        },
      });
    this.employeeService
      .getSubordinateNoUpdates(this.subordinateNoUpdateDate)
      .subscribe({
        next: (value: SubordinatesData) => {
          this.subordinateNoUpdates = value;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  updateSubordinateLeave(): void {
    this.subordinateLeavesDate = new LocalDate(this.selectedLeaveDate);
    this.employeeService
      .getSubordinateLeaves(this.subordinateLeavesDate)
      .subscribe({
        next: (value: SubordinatesData) => {
          this.subordinateLeaves = value;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  updateSubordinateNoUpdate(): void {
    this.subordinateNoUpdateDate = new LocalDate(this.selectedNoUpdatesDate);
    this.employeeService
      .getSubordinateNoUpdates(this.subordinateNoUpdateDate)
      .subscribe({
        next: (value: SubordinatesData) => {
          this.subordinateNoUpdates = value;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  toLocaleDate(date: LocalDate): string {
    return date.toLocale();
  }

  getUnionOfArray(array1: Employee[], array2: Employee[]): Employee[] {
    return [...array1, ...array2];
  }

  changeProject(id: number) {
    console.log('I am here');
    this.router.navigate([RoutePaths.PROJECT_ROUTE]);
  }
}
