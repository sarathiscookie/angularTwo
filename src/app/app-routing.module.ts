/**
 * Created by user on 05-06-2017.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';

import { DepartmentListComponent } from './department-list.component';
import { DepartmentDetailComponent } from './department-detail.component';
import { LogComponent } from './log.component';

const routes: Routes = [
    { path: 'departments', component: DepartmentListComponent },
    { path: 'logs', component: LogComponent },
    { path: 'departments/:id', component: DepartmentDetailComponent }, // passing parameter department id
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
