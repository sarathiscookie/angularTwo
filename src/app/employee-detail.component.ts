/**
 * Created by user on 05-06-2017.
 */

import {Component, OnInit} from '@angular/core';
import {EmployeeService} from './employee.service';
import {Employees} from './employee';

@Component({
    selector: '<employee-details></employee-details>',
    template: `
        <div class="col-md-6 pull-right">
            <h1>Employee Details</h1>
            <div class="list-group col-md-6">
                <a class="list-group-item" *ngFor="let employee of employees">{{employee.id}}.{{employee.name}}-{{employee.gender}}</a>
            </div>
        </div>
    `,
    providers: [EmployeeService]
})

export class EmployeeDetailComponent implements OnInit {
    employees: Employees [];
    constructor(private employeeService: EmployeeService) {}
    getEmployee(): void {
        this.employeeService.getEmployee().then(employees => this.employees = employees);
    }
    ngOnInit() {
        this.getEmployee();
    }

    /* Video method */
    /*employees = [];
    constructor(private employeeService: EmployeeService) {}
    ngOnInit(): void {
        this.employeeService.getEmployees().subscribe(resEmployeeData => this.employees = resEmployeeData);
    }*/
}

