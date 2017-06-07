/**
 * Created by user on 05-06-2017.
 */
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employees } from './employee';

@Component({
    selector: '<employee-list></employee-list>',
    template: `
        <div class="col-md-6 pull-left">
            <h1>Employee List</h1>
            <div class="list-group col-md-6">
                <a class="list-group-item" *ngFor="let employee of employees">{{employee.name}}</a>
            </div>
        </div>
    `,
    providers: [EmployeeService]
})

export class EmployeeListComponent implements OnInit {
    employees: Employees[];
    constructor(private employeeService: EmployeeService) {}
    getEmployee(): void {
        this.employeeService.getEmployee().then(employees => this.employees = employees);
    }
    ngOnInit(): void {
        this.getEmployee();
    }
}

