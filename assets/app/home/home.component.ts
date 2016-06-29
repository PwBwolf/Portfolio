import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import { CollapseDirective } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
    directives: [ROUTER_DIRECTIVES, CollapseDirective]
})

export class HomeComponent {
    public isCollapsed:boolean = true;
}