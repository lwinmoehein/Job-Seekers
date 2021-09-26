import { EducationData, WorkExperienceData } from './../pages/update-profile/update-profile.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiPaths } from 'src/environments/environment';
import { environment } from 'src/environments/environment';
import { getLoggedInHeaders } from '../constants/credentials';
import { toBase64 } from '../constants/file';
@Injectable({
  providedIn: 'root'
})
export class UpdateProfileService {

  constructor(private http:HttpClient ) {}

  getProfileDetail(){
      return this.http.get(environment.baseUrl + ApiPaths.PROFILE,getLoggedInHeaders());
  }

  removeExperience(experience:any){
    return this.http.delete(environment.baseUrl + ApiPaths.REMOVE_EXPERIENCE+experience.id, getLoggedInHeaders());
  }
  removeEducation(education:any){
    return this.http.delete(environment.baseUrl + ApiPaths.REMOVE_EDUATION+education.id, getLoggedInHeaders());
  }

  addExperience(exp:WorkExperienceData){
    return this.http.post(environment.baseUrl + ApiPaths.ADD_WORK_EXPERIENCE, exp, getLoggedInHeaders());
  }


  addEducation(edu:EducationData){
    return this.http.post(environment.baseUrl + ApiPaths.ADD_EDUCATION, edu, getLoggedInHeaders());
  }

  getAllSkills(){
    return this.http.get(environment.baseUrl + ApiPaths.SKILLS,getLoggedInHeaders());
  }

  updateSkills(skillIds:number[]){
    return this.http.post(environment.baseUrl + ApiPaths.UPDATE_SKILLS, {"skills":skillIds}, getLoggedInHeaders());
  }

  updateUserDetail(userDetail:any){
    return this.http.put(environment.baseUrl + ApiPaths.PROFILE,userDetail, getLoggedInHeaders());
  }

}
