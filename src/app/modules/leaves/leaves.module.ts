import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LeavePageComponent } from 'src/app/pages/leave-page/leave-page.component';
import { AllLeavesComponent } from 'src/app/containers/all-leaves/all-leaves.component';
import { LeaveInfoComponent } from 'src/app/containers/leave-info/leave-info.component';
import { LeaveHeaderComponent } from 'src/app/containers/leave-header/leave-header.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { LeaveSummaryComponent } from 'src/app/components/leave-summary/leave-summary.component';
import { PieChartComponent } from 'src/app/components/pie-chart/pie-chart.component';
import { DatePickerComponent } from 'src/app/components/date-picker/date-picker.component';

@NgModule({
  declarations: [
    LeavePageComponent,
    AllLeavesComponent,
    LeaveInfoComponent,
    LeaveHeaderComponent,
    CardComponent,
    LeaveSummaryComponent,
    PieChartComponent,
    DatePickerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', component : LeavePageComponent}
    ])
  ]
})
export class LeavesModule { }
