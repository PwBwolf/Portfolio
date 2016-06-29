import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import { CollapseDirective } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'my-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css'],
    directives: [ROUTER_DIRECTIVES, CollapseDirective]
})
export class HeaderComponent {
    public isCollapsed:boolean = true;
}