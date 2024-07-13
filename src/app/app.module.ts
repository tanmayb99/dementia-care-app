import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { IonicModule } from '@ionic/angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunicationToolsComponent } from './features/communication-tools/communication-tools/communication-tools.component';
import { DailyPlannerComponent } from './features/daily-planner/daily-planner/daily-planner.component';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';
import { EmergencyContactsComponent } from './features/emergency-contacts/emergency-contacts/emergency-contacts.component';
import { GpsTrackingComponent } from './features/gps-tracking/gps-tracking/gps-tracking.component';
import { MedicalInformationComponent } from './features/medical-information/medical-information/medical-information.component';
import { RemindersComponent } from './features/reminders/reminders/reminders.component';
import { RemindersService } from './core/services/reminders.service';
import { CommunicationToolsService } from './core/services/communication-tools.service';
import { DailyPlannerService } from './core/services/daily-planner.service';
import { EmergencyContactsService } from './core/services/emergency-contacts.service';
import { MedicalInformationService } from './core/services/medical-information.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RemindersComponent,
    EmergencyContactsComponent,
    GpsTrackingComponent,
    MedicalInformationComponent,
    DailyPlannerComponent,
    CommunicationToolsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    IonicModule.forRoot() // Configures Ionic for the application
  ],
  providers: [
    RemindersService,
    EmergencyContactsService,
    MedicalInformationService,
    DailyPlannerService,
    CommunicationToolsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
