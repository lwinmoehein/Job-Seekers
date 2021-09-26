import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { JobsListComponent } from './pages/jobs-list/jobs-list.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { AddJobFormComponent } from './pages/add-job-form/add-job-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select/';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatList, MatListModule} from "@angular/material/list";
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardService as AuthGuard } from './Services/auth-guard.service';
import { JwtHelperService,JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthService } from './Services/auth.service';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { EditJobFormComponent } from './pages/edit-job-form/edit-job-form.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShowjobComponent } from './pages/showjob/showjob.component';
import {MatChipsModule} from "@angular/material/chips";
import { ApplicantProfileComponent } from './pages/applicant-profile/applicant-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    JobsListComponent,
    UsersListComponent,
    AddJobFormComponent,
    LoginComponent,
    UserProfileComponent,
    EditJobFormComponent,
    AnalyticsComponent,
    ShowjobComponent,
    ApplicantProfileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    NgxChartsModule,
    FontAwesomeModule,
    MatChipsModule
  ],
  providers: [AuthGuard, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
