import { UpdateProfileService } from './../../Services/update-profile.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { formatDate } from 'src/app/constants/date';
import { toBase64 } from 'src/app/constants/file';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  cv_file:any ;
  profileDetail :any = {};
  education:any[] = [];
  workExperiences:any[] = [];
  allSkills:any[] = [];
  selectedSkillIds:number[]=[];
  constructor(private profileService:UpdateProfileService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.fetchAndBindProfile();
  }

  fetchAndBindProfile(){
    this.profileService.getAllSkills().subscribe((response: any) =>{
      this.allSkills=response
    });
    this.profileService.getProfileDetail().subscribe((response: any) =>{
      this.profileDetail = response.user_profile
      this.education = this.profileDetail.education;
      this.workExperiences = this.profileDetail.work_experiences;
    });
  }

  updateSkills(){
    const selectedSkillIds = this.allSkills.map(skill=>{
      if(skill.hasSkill) return skill.id;
    }).filter(id=>id!=undefined);
    this.profileService.updateSkills(selectedSkillIds).subscribe((responseData) => {
      this.fetchAndBindProfile();
      alert('updated skill list');
    });
  }

  getCvFileLink(){
    return environment.baseStorageUrl+this.profileDetail.cv_file_url;
  }

  async updateUserDetail(){

    let userDetail:any = {
      mobile_number:this.profileDetail.mobile_number,
      name:this.profileDetail.name
    };
    if(this.cv_file){
      if(this.cv_file.type!="application/pdf") return;
      let base64File:any =await toBase64(this.cv_file);
      userDetail.base64_cv_file = base64File.split(',')[1];
    }

    this.profileService.updateUserDetail(userDetail).subscribe((responseData:any) => {
      this.fetchAndBindProfile();
      alert('updated user information');
    });
  }


  deleteEducation(education:any){
    this.profileService.removeEducation(education).subscribe((responseData) => {
      this.fetchAndBindProfile();
      alert('removed education');
    });
  }

  deleteExperience(experience:any){
    this.profileService.removeExperience(experience).subscribe((responseData) => {
      this.fetchAndBindProfile();
      alert('removed work experience');
    });
  }

  addExperience(): void {
    let workExperience:WorkExperienceData = {
      job_title:"",
      company_name:"",
      started_date:"",
      industry_id:""
    };
    const dialogRef = this.dialog.open(AddWorkExperience, {
      width: '300px',
      data: workExperience
    });

    dialogRef.afterClosed().subscribe(result => {
      if(workExperience.job_title=="" || workExperience.company_name==""||workExperience.started_date==""|| workExperience.industry_id==""){
        alert("fill the form correctly");
        return;
      }
      workExperience.started_date=formatDate(workExperience.started_date);

      this.profileService.addExperience(workExperience).subscribe((responseData) => {
        this.fetchAndBindProfile();
      });
    });
  }
  addEducation(){
    let education:EducationData = {
      highest_level:"",
      school_name:"",
      completed_date:"",
    };
    const dialogRef = this.dialog.open(AddEducation, {
      width: '300px',
      data: education
    });

    dialogRef.afterClosed().subscribe(result => {
      if(education.highest_level=="" || education.school_name==""||education.completed_date==""){
        alert("fill the form correctly");
        return;
      }
      education.completed_date=formatDate(education.completed_date);
      this.profileService.addEducation(education).subscribe((responseData) => {
        this.fetchAndBindProfile();
      });
    });
  }

}

export interface WorkExperienceData {
   job_title:string,
   company_name:string,
   started_date:any,
   industry_id:string
}

export interface EducationData {
  highest_level:string,
  school_name:string,
  completed_date:any,
}

@Component({
  selector: 'add-work-experience-dialog',
  templateUrl: 'add-work-experience-dialog.html',
})

export class AddWorkExperience {

  constructor(
    public dialogRef: MatDialogRef<UpdateProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public experience: WorkExperienceData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    this.dialogRef.close();
  }

}


@Component({
  selector: 'add-education-dialog',
  templateUrl: 'add-education-dialog.html',
})

export class AddEducation {

  constructor(
    public dialogRef: MatDialogRef<UpdateProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public education: EducationData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    this.dialogRef.close();
  }

}

