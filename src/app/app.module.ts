import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxWigModule } from 'ngx-wig';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LeavePageComponent } from './pages/leave-page/leave-page.component';
import { AllLeavesComponent } from './containers/all-leaves/all-leaves.component';
import { LeaveInfoComponent } from './containers/leave-info/leave-info.component';
import { LeaveHeaderComponent } from './containers/leave-header/leave-header.component';
import { CardComponent } from './components/card/card.component';
import { LeaveSummaryComponent } from './components/leave-summary/leave-summary.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { EditorComponent } from './components/editor/editor.component';
import { HttpService } from './core/utils/http-service/http.service';
import { AuthGuard } from './auth.guard';
import { HeaderComponent } from './components/header/header.component';

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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxWigModule,
    FormsModule
    ],
  providers: [HttpService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
