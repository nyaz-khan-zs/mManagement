import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MytaskRoutingModule } from './mytask-routing.module';
import { MytaskComponent } from './mytask.component';


@NgModule({
  declarations: [
    MytaskComponent
  ],
  imports: [
    CommonModule,
    MytaskRoutingModule
  ]
})
export class MytaskModule { }
