import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { EditorComponent } from 'src/app/components/editor/editor.component';
import { NgxWigModule } from 'ngx-wig';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    EditorComponent,
    ],
  imports: [
    CommonModule,
    NgxWigModule,
    FormsModule,
    RouterModule.forChild([
      {path : '' , component : DashboardComponent}
    ])
  ]
})
export class DashboardModule { }
