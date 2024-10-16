import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'service-list' },
  { path: 'service-list', component: ServiceListComponent },
  { path: 'service-details/:id', component: ServiceDetailsComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
