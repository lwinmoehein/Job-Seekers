import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';
import { ShowjobComponent } from './pages/showjob/showjob.component';
import { RegisterComponent } from './pages/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { JobsListComponent } from "../app/pages/jobs-list/jobs-list.component";
import { LoginComponent } from './pages/login/login.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AuthGuardService as AuthGuard } from './Services/auth-guard.service';

const routes: Routes = [
  { path: '', component: JobsListComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'showjob', component: ShowjobComponent,canActivate:[AuthGuard] },
  {path:'updateprofile',component:UpdateProfileComponent,canActivate:[AuthGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
