import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { CancelDialogComponent } from './components/cancel-dialog/cancel-dialog.component';
import { AccordionComponent } from './components/accordion/accordion.component';

@NgModule({
  declarations: [
    ServiceListComponent,
    ServiceDetailsComponent,
    CancelDialogComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    AccordionModule,
    AvatarModule,
    BadgeModule,
    DynamicDialogModule,

  ],
})
export class ServicesModule {}
