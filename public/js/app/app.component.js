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
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var AppComponent = (function () {
    function AppComponent() {
        this.alerts = [
            {
                type: 'danger',
                msg: 'Oh snap! Change a few things up and try submitting again.'
            },
            {
                type: 'success',
                msg: 'Well done! You successfully read this important alert message.',
                closable: true
            }
        ];
    }
    AppComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    AppComponent.prototype.addAlert = function () {
        this.alerts.push({ msg: 'Another alert!', type: 'warning', closable: true });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            directives: [ng2_bootstrap_1.AlertComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyw4QkFBK0IsNkJBQTZCLENBQUMsQ0FBQTtBQU83RDtJQUFBO1FBQ1csV0FBTSxHQUFpQjtZQUMxQjtnQkFDSSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxHQUFHLEVBQUUsMkRBQTJEO2FBQ25FO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsR0FBRyxFQUFFLGdFQUFnRTtnQkFDckUsUUFBUSxFQUFFLElBQUk7YUFDakI7U0FDSixDQUFDO0lBU04sQ0FBQztJQVBVLGlDQUFVLEdBQWpCLFVBQWtCLENBQVE7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTSwrQkFBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBekJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFVBQVUsRUFBRSxDQUFDLDhCQUFjLENBQUM7U0FDOUIsQ0FBQzs7b0JBQUE7SUFxQkgsbUJBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBcEJZLG9CQUFZLGVBb0J4QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGVydENvbXBvbmVudCB9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLCAvL2FsbG93cyBhbmd1bGFyIHRvIGlkZW50aWZ5IHRoZSBwYXRoIHRvIHRoZSB0ZW1wbGF0ZSBcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtBbGVydENvbXBvbmVudF1cbiB9KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgcHVibGljIGFsZXJ0czpBcnJheTxPYmplY3Q+ID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgIG1zZzogJ09oIHNuYXAhIENoYW5nZSBhIGZldyB0aGluZ3MgdXAgYW5kIHRyeSBzdWJtaXR0aW5nIGFnYWluLidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgbXNnOiAnV2VsbCBkb25lISBZb3Ugc3VjY2Vzc2Z1bGx5IHJlYWQgdGhpcyBpbXBvcnRhbnQgYWxlcnQgbWVzc2FnZS4nLFxuICAgICAgICAgICAgY2xvc2FibGU6IHRydWVcbiAgICAgICAgfVxuICAgIF07XG5cbiAgICBwdWJsaWMgY2xvc2VBbGVydChpOm51bWJlcik6dm9pZCB7XG4gICAgICAgIHRoaXMuYWxlcnRzLnNwbGljZShpLCAxKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkQWxlcnQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5hbGVydHMucHVzaCh7bXNnOiAnQW5vdGhlciBhbGVydCEnLCB0eXBlOiAnd2FybmluZycsIGNsb3NhYmxlOiB0cnVlfSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
