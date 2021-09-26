import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/Services/jobservice';
import { Job } from 'src/app/types/job';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {
  faSearch=faSearch;

  constructor(private jobService:JobService,private router:Router) { }

  jobs:Job[] = [];
  query = "";
  ngOnInit(): void {
    this.getJobsAndBind();
  }

  editJob(job:Job){
    this.router.navigateByUrl('/editjob', { state:job });
  }
  getJobsAndBind(){
    this.jobService.getJobs(this.query).subscribe((response:any) => (
      this.jobs=response.jobs
    ));
  }

  onJobClicked(job: Job) {
    this.router.navigateByUrl('/showjob', { state: job });
  }
  onSearchJob(){
    this.getJobsAndBind();
  }

}
