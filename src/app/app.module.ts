import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent }  from './app.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { EmployeeListComponent }  from './employee-list.component';
import { EmployeeDetailComponent }  from './employee-detail.component';
import { DepartmentComponent } from './department.component';
import { LogComponent } from './log.component';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule  // <-- import the FormsModule before binding with [(ngModel)]
  ],
  declarations: [
      AppComponent,
      HeroDetailComponent,
      EmployeeListComponent,
      EmployeeDetailComponent,
      DepartmentComponent,
      LogComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
