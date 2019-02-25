import { NgModule } from '@angular/core';
import { LoginComponent } from '../pages/login/login.component'
import { Routes, RouterModule } from '@angular/router';

const ROOT_ROUTES: Routes = [
  {path:'', loadChildren: '../pages/application/application.module#ApplicationModule' }, 
  {path:'login', component: LoginComponent },
  {path:'**', redirectTo:'/login'}

];

@NgModule({
  imports: [RouterModule.forRoot(ROOT_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
