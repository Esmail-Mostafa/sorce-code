import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../../../shared/core/service/breadcrumb.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../../../../shared/core/state-service/appointment.service';
import { CancelDialogComponent } from '../cancel-dialog/cancel-dialog.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-service-details',

  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss',
  providers: [DialogService],
})
export class ServiceDetailsComponent implements OnInit {
  ref: DynamicDialogRef | undefined;

  BreadcrumbService = inject(BreadcrumbService);
  ActivatedRoute = inject(ActivatedRoute);
  AppointmentService = inject(AppointmentService);
  dialogService = inject(DialogService);
  router = inject(Router);

  constructor() {
    this.BreadcrumbService.Breadcrumb.next([
      { label: 'الخدمات ', url: '/' },
      { label: 'الخدمات الاختبار ', url: '/services' },
      { label: ' اعاده جدوله موعيد الاختبار', url: '/services' },
      { label: ' تفاصيل الموعد', url: '/services' },
    ]);
  }
  appointmentsDetalis: any;
  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((params) => {
      this.AppointmentService.getAppointmentById(params['id']).subscribe(
        (data) => {
          this.appointmentsDetalis = data;
        }
      );
    });
  }

  show() {
    this.ref = this.dialogService.open(CancelDialogComponent, {
      width: '35vw',
      modal: true,
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw',
      },

      data: {
        appointmentDealis: this.appointmentsDetalis,
      },
    });

    if (this.ref) {
      this.ref.onClose.subscribe((data) => {
        if (data) {
          if (data.action === 'action') {
            this.AppointmentService.deleteAppointment(
              this.appointmentsDetalis.id , this.appointmentsDetalis.title
            ).subscribe((data) => {
              this.router.navigate(['/service/service-list']);
            });
          } else if (data.action === 'cancel') {
          }
        }
      });
    } else {
      console.error('Dialog could not be opened.');
    }
  }
}
