/**
 * Created by user on 05-06-2017.
 */
import {Component} from '@angular/core';

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

export class EmployeeListComponent {
    employees = [
        {'id': 1, 'name': 'Joo', 'gender': 'Male'},
        {'id': 2, 'name': 'Foo', 'gender': 'Female'},
    ];
}

