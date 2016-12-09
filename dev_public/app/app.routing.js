"use strict";
var router_1 = require('@angular/router');
var auth_service_1 = require("./auth/auth.service");
exports.routes = [
    { path: '', redirectTo: 'map', pathMatch: 'full' },
    { path: 'map', loadChildren: 'app/map/map.module#MapModule', canActivate: [auth_service_1.AuthGuard] },
    { path: 'background', loadChildren: 'app/elements/background/background.module#BackgroundModule' },
    { path: 'decoration', loadChildren: 'app/elements/decoration/decoration.module#DecorationModule' },
    { path: 'mapElement', loadChildren: 'app/elements/map-element/map-element.module#MapElementModule' },
    { path: 'character', loadChildren: 'app/elements/character/character.module#CharacterModule' },
    { path: 'collectible', loadChildren: 'app/elements/collectible/collectible.module#CollectibleModule' },
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routing.js.map