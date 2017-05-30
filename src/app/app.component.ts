import { Component } from '@angular/core';
import { Hero } from './hero';
import { News } from './news';
@Component({
  selector: 'my-app',
  template: `
      <h1>{{title}}</h1>
      <h2>My favorite hero is: {{myHero.name}}</h2>
      <p>Heroes:</p>
      <ul>
          <li *ngFor="let hero of heroes"> {{hero.name}} </li>
      </ul>
      <p *ngIf="heroes.length > 3">There are many heroes</p>
      <p class="text-success"> {{news.title}} </p>
  `,
})
export class AppComponent { title = 'Tour of heroes';
heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(2, 'Bombasto'),
    new Hero(3, 'Magneta'),
    new Hero(4, 'Tornado')
    ];
news: News = {
  id: 1,
  title: 'Climate changed'
};
myHero = this.heroes[0]; }
