import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginData } from '../../models/login-data.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  @ViewChild('loginForm', { static: true }) loginForm: HTMLFormElement;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    console.log(form);
    const data: LoginData = {
      userName: form.value.userName,
      password: form.value.password
    };

    this.authService.login(data).subscribe(result => {
      console.log(result);
    }, (error) => {
      this.form.setErrors({invalidCredentiales: true});
    });
  }
}
