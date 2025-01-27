import { Routes } from '@angular/router';
import { ObservableComponent } from './components/observable/observable.component';

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
        path: '**',
        redirectTo: '/observable',
        pathMatch: 'full'
    }
];
