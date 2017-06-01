import { Component } from '@angular/core';
import { Hero } from './hero';
/*import { News } from './news';*/
@Component({
  selector: 'my-app',
  template: `
      <h2>My Heroes</h2>
      <ul class="heroes">
          <li *ngFor="let hero of heroes" (click)="onSelect()">
              <span class="badge">{{hero.id}}</span>{{hero.name}}
          </li>
      </ul>
      <p>{{clickMessage}}</p>
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
    clickMessage = '';
onSelect() {
    this.clickMessage = 'Clicked';
}
/*news: News = {
  id: 1,
  title: 'Climate changed'
};*/
/*myHero = this.heroes[0];*/ }
