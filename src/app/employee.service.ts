/**
 * Created by user on 05-06-2017.
 */
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Employees } from './employee';
/*import { EMPLOYEES } from './mock.employees';*/

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private _url: string = 'apidata/employeedata.json';
    constructor(private http: Http) { }
    /*getEmployee(): Promise<Employees[]> {
        return Promise.resolve(EMPLOYEES);
    }*/

    /* Angular method */
    getEmployee(): Promise<Employees[]> {
        return this.http.get(this._url)
                   .toPromise()
                   .then(response => response.json()/*.data*/ as Employees[])
                   .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    /* Video method */
    /*getEmployees() {
        return this.http.get(this._url).map((response: Response) => response.json());
    }*/
}
