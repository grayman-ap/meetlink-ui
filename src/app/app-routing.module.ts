import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from 'src/app/components/main-content/main-content.component';
import { AnalyticsComponent } from 'src/app/pages/analytics/analytics.component';
import { EmployeesComponent } from 'src/app/pages/employees/employees.component';
import { MeetingsComponent } from 'src/app/pages/meetings/meetings.component';
import { SignupComponent } from 'src/app/pages/signup/signup.component';
import { UsersComponent } from 'src/app/pages/users/users.component';
import { VisitorsComponent } from 'src/app/pages/visitors/visitors.component';
import { EmployeeDetailComponent } from './pages/employee-detail/employee-detail.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'analytics', pathMatch: 'full'},
  {path: 'analytics', component: AnalyticsComponent},
  {path: 'visitors-logbook', component: VisitorsComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'employees/details/:uid', component: EmployeeDetailComponent},
  {path: 'employees/apply/:uid', component: EmployeeDetailComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/details/:uid', component: UserDetailsComponent},
  {path: 'meetings', component: MeetingsComponent},
  { path: 'signup', component: SignupComponent },

];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],  
  bootstrap: [MainContentComponent]
})
export class AppRoutingModule { }
