import { Component, Input, OnInit } from '@angular/core';
import { EmployeLeave } from 'src/app/models/models/project-timeline.interface';

@Component({
  selector: 'app-employee-leave',
  templateUrl: './employee-leave.component.html',
  styleUrls: ['./employee-leave.component.scss'],
})
export class EmployeeLeaveComponent implements OnInit {
  constructor() {}
  @Input() data: EmployeLeave = {
    name: 'Arshad',
    imageUrl:
      'https://lh3.googleusercontent.com/a/ACg8ocIiqm3__ZM2_Cncji38dmJ9UziYGKRPKKYs7kzdjprU=s96-c',
    status: 'on leave',
  };
  ngOnInit(): void {}
}
