import { Routes } from '@angular/router';
import { ListarCuentas } from './cuentas/listar-cuentas/listar-cuentas';

export const routes: Routes = [
    {
        path: '/cuentas',
        component: ListarCuentas
    },
    {
        path: '',
        redirectTo: '/cuentas',
        pathMatch: 'full'
    }
];
