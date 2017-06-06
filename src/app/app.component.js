"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of heroes';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n      <h2>{{ title }}</h2>\n      <a routerLink=\"/dashboard\">Dashboard</a>\n      <a routerLink=\"/heroes\">Heroes</a>\n      <div class=\"row col-md-12\">\n          <employee-list></employee-list>\n          <employee-details></employee-details>\n      </div>\n      <div class=\"row col-md-12\">\n          <nav>\n              <a class=\"btn btn-default\" routerLink=\"/departments\" routerLinkActive=\"active\">Departments</a>\n              <a class=\"btn btn-default\" routerLink=\"/logs\" routerLinkActive=\"active\">Logs</a>\n          </nav>\n          <router-outlet></router-outlet>\n      </div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map