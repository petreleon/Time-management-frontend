import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RegisterData } from 'src/app/models/register-data.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      emailAddress: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {validator: this.matchingPasswords('password', 'confirmPassword')});
  }

  ngOnInit() {
  }

  onRegister(form: NgForm) {
    console.log(form);
    const data: RegisterData = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      userName: form.value.userName,
      emailAddress: form.value.emailAddress,
      password: form.value.password,
      confirmPassword: form.value.confirmPassword
    };

    this.authService.register(data).subscribe(result => {
      console.log(result);
    });
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): {[key: string]: any} => {
      const password = group.controls[passwordKey];
      const confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }
}
