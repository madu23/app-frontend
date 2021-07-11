import { RegisterService } from './../../services/register.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterValidation } from 'src/app/form-validations/register-validation';
import { Register } from 'src/app/models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loading = false;
  registerForm: FormGroup;
  model: Register;
  constructor(public formValidation: RegisterValidation, public toastr: ToastrService, public registerSvc: RegisterService) {
    this.registerForm = formValidation.ValidateRegisterForm();
   }

  ngOnInit(): void {
  }

  get f() { return this.registerForm.controls; }

  register(): void {
    this.loading = true;
    this.model = Object.assign({}, this.registerForm.value);
    this.registerSvc.create(this.model).subscribe(response => {
      this.loading = false;
      this.toastr.success(response.message);
      this.registerForm.reset();
    }, error => {
      this.loading = false;
      this.toastr.error(error.message);
    });
  }
}
