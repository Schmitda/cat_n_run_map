"use strict";
var router_1 = require('@angular/router');
var auth_service_1 = require("./auth/auth.service");
exports.routes = [
    { path: '', redirectTo: 'map', pathMatch: 'full' },
    { path: 'map', loadChildren: 'app/map/map.module#MapModule', canActivate: [auth_service_1.AuthGuard] },
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routing.js.map