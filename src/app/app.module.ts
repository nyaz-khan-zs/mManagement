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
import { MytimelineComponent } from './modules/mytimeline/mytimeline.component';
import { AssetsComponent } from './modules/assets/assets.component';

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
    MytimelineComponent,
    AssetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxWigModule,
    FormsModule,
  ],
  providers: [HttpService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
