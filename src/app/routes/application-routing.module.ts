import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from '../pages/application/application.component';
import { RecursosComponent } from '../pages/application/recursos/recursos.component';

const PAGES_ROUTES: Routes = [
  
  { path:'', component: ApplicationComponent,
    children: [
      {path:'recursos', component: RecursosComponent}
    ]
  } 
];  

@NgModule({
  imports: [RouterModule.forChild(PAGES_ROUTES)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
