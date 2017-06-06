/**
 * Created by user on 06-06-2017.
 */
import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'; // We need to extract the url parameter using this service

@Component({
    /*selector: 'my-department',*/
    template: `
        <h3>Selected department id = {{departmentID}}</h3>
        <a (click)="goPrevious()" class="btn btn-default">Previous</a>
        <a (click)="goNext()" class="btn btn-default">Next</a>
    `
})

export class DepartmentDetailComponent implements OnInit {
    public departmentID;
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}
    /*ngOnInit(): void {
        let id = this.router.snapshot.params['id']; // snapshot: It used to take the present url eg: http://192.168.10.10:3000/departments/5
        this.departmentID = id;
    }*/
    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            let id = parseInt(params['id'], 10); // lint warning: parseInt missing radix parameter; TO solve this warning use 2 arguments "parseInt(dateParts[0],10)". 10 indicates decimal.
            this.departmentID = id;
        });
    }
    goPrevious(): void {
        let previousId = this.departmentID - 1;
        this.router.navigate(['/departments', previousId]);
    }
    goNext(): void {
        let nextId = this.departmentID + 1;
        this.router.navigate(['/departments', nextId]);
    }
}
