import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment,ApiPaths } from 'src/environments/environment';
import { getLoggedInHeaders } from '../constants/credentials';


@Injectable({
  providedIn: 'root'
})
export class JobUserService {

  constructor(private http:HttpClient) { }

  getJobUsers(q:string) {
    return this.http.post(environment.baseUrl + ApiPaths.JOB_USERS_LIST,{"q":q},getLoggedInHeaders());
  }
}
