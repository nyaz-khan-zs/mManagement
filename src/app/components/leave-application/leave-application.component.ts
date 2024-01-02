import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.scss']
})
export class LeaveApplicationComponent{
  leaveTypes = [
     { value: 'sick', viewValue: 'Sick' },
     { value: 'bereavement', viewValue: 'Bereavement' },
  ];
IsmodelShow=false;
close() {
  this.IsmodelShow=true;// set false while you need open your model popup
 // do your more code
}

}
