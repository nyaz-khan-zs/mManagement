import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectTimelineRoutingModule } from './project-timeline-routing.module';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeLeaveComponent } from './employee-leave/employee-leave.component';
import { TimelineComponent } from './timeline/timeline.component';
// import { CalendarComponent } from 'src/app/components/calendar/calendar.component';

@NgModule({
  declarations: [
    EmployeeUpdateComponent,
    EmployeeLeaveComponent,
    TimelineComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, ProjectTimelineRoutingModule],
  exports: [EmployeeUpdateComponent, EmployeeLeaveComponent, TimelineComponent],
})
export class ProjectTimelineModule {}
