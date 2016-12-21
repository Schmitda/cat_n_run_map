"use strict";
var router_1 = require('@angular/router');
var users_list_component_1 = require("./users-list.component");
var routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: users_list_component_1.UsersListComponent },
    { path: ':id', component: users_list_component_1.UsersListComponent }
];
exports.routing = router_1.RouterModule.forChild(routes);
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 
//# sourceMappingURL=users.routing.js.map