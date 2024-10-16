import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../../../shared/core/service/breadcrumb.service';
import { AppointmentService } from '../../../../shared/core/state-service/appointment.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.scss',
})
export class ServiceListComponent implements OnInit {
  BreadcrumbService = inject(BreadcrumbService);
  AppointmentService = inject(AppointmentService);
  constructor() {
    this.BreadcrumbService.Breadcrumb.next([
      { label: 'الخدمات', url: '/' },
      { label: 'الخدمات الاختبار ', url: '/services' },
      { label: 'الفاء الاختبار', url: '/services' },
    ]);
  }

  appointmentsList: any = [];
  isDeleteMessage: string = "";
  ngOnInit(): void {
    this.AppointmentService.isDelete$.subscribe((res) => {
      this.isDeleteMessage = res;
    });
    this.appointmentsList = this.AppointmentService.appointmentsList;
  }
  canselDeleteMessage() {
    this.AppointmentService.isDelete.next("");
    this.isDeleteMessage = "";
  }
}
