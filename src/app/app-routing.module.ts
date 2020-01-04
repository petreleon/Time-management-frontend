import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './shared/guards/auth.guard';
import { APPROUTES } from './app.routes.strings';

const routes: Routes = [
  { 
    path: APPROUTES.login,
    loadChildren: './modules/authentication/login/login.module#LoginPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: '',
    loadChildren: './modules/tabs/tabs.module#TabsPageModule',
  },
  { 
    path: APPROUTES.register,
    loadChildren: './modules/authentication/register/register.module#RegisterPageModule',
    canActivate: [AuthGuardService] 
  },
  { 
    path: APPROUTES.forgot_password,
    loadChildren: './modules/authentication/forgot-password/forgot-password.module#ForgotPasswordModule',
    canActivate: [AuthGuardService]
  },
  {
    path: APPROUTES.change_password,
    loadChildren: './modules/authentication/change-password/change-password.module#ChangePasswordPageModule',
    canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
