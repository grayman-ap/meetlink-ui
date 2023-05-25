import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { SignupComponent } from '../pages/signup/signup.component';
import { AnalyticsComponent } from '../pages/analytics/analytics.component';
import { MainContentComponent } from '../components/main-content/main-content.component';
import { VisitorsComponent } from '../pages/visitors/visitors.component';
import { EmployeesComponent } from '../pages/employees/employees.component';
import { UsersComponent } from '../pages/users/users.component';
import { MeetingsComponent } from '../pages/meetings/meetings.component';
import { HeaderComponent } from '../components/header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgChartsModule } from 'ng2-charts';
import {ChartModule} from '@syncfusion/ej2-angular-charts';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTableModule } from '@angular/material/table';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { VisitorAnalyticsChartComponent } from '../components/visitor-analytics-chart/visitor-analytics-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';

library.add(fas);
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SignupComponent,
    AnalyticsComponent,
    MainContentComponent,
    VisitorsComponent,
    EmployeesComponent,
    UsersComponent,
    MeetingsComponent,
    HeaderComponent,
    VisitorAnalyticsChartComponent,
    DonutChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    NgChartsModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    ChartModule,
    MatButtonModule,
    MatPaginatorModule,
    FontAwesomeModule,
    AngularSvgIconModule.forRoot() ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
