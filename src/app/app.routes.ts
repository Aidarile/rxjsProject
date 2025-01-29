import { Routes } from '@angular/router';
import { ObservableComponent } from './components/observable/observable.component';
import { ObservableFrioComponent } from './components/observable-frio/observable-frio.component';
import { ObservableCalienteComponent } from './components/observable-caliente/observable-caliente.component';
import { OperadoresComponent } from './components/operadores/operadores.component';
import { SwitchMapComponent } from './components/switch-map/switch-map.component';
import { SubjectComponent } from './components/subject/subject.component';
import { BehaviorSubject } from 'rxjs';
import { BehaviorSubjectComponent } from './components/behavior-subject/behavior-subject.component';
import { ForkJoinComponent } from './components/fork-join/fork-join.component';

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
        path: 'switch-map',
        component: SwitchMapComponent
    },
    {
        path: 'subject',
        component: SubjectComponent
    },
    {
        path: 'behavior-subject',
        component: BehaviorSubjectComponent
    },
    {
        path: 'fork-join',
        component: ForkJoinComponent
    },
    {
        path: '**',
        redirectTo: '/observable',
        pathMatch: 'full'
    }
];
