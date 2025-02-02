import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ViewComponent } from './pages/view/view.component';

export const routes: Routes = [

    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"register",
        component:RegisterComponent
    },
    {
        path:"view",
        component:ViewComponent
    },
    {
        path:"",
        component:HomeComponent
    }
];
