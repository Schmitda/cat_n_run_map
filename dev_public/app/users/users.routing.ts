import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersListComponent} from "./users-list.component";


const routes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: UsersListComponent},
    {path: ':id', component: UsersListComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */