"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hero_1 = require("./hero");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of heroes';
        this.heroes = [
            new hero_1.Hero(11, 'Mr. Nice'),
            new hero_1.Hero(12, 'Narco'),
            new hero_1.Hero(13, 'Bombasto'),
            new hero_1.Hero(14, 'Celeritas'),
            new hero_1.Hero(15, 'Magneta'),
            new hero_1.Hero(16, 'RubberMan'),
            new hero_1.Hero(17, 'Dynama'),
            new hero_1.Hero(18, 'Dr IQ'),
            new hero_1.Hero(19, 'Magma'),
            new hero_1.Hero(20, 'Tornado')
        ];
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n      <h2>My Heroes</h2>\n      <ul class=\"heroes\">\n          <li *ngFor=\"let hero of heroes\" (click)=\"onSelect(hero)\" [class.selected]=\"hero===selectedHero\">\n              <span class=\"badge\">{{hero.id}}</span>{{hero.name}}\n          </li>\n      </ul>\n      <div *ngIf=\"selectedHero\">\n          <h2>{{selectedHero.name}}</h2>\n          <div>\n              <label>id: </label>{{selectedHero.id}}\n          </div>\n          <div>\n              <label>name: </label>\n              <input [(ngModel)]=\"selectedHero.name\" placeholder=\"name\"/>\n          </div>\n      </div>\n  ",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map