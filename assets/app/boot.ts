///<reference path="../../typings.d.ts" />
//import the bootstrap for angular
import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS
])
    .catch(err => console.error(err));