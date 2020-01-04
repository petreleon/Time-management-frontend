import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from '../services/auth.service';
import { APPROUTES } from 'src/app/app.routes.strings';

@Injectable({
    providedIn: "root"
})

export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    if (isAuthenticated === 'true') {
      this.router.navigate([`${APPROUTES.tabs}/${APPROUTES.task}`]);
      return false;
    }
    return true;
  }
}
