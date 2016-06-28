"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.isActiveRoute = function (route) {
        return this.router.url === route;
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, footer_component_1.FooterComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyx1QkFBMEMsaUJBQWlCLENBQUMsQ0FBQTtBQUM1RCxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQVExRDtJQUNJLHNCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFFLENBQUM7SUFFckMsb0NBQWEsR0FBYixVQUFjLEtBQWE7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQztJQUNyQyxDQUFDO0lBWEw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUcsa0NBQWUsRUFBRSxrQ0FBZSxDQUFDO1NBQ3BFLENBQUM7O29CQUFBO0lBUUgsbUJBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLG9CQUFZLGVBT3hCLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtIZWFkZXJDb21wb25lbnR9IGZyb20gXCIuL2hlYWRlci9oZWFkZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0Zvb3RlckNvbXBvbmVudH0gZnJvbSBcIi4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCwgLy9hbGxvd3MgYW5ndWxhciB0byBpZGVudGlmeSB0aGUgcGF0aCB0byB0aGUgdGVtcGxhdGUgXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsICBIZWFkZXJDb21wb25lbnQsIEZvb3RlckNvbXBvbmVudF1cbiB9KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcil7fVxuXG4gICAgaXNBY3RpdmVSb3V0ZShyb3V0ZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlci51cmwgPT09IHJvdXRlO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
