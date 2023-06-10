import { Routes } from '@angular/router';
import { ThirdComponent } from './third.component';
import { Third1Component } from './third1.component';
import { Third2Component } from './third2.component';
import { Third3Component } from './third3.component';

export default [
  {
    path: '',
    component: ThirdComponent,
    children: [
      {
        path: 'one',
        component: Third1Component,
      },
      {
        path: 'two',
        component: Third2Component,
      },
      {
        path: 'three',
        component: Third3Component,
      },
    ],
  },
] as Routes;
