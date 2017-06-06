import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent }  from './app.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { EmployeeListComponent }  from './employee-list.component';
import { EmployeeDetailComponent }  from './employee-detail.component';
import { DepartmentComponent } from './department.component';
import { DepartmentDetailComponent } from './department-detail.component';
import { LogComponent } from './log.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,  // <-- import the FormsModule before binding with [(ngModel)]
      AppRoutingModule
  ],
  declarations: [
      AppComponent,
      HeroDetailComponent,
      EmployeeListComponent,
      EmployeeDetailComponent,
      DepartmentComponent,
      DepartmentDetailComponent,
      LogComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
