    import { provideRouter, RouterConfig } from '@angular/router';

    import {HomeComponent} from "./home/home.component";
    import {AboutComponent} from "./about/about.component";
    import {ContactComponent} from "./contact/contact.component";
    import {SkillsComponent} from "./skills/skills.component";

    export const routes: RouterConfig = [
        {path: '', component: HomeComponent},
        {path: 'about', component: AboutComponent},
        {path: 'contact', component: ContactComponent},
        {path: 'skills', component: SkillsComponent},
    ];

    export const APP_ROUTER_PROVIDERS = [
        provideRouter(routes)
    ];
