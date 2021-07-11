import { UserService } from './../../services/user.service';
import { LoginValidation } from './../../form-validations/login-validation';
import { LoginModel } from './../../models/login-model';
import { UserData } from './../../models/user-data';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;

  constructor(private router: Router, private authService: AuthService, public loginValidation: LoginValidation,
              public toastr: ToastrService, public userService: UserService) {
    this.loginForm = loginValidation.ValidateLoginForm();
  }

  ngOnInit(): void {
  }

  get f() {return this.loginForm.controls; }

  login() {
    this.loading = true;
    this.authService.login(this.f.username.value,  this.f.password.value)
    .subscribe(user => {
      this.loading = false;
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.userService.SetCurrentUser = user.resultData.fullName;
      this.router.navigateByUrl('app/profile');
    }, error => {
      this.loading = false;
      this.toastr.error('Username or Password incorrect');
    });
  }
}
