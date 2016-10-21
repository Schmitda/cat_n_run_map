import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";

export const routes: Routes = [
    { path: '', /*component: AppComponent, redirectTo: 'users' ,*/ redirectTo: 'map', pathMatch: 'full'},
    { path: 'map', loadChildren: 'app/map/map.module#MapModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
