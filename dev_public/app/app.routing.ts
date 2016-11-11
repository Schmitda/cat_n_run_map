import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {AuthGuard} from "./auth/auth.service";

export const routes: Routes = [
    { path: '', /*component: AppComponent, redirectTo: 'users' ,*/ redirectTo: 'map', pathMatch: 'full'},
    { path: 'map', loadChildren: 'app/map/map.module#MapModule', canActivate: [AuthGuard] },
    { path: 'background', loadChildren: 'app/background/background.module#BackgroundModule'},
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
