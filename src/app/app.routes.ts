import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path:'',
    loadComponent:()=> import('./module/auth/auth/auth.component').then(m=>m.AuthComponent)
}
];
