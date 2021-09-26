import { JobService } from 'src/app/Services/jobservice';
import { Job } from './../../types/job';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-job-form',
  templateUrl: './edit-job-form.component.html',
  styleUrls: ['./edit-job-form.component.scss']
})
export class EditJobFormComponent implements OnInit {

  currentJob:Job={};

  constructor(private jobService:JobService,private router:Router, private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.currentJob = history.state;
  }

  onJobEdit(){
    this.jobService.editJob(this.currentJob).subscribe((response) => {
      alert('job updated')
      this.router.navigate(['']);

    });
  }

}
