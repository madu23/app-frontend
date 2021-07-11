import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginValidation {
    public LoginForm: FormGroup;
    constructor(public fb: FormBuilder) {
    }
    ValidateLoginForm() {
        this.LoginForm = this.fb.group({
            username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
        });
        return this.LoginForm;
    }
}
