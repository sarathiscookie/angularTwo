/**
 * Created by user on 05-06-2017.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // To navigate we need to use router service

import { Department } from './department';
import { DepartmentService } from './department.service';


@Component({
    selector: 'my-department',
    template: `
        <div class="col-md-6">
            <h1>Departments</h1>
            <div class="list-group col-md-6">
                <a (click)="onSelect(dep)" class="list-group-item" *ngFor="let dep of department"><span class="badge">{{dep.id}}</span>{{dep.name}}</a>
            </div>
        </div>
    `,
    providers: [DepartmentService]
})

export class DepartmentListComponent implements OnInit {
    department: Department[];
    constructor(
        private router: Router, // Using dependency injection to get an instance on it
        private departmentService: DepartmentService
    ) {}
    getDepartment(): void {
        this.departmentService.getDepartment().then(department => this.department = department);
    }
    ngOnInit(): void {
        this.getDepartment();
    }
    /* Navigation */
    onSelect(dep): void {
        this.router.navigate(['/departments', dep.id]);
    }
}

