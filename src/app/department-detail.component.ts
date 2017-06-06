/**
 * Created by user on 06-06-2017.
 */
import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // We need to extract the url parameter using this service

@Component({
    /*selector: 'my-department',*/
    template: `
        <h3>Selected department id = {{departmentID}}</h3>
    `
})

export class DepartmentDetailComponent implements OnInit {
    public departmentID;
    constructor(private router: ActivatedRoute) {}
    ngOnInit(): void {
        let id = this.router.snapshot.params['id']; // snapshot: It used to take the present url eg: http://192.168.10.10:3000/departments/5
        this.departmentID = id;
    }
}
