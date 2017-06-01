import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-app',
  template: `
      <h2>My Heroes</h2>
      <ul class="heroes">
          <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero===selectedHero">
              <span class="badge">{{hero.id}}</span>{{hero.name}}
          </li>
      </ul>
      <hero-detail [hero]="selectedHero"></hero-detail>
  `,
})
export class AppComponent { title = 'Tour of heroes';
heroes = [
    new Hero(11, 'Mr. Nice'),
    new Hero(12, 'Narco'),
    new Hero(13, 'Bombasto'),
    new Hero(14, 'Celeritas'),
    new Hero(15, 'Magneta'),
    new Hero(16, 'RubberMan'),
    new Hero(17, 'Dynama'),
    new Hero(18, 'Dr IQ'),
    new Hero(19, 'Magma'),
    new Hero(20, 'Tornado')
    ];
selectedHero: Hero;
onSelect(hero: Hero): void {
    this.selectedHero = hero;
}
}
