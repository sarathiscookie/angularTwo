import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-app',
  template: `
      <h2>{{ title }}</h2>
      <ul class="heroes">
          <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero===selectedHero">
              <span class="badge">{{hero.id}}</span>{{hero.name}}
          </li>
      </ul>
      <hero-detail [hero]="selectedHero"></hero-detail>
      <div class="row col-md-12">
          <employee-list></employee-list>
          <employee-details></employee-details>
      </div>
      <div class="row col-md-12">
          <nav>
              <a class="btn btn-default" routerLink="/departments" routerLinkActive="active">Departments</a>
              <a class="btn btn-default" routerLink="/logs" routerLinkActive="active">Logs</a>
          </nav>
          <router-outlet></router-outlet>
      </div>
  `,
    providers: [HeroService]
})

export class AppComponent implements OnInit {
    title = 'Tour of heroes';
    heroes: Hero[];
    selectedHero: Hero;
constructor(private heroService: HeroService) {}

getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
}

ngOnInit(): void {
    this.getHeroes();
}

onSelect(hero: Hero): void {
    this.selectedHero = hero;
}

}
