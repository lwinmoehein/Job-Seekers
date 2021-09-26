import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiPaths } from 'src/environments/environment';
import { environment } from 'src/environments/environment';
import { getLoggedInHeaders } from '../constants/credentials';
import { Job } from '../types/job';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  // Uses http.get() to load data from a single API endpoint
  getJobs(query:string) {
    return this.http.post(environment.baseUrl + ApiPaths.JOB_LIST,{"q":query},getLoggedInHeaders());
  }

  createJob(job:Job){
    return this.http.post(environment.baseUrl + ApiPaths.JOB,job,getLoggedInHeaders());
  }

  editJob(job:Job){
    return this.http.put(environment.baseUrl + ApiPaths.JOB+`\\${job.id}`,job,getLoggedInHeaders());
  }


  getJobInfo(job:Job){
    return this.http.get(environment.baseUrl + ApiPaths.JOB+`\\${job.id}`,getLoggedInHeaders());
  }

}
