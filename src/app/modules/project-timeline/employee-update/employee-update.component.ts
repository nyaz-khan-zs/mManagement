import { Component, Input, OnInit } from '@angular/core';
import { EmployeeUpdate } from 'src/app/models/models/project-timeline.interface';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss'],
})
export class EmployeeUpdateComponent implements OnInit {
  constructor() {}
  @Input() data: EmployeeUpdate = {
    name: 'Arshad',
    imageUrl:
      'https://lh3.googleusercontent.com/a/ACg8ocIiqm3__ZM2_Cncji38dmJ9UziYGKRPKKYs7kzdjprU=s96-c',
    update: 'updates',
  };
  ngOnInit(): void {}
}
