import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {AuthGuard} from "./auth/auth.service";

export const routes: Routes = [
    { path: '', /*component: AppComponent, redirectTo: 'users' ,*/ redirectTo: 'map', pathMatch: 'full'},
    { path: 'map', loadChildren: 'app/map/map.module#MapModule', canActivate: [AuthGuard] },
    { path: 'background', loadChildren: 'app/elements/background/background.module#BackgroundModule'},
    { path: 'decoration', loadChildren: 'app/elements/decoration/decoration.module#DecorationModule'},
    { path: 'mapElement', loadChildren: 'app/elements/map-element/map-element.module#MapElementModule'},
    { path: 'character', loadChildren: 'app/elements/character/character.module#CharacterModule'},
    { path: 'collectible', loadChildren: 'app/elements/collectible/collectible.module#CollectibleModule'},
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
