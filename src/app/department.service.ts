/**
 * Created by user on 06-06-2017.
 */
import { Injectable } from '@angular/core';
import { Department } from './department';
import { DEPARTMENT } from './mock.department';

@Injectable()
export class DepartmentService {
    getDepartment(): Promise<Department[]> {
        return Promise.resolve(DEPARTMENT);
    }
}