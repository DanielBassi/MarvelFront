import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from '../../feature/login/login.component';
import { RegisterComponent } from '../../feature/register/register.component';

export const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: '',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ]
    },
];
