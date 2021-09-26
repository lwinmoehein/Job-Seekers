import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { User } from './../../types/user';
import { Component, OnInit } from '@angular/core';
import { getUser } from 'src/app/constants/credentials';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user:User=getUser();
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
