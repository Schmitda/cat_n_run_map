import {
    ModuleWithProviders, NgModule,
    Optional, SkipSelf
}       from '@angular/core';
import {CommonModule}      from '@angular/common';
import {UserService} from "./services/user-service.service";
import {MyNavComponent} from "./my-nav.component";
import {AuthGuard} from "../auth/auth.service";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {BackgroundService} from "../elements/background/services/background.service";
import {ReactiveFormsModule} from "@angular/forms";
import {FileService} from "./services/file.service";
import {FormGenerator} from "../shared/form-generator.service";

@NgModule({
    imports: [CommonModule, BrowserModule, HttpModule, ReactiveFormsModule],
    declarations: [MyNavComponent],
    exports: [MyNavComponent, CommonModule, BrowserModule, HttpModule],
    providers: [UserService, AuthGuard, BackgroundService, FileService, FormGenerator]
})
export class CoreModule {
}