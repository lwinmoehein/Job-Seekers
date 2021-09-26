import { RegisterForm } from './../../types/auth';
import { Router } from '@angular/router';
import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name = '';
  email = '';
  password = '';
  password_confirmation = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  onRegister() {
    if (this.password !== this.password_confirmation) {
      alert('passwords must match');
      return;
    }
    let registerForm: RegisterForm = {
      name: this.name,
      email: this.email,
      password: this.password,
      password_confirmation: this.password_confirmation
    };
    this.authService.register(registerForm).subscribe((responseData) => {
      this.router.navigate(['login'])
    });
  }
  onLogin(){
    this.router.navigate(['login'])
  }


}
