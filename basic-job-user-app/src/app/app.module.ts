import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { JobsListComponent } from './pages/jobs-list/jobs-list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select/';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatList, MatListModule } from "@angular/material/list";
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardService as AuthGuard } from './Services/auth-guard.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthService } from './Services/auth.service';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RegisterComponent } from './pages/register/register.component';
import { ShowjobComponent } from './pages/showjob/showjob.component';
import { MatDialogModule} from '@angular/material/dialog';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { AddEducation, AddWorkExperience, UpdateProfileComponent } from './pages/update-profile/update-profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    JobsListComponent,
    LoginComponent,
    UserProfileComponent,
    RegisterComponent,
    ShowjobComponent,
    UpdateProfileComponent,
    AddWorkExperience,
    AddEducation
  ],
  imports: [
    MaterialModule,
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
    MatDialogModule,
    MatOptionModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    FontAwesomeModule
  ],
  providers: [AuthGuard, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
