import {NgModule} from "@angular/core";
import {routing} from "./users.routing";
import {UsersListComponent} from "./users-list.component";

@NgModule({
    imports: [routing],
    exports: [],
    declarations: [UsersListComponent],
    providers: []
})

export class UsersModule{}