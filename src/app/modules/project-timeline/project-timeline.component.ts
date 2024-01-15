import { Component, OnInit } from '@angular/core';
import { timeLineData } from 'src/app/mock/response';
import {
  Data,
  EmployeLeave,
  EmployeeUpdate,
} from 'src/app/models/models/project-timeline.interface';

@Component({
  selector: 'app-project-timeline',
  templateUrl: './project-timeline.component.html',
  styleUrls: ['./project-timeline.component.scss'],
})
export class ProjectTimelineComponent implements OnInit {
  data: Data[] = [];
  leaveData: EmployeLeave[] = [];
  updateData: EmployeeUpdate[] = [];
  noUpdates: EmployeLeave[] = [];
  constructor() {}
  ngOnInit(): void {
    this.data = timeLineData;
  }
  counterArray(n: number): number[] {
    return Array(n)
      .fill(0)
      .map((x, i) => i);
  }

  array = [
    {
      date: '21 Dec',
      updates: [
        {
          project: {
            id: 4,
            name: 'Training And Upskilling',
            remarks:
              '   PR #2262: explained flow to Arun for reviewing and worked on the changes.\n   PR #2262 got approved and merged to stage & tested if stage is working fine.\n   Added release notes for v4.10.16.',
          },
        },
        {
          project: {
            id: 6,
            name: 'Mentor Pro',
            remarks:
              '   PR #2262: explained flow to Arun for reviewing and worked on the changes.\n   PR #2262 got approved and merged to stage & tested if stage is working fine.\n   Added release notes for v4.10.16.',
          },
        },
        {
          project: {
            id: 90,
            name: 'EazyUpdates',
            remarks:
              '   PR #2262: explained flow to Arun for reviewing and worked on the changes.\n   PR #2262 got approved and merged to stage & tested if stage is working fine.\n   Added release notes for v4.10.16.',
          },
        },
        {
          project: {
            id: 4,
            name: 'Training And Upskilling',
            remarks:
              '   PR #2262: explained flow to Arun for reviewing and worked on the changes.\n   PR #2262 got approved and merged to stage & tested if stage is working fine.\n   Added release notes for v4.10.16.',
          },
        },
        {
          project: {
            id: 6,
            name: 'Mentor Pro',
            remarks:
              '   PR #2262: explained flow to Arun for reviewing and worked on the changes.\n   PR #2262 got approved and merged to stage & tested if stage is working fine.\n   Added release notes for v4.10.16.',
          },
        },
        {
          project: {
            id: 90,
            name: 'EazyUpdates',
            remarks:
              '   PR #2262: explained flow to Arun for reviewing and worked on the changes.\n   PR #2262 got approved and merged to stage & tested if stage is working fine.\n   Added release notes for v4.10.16.',
          },
        },
      ],
      isEditable: true,
    },
    {
      date: '22 Dec',
      updates: [
        {
          project: {
            id: 4,
            name: 'Training And Upskilling',
            remarks:
              '   PR #2262: explained flow to Arun for reviewing and worked on the changes.\n   PR #2262 got approved and merged to stage & tested if stage is working fine.\n   Added release notes for v4.10.16.',
          },
        },
        {
          project: {
            id: 6,
            name: 'Mentor Pro',
            remarks:
              '   PR #2262: explained flow to Arun for reviewing and worked on the changes.\n   PR #2262 got approved and merged to stage & tested if stage is working fine.\n   Added release notes for v4.10.16.',
          },
        },
        {
          project: {
            id: 90,
            name: 'EazyUpdates',
            remarks:
              '   PR #2262: explained flow to Arun for reviewing and worked on the changes.\n   PR #2262 got approved and merged to stage & tested if stage is working fine.\n   Added release notes for v4.10.16.',
          },
        },
        {
          project: {
            id: 4,
            name: 'Training And Upskilling',
            remarks:
              '   PR #2262: explained flow to Arun for reviewing and worked on the changes.\n   PR #2262 got approved and merged to stage & tested if stage is working fine.\n   Added release notes for v4.10.16.',
          },
        },
        {
          project: {
            id: 6,
            name: 'Mentor Pro',
            remarks:
              '   PR #2262: explained flow to Arun for reviewing and worked on the changes.\n   PR #2262 got approved and merged to stage & tested if stage is working fine.\n   Added release notes for v4.10.16.',
          },
        },
        {
          project: {
            id: 90,
            name: 'EazyUpdates',
            remarks:
              '   PR #2262: explained flow to Arun for reviewing and worked on the changes.\n   PR #2262 got approved and merged to stage & tested if stage is working fine.\n   Added release notes for v4.10.16.',
          },
        },
      ],
      isEditable: true,
    },
  ];

  // transformRemarksToList() {
  //   return this.data.
  //     .split('\n')
  //     .map((item) => item.trim().substring(1));
  // }
}
