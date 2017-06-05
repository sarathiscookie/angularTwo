/**
 * Created by user on 05-06-2017.
 */

import {Component} from '@angular/core';

@Component({
    selector: '<employee-details></employee-details>',
    template: `
        <div class="col-md-6 pull-right">
            <h1>Employee Details</h1>
            <div class="list-group col-md-6">
                <a href="#" class="list-group-item" *ngFor="let employee of employees">{{employee.id}}-{{employee.gender}}</a>
            </div>
        </div>
    `
})

export class EmployeeDetailComponent {
    employees = [
        {'id': 1, 'name': 'Joo', 'gender': 'Male'},
        {'id': 2, 'name': 'Foo', 'gender': 'Female'},
    ];
}

