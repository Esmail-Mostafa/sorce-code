import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'service' },
  {
    path: 'service',
    loadChildren: () =>
      import('./Modules/services/services.module').then(
        (m) => m.ServicesModule
      ),
  },
];
