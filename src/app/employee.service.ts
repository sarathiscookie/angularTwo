/**
 * Created by user on 05-06-2017.
 */
import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Employees } from './employee';
import { EMPLOYEES } from './mock.employees';

@Injectable()
export class EmployeeService {
    constructor(private http: Http) { }
    getEmployee(): Promise<Employees[]> {
        return Promise.resolve(EMPLOYEES);
    }
}
