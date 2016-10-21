import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
<div class="wrapper">
    <my-nav></my-nav>
    <div class="flex full-space">
    <router-outlet class=""></router-outlet>
    </div>
</div>
`,
})
export class AppComponent {
    title = 'Minimal NgModule Test';
}
