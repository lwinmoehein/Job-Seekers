import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/Services/jobservice';
import { Job } from 'src/app/types/job';
@Component({
  selector: 'app-add-job-form',
  templateUrl: './add-job-form.component.html',
  styleUrls: ['./add-job-form.component.scss']
})
export class AddJobFormComponent implements OnInit {
  title = '';
  company_name = '';
  description = '';

  constructor(
    private jobService:JobService,private router:Router
  ) {   }

  ngOnInit(): void {
  }

  onJobAdd() {
    let job:Job = {
      title :this.title,
      company_name:this.company_name,
      description:this.description
    }
    this.jobService.createJob(job).subscribe((tasks) => {
      alert('New Job Added');
      this.router.navigate(['']);
    });
  }

}
