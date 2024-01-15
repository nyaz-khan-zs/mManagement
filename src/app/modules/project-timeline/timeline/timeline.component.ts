import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { timeLineData } from 'src/app/mock/response';
import {
  EmployeLeave,
  EmployeeUpdate,
} from 'src/app/models/models/project-timeline.interface';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  @Input() data: Data = {} as Data;
  leaveData: EmployeLeave[] = [];
  updateData: EmployeeUpdate[] = [];
  noUpdates: EmployeLeave[] = [];
  constructor() {}
  ngOnInit(): void {
    this.noUpdates = this.data.updates
      .filter((item) => item.update === null && item.leaves === null)
      .map((item) => {
        return {
          imageUrl: item.employee.profileUrl,
          name: item.employee.name,
          status: 'on leave',
        };
      });
    this.leaveData = this.data.updates
      .filter((item) => item.leaves !== null)
      .map((item) => {
        return {
          imageUrl: item.employee.profileUrl,
          name: item.employee.name,
          status: 'on leave',
        };
      });
    this.updateData = this.data.updates
      .filter((item) => item.update !== null && item.leaves === null)
      .map((item) => {
        return {
          name: item.employee.name,
          imageUrl: item.employee.profileUrl,
          update: item.update?.remarks || '',
        };
      });
  }
  counterArray(n: number): number[] {
    return Array(n)
      .fill(0)
      .map((x, i) => i);
  }
}
