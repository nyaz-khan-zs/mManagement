import { Component, OnInit } from '@angular/core';
import { LeaveSummary } from 'src/app/core/models/leaveSummary';

@Component({
  selector: 'app-leave-summary',
  templateUrl: './leave-summary.component.html',
  styleUrls: ['./leave-summary.component.scss'],
})
export class LeaveSummaryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  leavedata: LeaveSummary[] = [
    {
      leaveName: 'Casual',
      leaveNumber: 10,
    },
    {
      leaveName: 'Sick',
      leaveNumber: 10,
    },
    {
      leaveName: 'Bereavement',
      leaveNumber: 10,
    },
    {
      leaveName: 'Maternity',
      leaveNumber: 10,
    },
    {
      leaveName: 'Paternity',
      leaveNumber: 10,
    },
  ];
}
