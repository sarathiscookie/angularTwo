/**
 * Created by user on 05-06-2017.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';

import { DepartmentComponent } from './department.component';
import { LogComponent } from './log.component';

const routes: Routes = [
    { path: 'departments', component: DepartmentComponent },
    { path: 'logs', component: LogComponent },
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
