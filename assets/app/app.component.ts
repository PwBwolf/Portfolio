import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES, Router, } from '@angular/router';
import {HeaderComponent} from "./header/header.component";

@Component({
    moduleId: module.id, //allows angular to identify the path to the template 
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [ROUTER_DIRECTIVES,  HeaderComponent]
 })
export class AppComponent {
    constructor(private router: Router){}

    isActiveRoute(route: string) {
        return this.router.url === route;
    }

}