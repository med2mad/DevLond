import { Routes } from '@angular/router';
import { IndexComponent } from '../index/index.component';
import { ConditionsComponent } from '../conditions/conditions.component';

export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'home', component: IndexComponent },
    { path: 'conditions', component: ConditionsComponent }
];
