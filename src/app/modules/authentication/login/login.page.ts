import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { LoginModel } from '../../../models/login.model';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  form: FormGroup;
  @ViewChild('loginForm', { static: true }) loginForm: HTMLFormElement;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onLogin(form: NgForm) {
    console.log(form);
    const data: LoginModel = {
      email: form.value.email,
      password: form.value.password
    };

    this.authService.login(data).subscribe(
      result => {
        console.log(result);
      },
      error => {
        this.form.setErrors({ invalidCredentiales: true });
      }
    );
  }
}
