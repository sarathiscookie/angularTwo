/**
 * Created by user on 06-06-2017.
 */
import {Component, OnInit} from '@angular/core';

import {Department} from './department';
import {DepartmentService} from './department.service';


@Component({
    /*selector: 'my-department',*/
    template: `
        <div class="col-md-6">
            <h1>Departments Details with id = </h1>
            <!--<div class="list-group col-md-6">
                <a href="#" class="list-group-item" *ngFor="let dep of department">{{dep.description}}</a>
            </div>-->
        </div>
    `,
    providers: [DepartmentService]
})

export class DepartmentDetailComponent implements OnInit {
    department: Department[];
    constructor(private departmentService: DepartmentService) {}
    getDepartment(): void {
        this.departmentService.getDepartment().then(department => this.department = department);
    }
    ngOnInit(): void {
        this.getDepartment();
    }
}
