import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave-info',
  templateUrl: './leave-info.component.html',
  styleUrls: ['./leave-info.component.scss'],
})
export class LeaveInfoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  title: string = '(2 days)';
  progress: string = '60';
  month: string = 'JAN';
}
