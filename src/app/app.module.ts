import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeavePageComponent } from './pages/leave-page/leave-page.component';
import { AllLeavesComponent } from './containers/all-leaves/all-leaves.component';
import { LeaveInfoComponent } from './containers/leave-info/leave-info.component';
import { LeaveHeaderComponent } from './containers/leave-header/leave-header.component';
import { CardComponent } from './components/card/card.component';
import { LeaveSummaryComponent } from './components/leave-summary/leave-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    LeavePageComponent,
    AllLeavesComponent,
    LeaveInfoComponent,
    LeaveHeaderComponent,
    CardComponent,
    LeaveSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
