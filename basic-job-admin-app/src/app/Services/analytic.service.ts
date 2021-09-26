import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment,ApiPaths } from 'src/environments/environment';
import { getLoggedInHeaders } from '../constants/credentials';


@Injectable({
  providedIn: 'root'
})
export class AnalyticService {

  constructor(private http:HttpClient) { }

  getAnalytics() {
    return this.http.get(environment.baseUrl + ApiPaths.ANALYTICS,getLoggedInHeaders());
  }
}
