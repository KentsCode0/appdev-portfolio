import { Routes } from '@angular/router';
import { NavigationBarComponent } from './shared/navigation-bar/navigation-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: "full",
        redirectTo: "home"
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "navbar",
        component: NavigationBarComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "services",
        component: ServicesComponent
    },
    {
        path: "contact",
        component: ContactComponent
    }
];
