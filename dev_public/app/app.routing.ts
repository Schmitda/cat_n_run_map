import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";

export const routes: Routes = [
    { path: '', /*component: AppComponent, redirectTo: 'users' ,*/ redirectTo: 'users', pathMatch: 'full'},
    { path: 'users', loadChildren: 'app/users/users.module#UsersModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
