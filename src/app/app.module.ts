import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http'; // Import http module

import { AppComponent }  from './app.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';

import { EmployeeListComponent }  from './employee-list.component';
import { EmployeeDetailComponent }  from './employee-detail.component';
import { DepartmentListComponent } from './department-list.component';
import { DepartmentDetailComponent } from './department-detail.component';
import { LogComponent } from './log.component';
import { PageNotFoundComponent } from './page-not-found.component';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
/*import { InMemoryWebApiModule } from 'angular-in-memory-web-api';*/
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,  // <-- import the FormsModule before binding with [(ngModel)]
      HttpModule,  // Add module
      /*InMemoryWebApiModule.forRoot(InMemoryDataService),*/
      AppRoutingModule
  ],
  declarations: [
      AppComponent,
      HeroDetailComponent,
      HeroesComponent,
      DashboardComponent,
      EmployeeListComponent,
      EmployeeDetailComponent,
      DepartmentListComponent,
      DepartmentDetailComponent,
      LogComponent,
      PageNotFoundComponent
  ],
  providers: [
      HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
