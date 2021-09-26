import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { User } from '../../types/user';
import { Component, OnInit } from '@angular/core';
import { getUser } from 'src/app/constants/credentials';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'applicant-profile',
  templateUrl: './applicant-profile.component.html',
  styleUrls: ['./applicant-profile.component.scss']
})
export class ApplicantProfileComponent implements OnInit {
  cv_file:any ;
  profileDetail :any = {};
  education:any[] = [];
  workExperiences:any[] = [];
  userSkills:any[] = [];
  selectedUser:any = {};

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.selectedUser = history.state;
    this.fetchAndBindProfile();
  }


  fetchAndBindProfile(){
    this.authService.getProfileDetail(this.selectedUser).subscribe((response: any) =>{
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
