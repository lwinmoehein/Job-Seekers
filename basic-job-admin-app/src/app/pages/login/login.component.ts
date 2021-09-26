import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { LoginForm } from 'src/app/types/auth';
import { User } from 'src/app/types/user';
import { storeUser } from 'src/app/constants/credentials';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  constructor(private authService : AuthService,private router:Router) { }

  ngOnInit(): void {
    this.email='';
    this.password='';
  }

  onLogin(){
    let login:LoginForm = {
      email:this.email,
      password:this.password
    };

    console.log(login);
    this.authService.login(login).subscribe((responseData) => {
      this.authService.storeUser((responseData as any).user);
      this.router.navigate(['']);
    });

  }


}
