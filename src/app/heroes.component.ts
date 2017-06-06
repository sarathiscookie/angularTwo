/**
 * Created by user on 06-06-2017.
 */
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
    selector: 'my-heroes',
    template: `
        <ul class="heroes">
            <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero===selectedHero">
                <span class="badge">{{hero.id}}</span>{{hero.name}}
            </li>
        </ul>
        <hero-detail [hero]="selectedHero"></hero-detail>
    `
})

export class HeroesComponent implements OnInit {
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
