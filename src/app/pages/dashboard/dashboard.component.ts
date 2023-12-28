import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/core/models/project.interface';
import { Organisation } from 'src/app/core/models/organisation.interface';
import { Employee } from 'src/app/core/models/employee.interface';
import { Timeline } from 'src/app/core/models/timeline.interface';
import { SubordinatesData } from 'src/app/core/models/subordinates-data.interface';
import { LocalDate } from 'src/app/core/utils/local-date/local-date';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  organisationJsonData: any = {
    "data": {
      "id": "8a948172820c107b01820c6679ee0001",
      "name": "Staging Eazyupdates",
      "description": "ZopSmart is cutting edge retail technology company that provides you all the tools to build your e-commerce business.",
      "location": "string",
      "logo": "",
      "domain": "zopsmart.com",
      "updateSpan": 4,
      "tasc": true,
      "assets": true,
      "emailNotification": true,
      "addUpdate": true,
      "emailNotificationSpan": 2,
      "meeting": true,
      "meetingSpan": 7,
      "loginTime": 1703078202,
      "tagOverride": true,
      "githubSupport": true,
      "isActive": true,
      "isExempted": true,
      "dues": 0.0,
      "plan": {
        "id": 1,
        "cost": 1.0,
        "freeUsers": 5,
        "dueDaysSpan": 30
      }
    }
  };

  reporteesJsonData: any = {
    "data": [
      {
        "id": 990,
        "name": "Shruti Khare",
        "location": null,
        "email": "shruti.khare@zopsmart.com",
        "designation": "Scrum Master",
        "joiningDate": null,
        "reportingTo": 956,
        "employeeId": null,
        "profileUrl": "https://lh3.googleusercontent.com/a/ACg8ocK7q30bDgwiqx399Y3yOD-44oTucYPzv7q68w3-46j5ZbM=s96-c",
        "viewTimeline": true,
        "isActive": true,
        "removalDate": null,
        "exempted": false,
        "officeLocation": null,
        "githubUsername": null,
        "gender": "FEMALE",
        "numberOfSubOrdinates": 3
      },
      {
        "id": 956,
        "name": "Vijoy Bardhan Singh",
        "employeeId": null,
        "email": "vijoybardhan.singh@zopsmart.com",
        "joiningDate": null,
        "designation": null,
        "location": null,
        "timezone": "Asia/Calcutta",
        "profileUrl": "https://lh3.googleusercontent.com/a/ACg8ocJL9EhOkbiZsHecgON8BJYniUDUF9z7wgdKuV62KJMP2g=s96-c",
        "isActive": true,
        "removalDate": null,
        "currentlyExempted": false,
        "gender": "MALE"
      }
    ]
  };

  projectJsonData: any = {
    "data": [
      {
        "id": 459,
        "name": "Shruti's Project",
        "teamSize": 5,
        "taskTeamId": 6377,
        "slug": "shrutis-project",
        "member": true,
        "parentProjectId": null,
        "numberOfSubProjects": 0
      },
      {
        "id": 461,
        "name": "MI PALTAN cdcdcd",
        "teamSize": 0,
        "taskTeamId": 3134,
        "slug": "mi-paltan",
        "member": true,
        "parentProjectId": null,
        "numberOfSubProjects": 0
      },
      {
        "id": 502,
        "name": "MentorPro",
        "teamSize": 2,
        "taskTeamId": 6384,
        "slug": "mentorpro",
        "member": false,
        "parentProjectId": null,
        "numberOfSubProjects": 0
      },
      {
        "id": 528,
        "name": "Backend Team (Java, SpringBoot)",
        "teamSize": 6,
        "taskTeamId": 6404,
        "slug": "backend-team",
        "member": false,
        "parentProjectId": null,
        "numberOfSubProjects": 0
      },
      {
        "id": 555,
        "name": "Blue Sky Innovation project ",
        "teamSize": 24,
        "taskTeamId": 6430,
        "slug": "blue-sky-innovation-project",
        "member": false,
        "parentProjectId": null,
        "numberOfSubProjects": 0
      },
      {
        "id": 577,
        "name": "Java Team",
        "teamSize": 3,
        "taskTeamId": 6654,
        "slug": "satgeeu-java",
        "member": false,
        "parentProjectId": null,
        "numberOfSubProjects": 0
      },
      {
        "id": 584,
        "name": "Backend Team (Java, SpringBoot)",
        "teamSize": 6,
        "taskTeamId": 6404,
        "slug": "backend-team",
        "member": false,
        "parentProjectId": null,
        "numberOfSubProjects": 0
      },
      {
        "id": 585,
        "name": "Blue Sky Innovation project Blue Sky Innovation project",
        "teamSize": 24,
        "taskTeamId": 6430,
        "slug": "blue-sky-innovation-project",
        "member": false,
        "parentProjectId": null,
        "numberOfSubProjects": 0
      },
      {
        "id": 587,
        "name": "Java Team",
        "teamSize": 3,
        "taskTeamId": 6654,
        "slug": "satgeeu-java",
        "member": false,
        "parentProjectId": null,
        "numberOfSubProjects": 0
      }
    ]
  };

  updateJsonData: any = {
    "data": [
      {
        "date": "2023-12-25",
        "leaves": null,
        "holiday": {
          "reason": "Christmas"
        },
        "meeting": [
          {
            "id": 1370,
            "manager": {
              "id": 956,
              "name": "Vijoy Bardhan Singh",
              "employeeId": null,
              "email": "vijoybardhan.singh@zopsmart.com",
              "joiningDate": null,
              "designation": null,
              "location": null,
              "timezone": "Asia/Calcutta",
              "profileUrl": "https://lh3.googleusercontent.com/a/ACg8ocJL9EhOkbiZsHecgON8BJYniUDUF9z7wgdKuV62KJMP2g=s96-c",
              "isActive": true,
              "removalDate": null,
              "currentlyExempted": false,
              "gender": "MALE"
            },
            "employee": {
              "id": 990,
              "name": "Shruti Khare",
              "employeeId": null,
              "email": "shruti.khare@zopsmart.com",
              "joiningDate": null,
              "designation": "Scrum Master",
              "location": null,
              "timezone": "Asia/Calcutta",
              "profileUrl": "https://lh3.googleusercontent.com/a/ACg8ocK7q30bDgwiqx399Y3yOD-44oTucYPzv7q68w3-46j5ZbM=s96-c",
              "isActive": true,
              "removalDate": null,
              "currentlyExempted": false,
              "gender": "FEMALE"
            },
            "remarks": "**Meeting :**\n\n1.  One day meeting\n2.  Two day meeting",
            "isPrivate": false,
            "date": "2023-12-25"
          }
        ],
        "isExempted": false,
        "officeLocation": "HSR",
        "updates": [
          {
            "project": {
              "id": 528,
              "name": "Backend Team (Java, SpringBoot)",
              "description": "Java, SpringBoot.. etc",
              "teamSize": 6,
              "startDate": "2023-10-12",
              "completionDate": null,
              "imageUrl": "",
              "visibility": "ORGANISATION",
              "taskTeamId": 6404,
              "slug": "backend-team",
              "googleChatSupport": false,
              "githubSupport": false,
              "createdAt": null,
              "active": true
            },
            "update": {
              id: 1118,
              remarks: "<h1>Hello Bro</h1>",
              type: "PROJECT"
            }
          },
          {
            "project": {
              "id": 555,
              "name": "Blue Sky Innovation project ",
              "description": "fjrhefjkrenfkjrenf fvfv It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
              "teamSize": 24,
              "startDate": "2022-04-01",
              "completionDate": null,
              "imageUrl": "https://storage.googleapis.com/zopping-staging-uploads/2497/images/originals/20231020/imagefile-20231020-074218.webp",
              "visibility": "ORGANISATION",
              "taskTeamId": 6430,
              "slug": "blue-sky-innovation-project",
              "googleChatSupport": true,
              "githubSupport": false,
              "createdAt": null,
              "active": true
            },
            "update": null
          },
          {
            "project": {
              "id": 577,
              "name": "Java Team",
              "description": "TBT",
              "teamSize": 3,
              "startDate": "2023-11-27",
              "completionDate": null,
              "imageUrl": "",
              "visibility": "ORGANISATION",
              "taskTeamId": 6654,
              "slug": "satgeeu-java",
              "googleChatSupport": false,
              "githubSupport": false,
              "createdAt": null,
              "active": true
            },
            "update": null
          },
          {
            "project": {
              "id": 587,
              "name": "Java Team Overflow test",
              "description": "TBT",
              "teamSize": 3,
              "startDate": "2023-11-27",
              "completionDate": null,
              "imageUrl": "",
              "visibility": "ORGANISATION",
              "taskTeamId": 6654,
              "slug": "satgeeu-java",
              "googleChatSupport": false,
              "githubSupport": false,
              "createdAt": null,
              "active": true
            },
            "update": null
          },
          {
            "project": {
              "id": 587,
              "name": "Java Team overflow test and content-size",
              "description": "TBT",
              "teamSize": 3,
              "startDate": "2023-11-27",
              "completionDate": null,
              "imageUrl": "",
              "visibility": "ORGANISATION",
              "taskTeamId": 6654,
              "slug": "satgeeu-java",
              "googleChatSupport": false,
              "githubSupport": false,
              "createdAt": null,
              "active": true
            },
            "update": null
          }
        ],
        "isEditable": true
      }
    ]
  };

  subOrdinateLeavesJsonData: any = {
    "data": {
      "directReportees": 1,
      "indirectReportees": 0,
      "directReporteesDetails": [
        {
          "id": 990,
          "name": "Shruti Khare ",
          "location": null,
          "email": "shruti.khare@zopsmart.com",
          "designation": "Scrum Master",
          "joiningDate": null,
          "reportingTo": 956,
          "employeeId": null,
          "profileUrl": "https://lh3.googleusercontent.com/a/ACg8ocK7q30bDgwiqx399Y3yOD-44oTucYPzv7q68w3-46j5ZbM=s96-c",
          "viewTimeline": true,
          "isActive": true,
          "removalDate": null,
          "exempted": false,
          "officeLocation": "Noida",
          "githubUsername": null,
          "gender": "FEMALE"
        }
      ],
      "indirectReporteesDetails": []
    }
  }

  subOrdinateNoUpdatesData:any = {
    "data": {
        "directReportees": 0,
        "indirectReportees": 0,
        "directReporteesDetails": [],
        "indirectReporteesDetails": []
    }
}

  projects: Project[] = [];
  organisation !: Organisation;
  directReportees: Employee[] = [];
  update !: Timeline;
  subordinateLeaves !: SubordinatesData;
  subordinateNoUpdates !: SubordinatesData;
  subordinateLeavesDate : LocalDate = new LocalDate();
  subordinateNoUpdateDate : LocalDate = new LocalDate();
  localDate : Date = new LocalDate();

  constructor() { }

  ngOnInit(): void {
    this.projects = this.projectJsonData.data.map((projectData: any) => {
      return {
        id: projectData.id,
        name: projectData.name,
        teamSize: projectData.teamSize,
        taskTeamId: projectData.taskTeamId,
        slug: projectData.slug,
        member: projectData.member,
        parentProjectId: projectData.parentProjectId,
        numberOfSubProjects: projectData.numberOfSubProjects,
      };
    });

    this.directReportees = this.reporteesJsonData.data.map((employee: any) => {
      return {
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
      };
    })
    this.update = this.getUpdateDataFromJson(this.updateJsonData);
    this.organisation = this.organisationJsonData.data as Organisation;
    this.subordinateLeaves = this.subOrdinateLeavesJsonData.data as SubordinatesData;
    this.subordinateNoUpdates = this.subOrdinateNoUpdatesData.data as SubordinatesData;
  }

  getUpdateDataFromJson(jsonData: any): Timeline {
    const data: any = jsonData.data[0];
    const timeline: Timeline = {
      date: data.date,
      leaves: data.leaves?.map((leave: any) => {
        return {
          leave: leave.leave,
          leaveType: leave.leaveType,
          reason: leave.reason,
          status: leave.status
        }
      }),
      meeting: data.meeting?.map((m: any) => {
        return {
          id: m.id,
          manager: m.manager,
          employee: m.employee,
          remarks: m.remarks,
          isPrivate: m.isPrivate,
          date: m.date
        }
      }),
      holiday: data.holiday,
      isExempted: data.isExempted,
      officeLocation: data.officeLocation,
      isEditable: data.isEditable,
      updates: data.updates.map((update: any) => {
        return {
          date: data.date,
          update: update.update,
          project: {
            id: update.project.id,
            member: true,
            name: update.project.name,
            slug: update.project.slug,
            teamSize: update.project.teamSize,
            taskTeamId: update.project.taskTeamId
          },
        }
      })
    }
    return timeline;
  }

  getUnionOfArray(array1 : Employee[], array2 : Employee[]) : Employee[]{
    return [...array1,...array2];
  }

}
