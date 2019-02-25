import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';
import { ApplicationRoutingModule } from 'src/app/routes/application-routing.module';
import { RecursosComponent } from './recursos/recursos.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatNativeDateModule} from '@angular/material';

@NgModule({
  declarations: [
    ApplicationComponent,
    SidebarComponent,
    RecursosComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule
  ],
  providers:[
    MatDatepickerModule
  ]
})
export class ApplicationModule {}
