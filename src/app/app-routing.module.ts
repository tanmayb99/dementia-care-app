import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationToolsComponent } from './features/communication-tools/communication-tools/communication-tools.component';
import { DailyPlannerComponent } from './features/daily-planner/daily-planner/daily-planner.component';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';
import { EmergencyContactsComponent } from './features/emergency-contacts/emergency-contacts/emergency-contacts.component';
import { GpsTrackingComponent } from './features/gps-tracking/gps-tracking/gps-tracking.component';
import { MedicalInformationComponent } from './features/medical-information/medical-information/medical-information.component';
import { RemindersComponent } from './features/reminders/reminders/reminders.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'reminders', component: RemindersComponent },
  { path: 'emergency-contacts', component: EmergencyContactsComponent },
  { path: 'gps-tracking', component: GpsTrackingComponent },
  { path: 'medical-information', component: MedicalInformationComponent },
  { path: 'daily-planner', component: DailyPlannerComponent },
  { path: 'communication-tools', component: CommunicationToolsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
