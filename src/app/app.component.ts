import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <h2>{{ title }}</h2>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <router-outlet></router-outlet>
      <!--<div class="row col-md-12">
          <employee-list></employee-list>
          <employee-details></employee-details>
      </div>
      <div class="row col-md-12">
          <nav>
              <a class="btn btn-default" routerLink="/departments" routerLinkActive="active">Departments</a>
              <a class="btn btn-default" routerLink="/logs" routerLinkActive="active">Logs</a>
          </nav>
          <router-outlet></router-outlet>
      </div>-->
  `,
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
    title = 'Tour of heroes';
}
