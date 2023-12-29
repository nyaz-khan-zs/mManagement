import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/core/models/project.interface';
import { Organisation } from 'src/app/core/models/organisation.interface';
import { Employee } from 'src/app/core/models/employee.interface';
import { Timeline } from 'src/app/core/models/timeline.interface';
import { SubordinatesData } from 'src/app/core/models/subordinates-data.interface';
import { LocalDate } from 'src/app/core/utils/local-date/local-date';
import { EmployeeService } from 'src/app/service/employee/employee.service';
import { OrganisationService } from 'src/app/service/organisation/organisation.service';
import { ProjectService } from 'src/app/service/project/project.service';
import { UpdateService } from 'src/app/service/update/update.service';
import { LocalStorageService } from 'src/app/core/utils/local-storage/local-storage.service';
import { SessionData } from 'src/app/core/models/session-data.interface';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  projects: Project[] = [];
  organisation !: Organisation;
  directReportees: Employee[] = [];
  update !: Timeline;
  subordinateLeaves !: SubordinatesData;
  subordinateNoUpdates !: SubordinatesData;
  subordinateLeavesDate: LocalDate = new LocalDate();
  subordinateNoUpdateDate: LocalDate = new LocalDate();
  localDate: LocalDate = new LocalDate();
  sessionData!: SessionData

  constructor(private employeeService: EmployeeService, private organisationService: OrganisationService,
     private projectService: ProjectService, private localStorageService: LocalStorageService) { 
      this.sessionData = localStorageService.getSessionData();
     }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe({
      next: (value: Project[]) => { this.projects = value },
      error: (error) => { console.log(error); }
    })
    this.employeeService.getReportees().subscribe({
      next: (value: Employee[]) => { this.directReportees = value },
      error: (error) => { console.log(error); }
    });
    this.employeeService.getEmployeeTimeline(parseInt(this.sessionData.userData.employeeId),this.localDate,this.localDate).subscribe({
      next : (value : Timeline[])=>{
          this.update = value[0];
      },
      error : (error)=>{console.log(error);}
    })
    this.organisationService.getOrganisation().subscribe({
      next: (value: Organisation) => { this.organisation = value },
      error: (error) => { console.log(error) }
    })
    this.employeeService.getSubordinateLeaves(this.subordinateLeavesDate).subscribe({
      next: (value: SubordinatesData) => { this.subordinateLeaves = value },
      error: (error) => { console.log(error) }
    })
    this.employeeService.getSubordinateNoUpdates(this.subordinateNoUpdateDate).subscribe({
      next: (value: SubordinatesData) => { this.subordinateNoUpdates = value },
      error: (error) => { console.log(error) }
    })
  }

  getUnionOfArray(array1: Employee[], array2: Employee[]): Employee[] {
    return [...array1, ...array2];
  }

}
