// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://127.0.0.1:8000/api',
  baseStorageUrl:'http://127.0.0.1:8000'
};

export enum ApiPaths {
  JOB = '/user/job',
  JOB_LIST = '/user/joblist',
  LOGIN = '/user/login',
  REGISTER = '/user/register',
  PROFILE= '/user/profile',
  SKILLS= '/user/skills',
  UPDATE_SKILLS= '/user/profile/updateSkills',
  REMOVE_EDUATION = '/user/profile/removeEducation/',
  REMOVE_EXPERIENCE = '/user/profile/removeWorkExperience/',
  ADD_WORK_EXPERIENCE = '/user/profile/addWorkExperience',
  ADD_EDUCATION = '/user/profile/addEducation'
}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
