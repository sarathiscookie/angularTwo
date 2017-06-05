/**
 * Created by user on 05-06-2017.
 */
import { Injectable } from '@angular/core';
import { Employees } from './employee';
import { EMPLOYEES } from './mock.employees';

@Injectable()
export class EmployeeService {
    getEmployee(): Promise<Employees[]> {
        return Promise.resolve(EMPLOYEES);
    }
}
