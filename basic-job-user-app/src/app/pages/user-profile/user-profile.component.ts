import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { User } from './../../types/user';
import { Component, OnInit } from '@angular/core';
import { getUser } from 'src/app/constants/credentials';
import { UpdateProfileService } from 'src/app/Services/update-profile.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  cv_file:any ;
  profileDetail :any = {};
  education:any[] = [];
  workExperiences:any[] = [];
  userSkills:any[] = [];

  constructor(private authService:AuthService,private router:Router,private profileService:UpdateProfileService) { }

  ngOnInit(): void {
    this.fetchAndBindProfile();
  }

  logOut(){
    this.authService.logout();
    this.router.navigate(['login']);
  }
  updateProfile(){
    this.router.navigate(['updateprofile']);
  }

  fetchAndBindProfile(){
    this.profileService.getProfileDetail().subscribe((response: any) =>{
      this.profileDetail = response.user_profile
      this.education = this.profileDetail.education;
      this.workExperiences = this.profileDetail.work_experiences;
      this.userSkills = this.profileDetail.skills;
    });
  }
  getCvFileLink(){
    return environment.baseStorageUrl+this.profileDetail.cv_file_url;
  }
}
