import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxWigModule } from 'ngx-wig';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LeavePageComponent } from './pages/leave-page/leave-page.component';
import { AllLeavesComponent } from './modules/leaves/all-leaves/all-leaves.component';
import { LeaveInfoComponent } from './modules/leaves/leave-info/leave-info.component';
import { LeaveHeaderComponent } from './modules/leaves/leave-header/leave-header.component';
import { CardComponent } from './components/card/card.component';
import { LeaveSummaryComponent } from './modules/leaves/leave-summary/leave-summary.component';
import { PieChartComponent } from './modules/leaves/pie-chart/pie-chart.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { EditorComponent } from './shared/editor/editor.component';
import { HttpService } from './service/http-service/http.service';
import { AuthGuard } from './auth.guard';
import { HeaderComponent } from './shared/header/header.component';
import { ProjectTimelineComponent } from './modules/project-timeline/project-timeline.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssetsComponent } from './modules/assets/assets.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
// import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
// import { CalendarComponent } from './components/calendar/calendar.component';
import { StoreModule } from '@ngrx/store';
import { EmployeeUpdateComponent } from './modules/project-timeline/employee-update/employee-update.component';
import { ProjectTimelineModule } from './modules/project-timeline/project-timeline.module';

@NgModule({
  declarations: [
    AppComponent,
    LeavePageComponent,
    AllLeavesComponent,
    LeaveInfoComponent,
    LeaveHeaderComponent,
    CardComponent,
    LeaveSummaryComponent,
    PieChartComponent,
    DatePickerComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    EditorComponent,
    HeaderComponent,
    ProjectTimelineComponent,
    AssetsComponent,
    // CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxWigModule,
    FormsModule,
    BrowserAnimationsModule,
    ProjectTimelineModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    StoreModule.forRoot({}, {}),
  ],
  providers: [HttpService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
