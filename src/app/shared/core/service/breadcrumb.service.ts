import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  Breadcrumb = new BehaviorSubject<any[]>([]);
  Breadcrumb$ = this.Breadcrumb.asObservable()
  constructor() { }
}
