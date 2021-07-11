import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class RegisterValidation {
    public LoginForm: FormGroup;
    constructor(public fb: FormBuilder) {
    }
    ValidateRegisterForm() {
        this.LoginForm = this.fb.group({
            fullname: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
            username: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.compose([Validators.required])],
        });
        return this.LoginForm;
    }
}
