import { Component, OnInit } from '@angular/core';
import { LeaveCardDetail } from 'src/app/interface/leaveCardDetail';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  leaveCardData: LeaveCardDetail[] = [
    {
      leaveDays: 2,
      session: 'FULL DAY',
      type: 'Sick Leave',
      leaveStatus: 'Auto approved',
      dayOfLeave: 'Monday',
      date: 'Dec 18',
      reason: 'Cancer',
      approvedBy: '',
      cc: '',
    },
    {
      leaveDays: 2,
      session: 'FULL DAY',
      type: 'Sick Leave',
      leaveStatus: 'Approved By:',
      dayOfLeave: 'Monday',
      date: 'Dec 18',
      reason: 'Fever',
      approvedBy: 'Ujjawal Misra',
      cc: '',
    },
    {
      leaveDays: 2,
      session: 'FULL DAY',
      type: 'Sick Leave',
      leaveStatus: 'Auto approved',
      dayOfLeave: 'Monday',
      date: 'Dec 18',
      reason: 'Cancer',
      approvedBy: '',
      cc: '',
    },
    {
      leaveDays: 2,
      session: 'FULL DAY',
      type: 'Sick Leave',
      leaveStatus: 'Auto approved',
      dayOfLeave: 'Monday',
      date: 'Dec 18',
      reason: 'Fever',
      approvedBy: '',
      cc: '',
    },
    {
      leaveDays: 2,
      session: 'FULL DAY',
      type: 'Sick Leave',
      leaveStatus: 'Approved By:',
      dayOfLeave: 'Monday',
      date: 'Dec 18',
      reason: 'Fever',
      approvedBy: 'Ujjawal Misra',
      cc: '',
    },
    {
      leaveDays: 2,
      session: 'FULL DAY',
      type: 'Sick Leave',
      leaveStatus: 'Auto approved',
      dayOfLeave: 'Monday',
      date: 'Dec 18',
      reason: 'Fever',
      approvedBy: '',
      cc: '',
    },
  ];
}
