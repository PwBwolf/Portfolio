import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'my-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent {
    //will be used to check if we are on the home page, want to hide for large background image
    isHomePage() {

    };
}