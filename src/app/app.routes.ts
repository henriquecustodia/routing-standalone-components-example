import { Routes } from '@angular/router';
import { FirstComponent } from './features/first/first.component';

export const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent,
    title: 'First!',
  },
  {
    path: 'second',
    title: 'Second!',
    loadComponent: () => import('./features/second/second.component')
  },
  {
    path: 'third',
    title: 'third',
    loadChildren: () => import('./features/third/routes')
  },
  {
    path: 'fourth',
    title: 'fourth',
    data: {
      name: 'Henrique'
    },
    loadComponent: () => import('./features/fourth/fourth.component')
  }
];
