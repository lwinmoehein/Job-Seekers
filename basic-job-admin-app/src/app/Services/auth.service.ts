import { catchError } from 'rxjs/operators';
import { LoginForm } from './../types/auth';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiPaths } from 'src/environments/environment';
import { environment } from 'src/environments/environment';
import { getHeaders,getToken ,storeUser,logOutUser, getLoggedInHeaders} from '../constants/credentials';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private jwtHelper:JwtHelperService) { }

  public isAuthenticated(): boolean {
    const token = getToken();
    return !this.jwtHelper.isTokenExpired(token);
  }

  login(data:LoginForm){
    console.log('loginform',data);
    return this.http.post(environment.baseUrl + ApiPaths.LOGIN,data,getHeaders()).pipe(
      catchError(this.handleError)
    );
  }

  logout(){
    logOutUser();
  }

  storeUser(user:any){
    storeUser(user);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      alert("something is wrong with your network")
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      alert("Please check your fill the forms correctly")
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
  getProfileDetail(selectedUser:any){
    return this.http.post(environment.baseUrl + ApiPaths.PROFILE,{'user_id':selectedUser.id},getLoggedInHeaders());
  }

}
