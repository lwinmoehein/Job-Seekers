import { ShowjobComponent } from './pages/showjob/showjob.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { EditJobFormComponent } from './pages/edit-job-form/edit-job-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes,CanActivate} from '@angular/router';
import { JobsListComponent } from "../app/pages/jobs-list/jobs-list.component";
import { UsersListComponent } from './pages/users-list/users-list.component';
import { AddJobFormComponent } from './pages/add-job-form/add-job-form.component';
import { LoginComponent } from './pages/login/login.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AuthGuardService as AuthGuard } from './Services/auth-guard.service';
import { ApplicantProfileComponent } from './pages/applicant-profile/applicant-profile.component';

const routes: Routes = [
  { path: '', component: JobsListComponent,canActivate:[AuthGuard] },
  { path: 'users', component: UsersListComponent,canActivate:[AuthGuard] },
  { path: 'addjob', component: AddJobFormComponent,canActivate:[AuthGuard] },
  { path: 'editjob', component: EditJobFormComponent,canActivate:[AuthGuard] },
  { path: 'showjob', component: ShowjobComponent,canActivate:[AuthGuard] },
  {path:'profile',component:UserProfileComponent,canActivate:[AuthGuard]},
  {path:'analytics',component:AnalyticsComponent,canActivate:[AuthGuard]},
  {path:'applicantprofile',component:ApplicantProfileComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
