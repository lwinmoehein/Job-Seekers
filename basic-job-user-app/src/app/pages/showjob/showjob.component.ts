import { User } from 'src/app/types/user';
import { Job } from './../../types/job';
import { Router, ActivatedRoute } from '@angular/router';
import { JobService } from './../../Services/jobservice';
import { Component, OnInit } from '@angular/core';
import { getUser } from 'src/app/constants/credentials';

@Component({
  selector: 'app-showjob',
  templateUrl: './showjob.component.html',
  styleUrls: ['./showjob.component.scss']
})
export class ShowjobComponent implements OnInit {
  currentJob: Job = {};
  jobInfo:any = {};
  applicants:any[]=[];
  isAlreadyApplied:boolean=true;
  user:User = getUser();

  constructor(private jobService: JobService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.currentJob = history.state;
    this.jobService.getJobInfo(this.currentJob).subscribe((response: any) => {
      this.jobInfo = response.job;
      this.applicants = this.jobInfo.applicants;

      this.isAlreadyApplied = this.applicants.filter(u=>u.id==this.user.id).length!=0;
    });
  }

  onJobApply() {
    this.jobService.applyJob(this.currentJob).subscribe((responseData) => {
      alert('You applied this job');
      this.router.navigate([''])
    });
  }

}
