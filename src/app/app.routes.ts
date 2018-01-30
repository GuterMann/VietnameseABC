import {Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

export const AppRoutes: Routes = [
    { pathMatch: 'full', path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserprofileComponent },
    { path: '**', redirectTo: 'dashboard' , pathMatch: 'full'}
];
