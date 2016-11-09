import {
    ModuleWithProviders, NgModule,
    Optional, SkipSelf
}       from '@angular/core';
import {CommonModule}      from '@angular/common';
import {UserService} from "./user-service.service";
import {MyNavComponent} from "./my-nav.component";
import {AuthGuard} from "../auth/auth.service";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [CommonModule, BrowserModule, HttpModule],
    declarations: [MyNavComponent],
    exports: [MyNavComponent],
    providers: [UserService, AuthGuard]
})
export class CoreModule {
}