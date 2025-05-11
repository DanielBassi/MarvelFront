import { Routes } from '@angular/router';
import { authGuard } from './core/guards/authGuard';

export const routes: Routes = [
    {
        path: 'comics',
        loadChildren: () => import('./pages/layout-master/layout-master.routes').then(mod => mod.routes),
        canActivate: [authGuard],
    },
    {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.routes').then(mod => mod.routes)
    },
    {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'comics'
    }
];
