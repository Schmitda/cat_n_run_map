import {
    ModuleWithProviders, NgModule,
    Optional, SkipSelf
}       from '@angular/core';
import {CommonModule}      from '@angular/common';
import {UserService} from "./user-service.service";
import {MyNavComponent} from "./my-nav.component";

@NgModule({
    imports: [CommonModule],
    declarations: [MyNavComponent],
    exports: [MyNavComponent],
    providers: [UserService]
})
export class CoreModule {
}