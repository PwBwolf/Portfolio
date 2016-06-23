import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    moduleId: module.id, //allows angular to identify the path to the template 
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [ROUTER_DIRECTIVES]
 })
export class AppComponent {

}