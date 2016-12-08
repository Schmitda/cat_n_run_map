import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
<div class="wrapper">
    <my-nav></my-nav>
    <div class="flex full-space">
    <router-outlet></router-outlet>
    </div>
    <element-context-menu-modal></element-context-menu-modal>
    <map-load-modal></map-load-modal>
    <map-save-modal></map-save-modal>
    <overlay-component></overlay-component>
</div>
`,
})
export class AppComponent {
    title = 'Minimal NgModule Test';
}
