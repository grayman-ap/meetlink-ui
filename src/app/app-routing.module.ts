import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from 'src/components/main-content/main-content.component';
import { AnalyticsComponent } from 'src/pages/analytics/analytics.component';
import { EmployeesComponent } from 'src/pages/employees/employees.component';
import { MeetingsComponent } from 'src/pages/meetings/meetings.component';
import { SignupComponent } from 'src/pages/signup/signup.component';
import { UsersComponent } from 'src/pages/users/users.component';
import { VisitorsComponent } from 'src/pages/visitors/visitors.component';
const routes: Routes = [
  {path: '', redirectTo: 'analytics', pathMatch: 'full'},
  {path: 'analytics', component: AnalyticsComponent},
  {path: 'visitors-logbook', component: VisitorsComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'users', component: UsersComponent},
  {path: 'meetings', component: MeetingsComponent},
  { path: 'signup', component: SignupComponent },

];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],  
  bootstrap: [MainContentComponent]
})
export class AppRoutingModule { }
