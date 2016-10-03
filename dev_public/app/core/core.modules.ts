import {
    ModuleWithProviders, NgModule,
    Optional, SkipSelf }       from '@angular/core';
import { CommonModule }      from '@angular/common';
import {UserService} from "./user-service.service";

@NgModule({
    imports:      [ CommonModule ],
  /*  declarations: [ TitleComponent ],
    exports:      [ TitleComponent ],*/
    providers:    [ UserService ]
})
export class CoreModule {
}