/**
 * Created by user on 05-06-2017.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; // To navigate we need to use router service

import { Department } from './department';
import { DepartmentService } from './department.service';


@Component({
    selector: 'my-department',
    template: `
        <div class="col-md-6">
            <h1>Departments</h1>
            <div class="list-group col-md-6">
                <a (click)="onSelect(dep)" class="list-group-item" [class.selected]="isSelected(dep)" *ngFor="let dep of department"><span class="badge">{{dep.id}}</span>{{dep.name}}</a>
            </div>
        </div>
    `,
    providers: [DepartmentService]
})

export class DepartmentListComponent implements OnInit {
    public goToDepartmentsId;
    department: Department[];
    constructor(
        private router: Router, // Using dependency injection to get an instance on it
        private route: ActivatedRoute,
        private departmentService: DepartmentService
    ) {}
    getDepartment(): void {
        this.departmentService.getDepartment().then(department => this.department = department);
    }
    /* Functionality for getting id when we click on back button from department-details.component.ts */
    ngOnInit(): void {
        this.getDepartment();
        this.route.params.subscribe((params: Params) => {
            let id = parseInt(params['id'], 10); // params['id'] is the id from department-details.component.ts  {id: goToDepartmentsId}
            this.goToDepartmentsId = id;
        });
    }
    isSelected(dep) {
        return dep.id === this.goToDepartmentsId;
    }
    /* Navigation */
    onSelect(dep): void {
        this.router.navigate(['/departments', dep.id]);
    }
}

