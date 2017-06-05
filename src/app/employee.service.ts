import {Injectable} from '@angular/core';
/**
 * Created by user on 05-06-2017.
 */

@Injectable()
export class EmployeeService {
    getEmployee() {
        return [
            {'id': 1, 'name': 'Joo', 'gender': 'Male'},
            {'id': 2, 'name': 'Foo', 'gender': 'Female'},
        ];
    }
}
