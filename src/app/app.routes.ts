import { Routes } from '@angular/router';
import { ObservableComponent } from './components/observable/observable.component';
import { ObservableFrioComponent } from './components/observable-frio/observable-frio.component';
import { ObservableCalienteComponent } from './components/observable-caliente/observable-caliente.component';
import { OperadoresComponent } from './components/operadores/operadores.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/observable',
        pathMatch: 'full'
    },
    {
        path: 'observable',
        component: ObservableComponent
    },
    {
        path: 'observable-frio',
        component: ObservableFrioComponent
    },
    {
        path: 'observable-caliente',
        component: ObservableCalienteComponent
    },
    {
        path: 'operadores',
        component: OperadoresComponent
    },
    {
        path: '**',
        redirectTo: '/observable',
        pathMatch: 'full'
    }
];
