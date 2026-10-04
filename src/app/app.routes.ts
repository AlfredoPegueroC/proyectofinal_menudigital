import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { Searchpage } from './searchpage/searchpage';
import { Indicepage } from './indicepage/indicepage';
import { Randompage } from './randompage/randompage';

export const routes: Routes = [
  {
    path: '',
    component: Homepage,
  },
  {
    path: 'search',
    component: Searchpage,
  },
  {
    path: 'indice',
    component: Indicepage,
  },{
    path: 'random', component: Randompage,
  }
];
