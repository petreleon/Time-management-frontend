import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/tabs/tabs.module#TabsPageModule'
  },
  // { path: 'home', loadChildren: () => import('./modules/home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './modules/authentication/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './modules/authentication/register/register.module#RegisterPageModule' },
  { path: 'forgot-password', loadChildren: './modules/authentication/forgot-password/forgot-password.module#ForgotPasswordModule' },
  { path: 'task', loadChildren: './modules/task/task.module#TaskPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
