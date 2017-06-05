/**
 * Created by user on 05-06-2017.
 */

import {Component, OnInit} from '@angular/core';
import {EmployeeService} from './employee.service';

@Component({
    selector: '<employee-details></employee-details>',
    template: `
        <div class="col-md-6 pull-right">
            <h1>Employee Details</h1>
            <div class="list-group col-md-6">
                <a href="#" class="list-group-item" *ngFor="let employee of employees">{{employee.id}}.{{employee.name}}-{{employee.gender}}</a>
            </div>
        </div>
    `
})

export class EmployeeDetailComponent implements OnInit {
    employees = [];
    constructor(private _employeeService: EmployeeService) {}
    ngOnInit() {
        this.employees = this._employeeService.getEmployee();
    }
}

