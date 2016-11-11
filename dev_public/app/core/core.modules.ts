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
import {BackgroundService} from "../background/services/background.service";
import {ReactiveFormsModule} from "@angular/forms";
import {FileService} from "./services/file.service";

@NgModule({
    imports: [CommonModule, BrowserModule, HttpModule],
    declarations: [MyNavComponent],
    exports: [MyNavComponent, CommonModule, BrowserModule, HttpModule],
    providers: [UserService, AuthGuard, BackgroundService, FileService]
})
export class CoreModule {
}