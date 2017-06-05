/**
 * Created by user on 05-06-2017.
 */
import {Component, OnInit} from '@angular/core';
import {EmployeeService} from './employee.service';

@Component({
    selector: '<employee-list></employee-list>',
    template: `
        <div class="col-md-6 pull-left">
            <h1>Employee List</h1>
            <div class="list-group col-md-6">
                <a href="#" class="list-group-item" *ngFor="let employee of employees">{{employee.name}}</a>
            </div>
        </div>
    `
})

export class EmployeeListComponent implements OnInit {
    employees = [];
    constructor(private _employeeService: EmployeeService) {}
    ngOnInit() {
        this.employees = this._employeeService.getEmployee();
    }
}

