import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MytimelineRoutingModule } from './mytimeline-routing.module';
import { MytimelineComponent } from './mytimeline.component';


@NgModule({
  declarations: [
    MytimelineComponent
  ],
  imports: [
    CommonModule,
    MytimelineRoutingModule
  ]
})
export class MytimelineModule { }
