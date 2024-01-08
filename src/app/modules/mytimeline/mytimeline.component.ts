import { Component, OnInit } from '@angular/core';
import { mytimeline } from 'src/app/models/models/mytimeline.interface';
import { Timeline } from 'src/app/models/models/timeline.interface';
import { EmployeeService } from 'src/app/service/employee/employee.service';


import { LocalStorageService } from 'src/app/service/local-storage/local-storage.service';
import { SessionData } from 'src/app/models/models/session-data.interface';
import { LocalDate } from 'src/app/utils/local-date/local-date';

@Component({
  selector: 'app-mytimeline',
  templateUrl: './mytimeline.component.html',
  styleUrls: ['./mytimeline.component.scss']
})
export class MytimelineComponent implements OnInit {
  update!: Timeline;
  localDate: LocalDate = new LocalDate();
  sessionData!: SessionData;

  constructor( private employeeService: EmployeeService,    private localStorageService: LocalStorageService
    ) {   
    this.sessionData = localStorageService.getSessionData();

  }

  ngOnInit(): void {
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
  }

  data : mytimeline []= [
    {
      "date": "21 Dec",
      "updates": [
        {
          "project": {
            "id": 4,
            "name": "Training And Upskilling",
            "remarks": "   PR #2262: explained flow to Arun for reviewing and worked on the changes.\n   PR #2262 got approved and merged to stage & tested if stage is working fine.\n   Added release notes for v4.10.16.",
            }
        },
        {
          "project": {
            "id": 6,
            "name": "Mentor Pro",
            "remarks": "   PR #2262: explained flow to Arun for reviewing and worked on the changes.\n   PR #2262 got approved and merged to stage & tested if stage is working fine.\n   Added release notes for v4.10.16.",
          }
        },
        {
          "project": {
            "id": 90,
            "name": "EazyUpdates",
            "remarks": "   PR #2262: explained flow to Arun for reviewing and worked on the changes.\n   PR #2262 got approved and merged to stage & tested if stage is working fine.\n   Added release notes for v4.10.16.",
          }
        }
      ],
      "isEditable": true
    }
  ]
  
 


}
