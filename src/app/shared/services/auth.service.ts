import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoginData } from 'src/app/models/login-data.model';
import { RegisterData } from 'src/app/models/register-data.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
    constructor(private http: HttpClient) {}

    login(data: LoginData): Observable<any> {
        return this.http.post(
          `${environment.url}api/auth/login`,
          data,
          {observe: 'response'}
        ).pipe(
          map(response => {
            return response;
        }));
    }

    register(data: RegisterData) {
      return this.http.post(
        `${environment.url}api/auth/register`,
        data,
        {observe: 'response'}
      ).pipe(
        map(response => {
          return response;
      }));
    }
}