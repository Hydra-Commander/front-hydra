import { Routes } from '@angular/router';
import {MainLayoutComponent} from './core/layouts/main-layout/main-layout.component';
import {DashboardComponent} from './features/dashboard/dashboard.component';
import {ServerLogsComponent} from './features/server-logs/server-logs.component';
import {LoginComponent} from './features/login/login.component';
import {ListComponent} from './features/victims/list/list.component';
import {InteractComponent} from './features/victims/interact/interact.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'server-logs',
        component: ServerLogsComponent
      },
      {
        path: 'victims/list',
        component: ListComponent
      },
      {
        path: 'victims/interact/:id',
        component: InteractComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
