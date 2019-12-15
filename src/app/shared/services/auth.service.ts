import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from 'src/app/models/login.model';
import { RegisterModel } from 'src/app/models/register.model';
import { environment } from 'src/environments/environment';
import { ChangePasswordModel } from 'src/app/models/change-password.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
    constructor(private http: HttpClient) {}

    public login(data: LoginModel): Observable<object> {
      return this.http.post(
        `${environment.url}api/auth/login`,
        data,
        {observe: 'response'}
      ).pipe(
        map(response => {
          return response;
      }));
    }

    public register(data: RegisterModel): Observable<object> {
      return this.http.post(
        `${environment.url}api/auth/register`,
        data,
        {observe: 'response'}
      ).pipe(
        map(response => {
          return response;
      }));
    }

    public changePassword(data: ChangePasswordModel): Observable<object> {
      return this.http.post(
        `${environment.url}api/auth/change-password`,
        data,
        {observe: 'response'}
      ).pipe(
        map(response => {
          return response;
      }));
    }
}