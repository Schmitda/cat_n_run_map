import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1><br>
    <a routerLink="users">Link</a>
    <router-outlet></router-outlet>
`,
})
export class AppComponent {
    title = 'Minimal NgModule Test';
}
