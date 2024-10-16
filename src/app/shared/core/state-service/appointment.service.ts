import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  isDelete = new BehaviorSubject<string>("");

  isDelete$ = this.isDelete.asObservable();

  appointmentsList = [
    {
      id: 1,
      title: 'اختبار القدره المعرفيه المتخصصات العلميه',
      date: 'الاحد 11 افريل 2024',
      form: '08:00',
      to: '09:00',
      timeTest: 'صباحا',
      location: 'المستشفى الجامعي',
      status: '1',
      remainingTime: '3',
      ReferenceNumber: '123456',
      prsonalId: '16519551651',
      testTimeHoures: '2',
      testType: 'اليه',
      testLang: 'اللغه العربيه',
      peapleTarget: 'الاشخاص',
      arName: 'اسماعيل مصطفى',
      enName: 'ismail mostafa',
      price: '100',
    },
    {
      id: 2,
      title: 'اختبار القدره المعرفيه المتخصصات الهندسيه',
      date: 'الاحد 15 افريل 2024',
      form: '09:00',
      to: '10:00',
      timeTest: 'مساءً',
      location: 'مركز الاختبارات الوطني',
      status: '2',
      remainingTime: '2',
      ReferenceNumber: '789012',
      prsonalId: '16519551652',
      testTimeHoures: '1',
      testType: 'الكتروني',
      testLang: 'اللغه العربيه',
      peapleTarget: 'المهندسين',
      arName: 'محمد علي',
      enName: 'mohammed ali',
      price: '100',
    },
    {
      id: 3,
      title: 'اختبار القدره المعرفيه المتخصصات الطبيه',
      date: 'الاحد 15 افريل 2024',
      form: '10:00',
      to: '11:00',
      timeTest: 'صباحا',
      location: 'مستشفى الملك خالد',
      status: '1',
      remainingTime: '0',
      ReferenceNumber: '345678',
      prsonalId: '16519551653',
      testTimeHoures: '3',
      testType: 'ورقي',
      testLang: 'اللغة الانجليزية',
      peapleTarget: 'الاطباء',
      arName: 'احمد صالح',
      enName: 'ahmed saleh',
      price: '100',
    },
    {
      id: 4,
      title: 'اختبار القدره المعرفيه المتخصصات الادارية',
      date: 'الاحد 15 افريل 2024',
      form: '11:00',
      to: '12:00',
      timeTest: 'مساءً',
      location: 'مركز القياس الوطني',
      status: '1',
      remainingTime: '1',
      ReferenceNumber: '901234',
      prsonalId: '16519551654',
      testTimeHoures: '2',
      testType: 'اليه',
      testLang: 'اللغه العربيه',
      peapleTarget: 'الاداريين',
      arName: 'عبد الله محمد',
      enName: 'abdullah mohammed',
      price: '200',
    },
    {
      id: 5,
      title: 'اختبار القدره المعرفيه المتخصصات التربويه',
      date: 'الاحد 15 افريل 2024',
      form: '12:00',
      to: '01:00',
      timeTest: 'صباحا',
      location: 'جامعة الملك سعود',
      status: '2',
      remainingTime: '0',
      ReferenceNumber: '567890',
      prsonalId: '16519551655',
      testTimeHoures: '1',
      testType: 'الكتروني',
      testLang: 'اللغه العربيه',
      peapleTarget: 'المعلمين',
      arName: 'خالد عبد الرحمن',
      enName: 'khaled abdurrahman',
      price: '300',
    },
    {
      id: 6,
      title: 'اختبار القدره المعرفيه المتخصصات القانونيه',
      date: 'الاحد 15 افريل 2024',
      form: '01:00',
      to: '02:00',
      timeTest: 'مساءً',
      location: 'مركز القانون الوطني',
      status: '1',
      remainingTime: '3',
      ReferenceNumber: '112233',
      prsonalId: '16519551656',
      testTimeHoures: '2',
      testType: 'ورقي',
      testLang: 'اللغة الانجليزية',
      peapleTarget: 'المحاميين',
      arName: 'سامي يوسف',
      enName: 'sami youssef',
      price: '400',
    },
  ];
  constructor() {}
  getAppointments() {
    return this.appointmentsList;
  }
  getAppointmentById(id: number) {
    const appointment = this.appointmentsList.find(
      (appointment) => appointment.id === Number(id)
    );
    if (appointment) {
      return of(appointment);
    } else {
      return throwError(() => new Error('Appointment not found'));
    }
  }

  deleteAppointment(id: number , title:string) {
    this.isDelete.next(title);
    return of(
      (this.appointmentsList = this.appointmentsList.filter(
        (appointment) => appointment.id !== id
      ))
    );
  }
}
