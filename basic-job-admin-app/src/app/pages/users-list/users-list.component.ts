import { JobUserService } from './../../Services/job-user.service';
import { Component, OnInit } from '@angular/core';
import { JobUser } from 'src/app/types/jobuser';
import { Router } from '@angular/router';
import {  faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  jobUsers:any[]=[];
  faSearch=faSearch;
  query = "";
  constructor(private jobUserService:JobUserService,private router:Router) { }

  ngOnInit(): void {
    this.getUsersAndBind();
  }
  getUsersAndBind(){
    this.jobUserService.getJobUsers(this.query).subscribe((response:any) => (
      this.jobUsers=response.user_profiles
    ));
  }
  onApplicantClick(applicant:any){
    this.router.navigateByUrl('/applicantprofile', { state: applicant });
  }
  onSearchUser(){
    this.getUsersAndBind();
  }



}
