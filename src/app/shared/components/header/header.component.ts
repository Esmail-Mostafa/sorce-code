import { BreadcrumbService } from './../../core/service/breadcrumb.service';
import { ButtonModule } from 'primeng/button';
import {
  Component,
  effect,
  HostBinding,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';

interface lang {
  name: string;
  code: string;
}
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AccordionModule,
    FormsModule,
    DropdownModule,
    MenuModule,
    ButtonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  lang: { name: string; code: string }[] = [
    { name: 'عربى', code: 'AR' },
    { name: 'English', code: 'EN' },
  ];
  selectedlang: { name: string; code: string } = this.lang[0];
  BreadcrumbService = inject(BreadcrumbService);
  Breadcrumb: any;
  constructor() {
    effect(() => {
      localStorage.setItem('darkMode', JSON.stringify(this.darkModeValue()));
    });
  }
  ngOnInit() {
    this.BreadcrumbService.Breadcrumb$.subscribe((data) => {
      this.Breadcrumb = data;
    });
    this.darkModeValue.set(
      JSON.parse(localStorage.getItem('darkMode') ?? 'false')
    );
    if (this.darkModeValue() == true) {
      document.body.classList.toggle('dark');
    }
    this.selectedlang = this.lang[0];
  }

  darkModeValue = signal<boolean>(
    JSON.parse(localStorage.getItem('darkMode') ?? 'false')
  );

  darkMode() {
    document.body.classList.toggle('dark');
    this.darkModeValue.set(!this.darkModeValue());
    localStorage.setItem('darkMode', JSON.stringify(this.darkModeValue()));
  }
  lightMode() {
    document.body.classList.remove('dark');
    this.darkModeValue.set(false);
    localStorage.setItem('darkMode', JSON.stringify(this.darkModeValue()));
  }
  displayResponseiveMenu: boolean = false;
  displayMenu() {
    this.displayResponseiveMenu = !this.displayResponseiveMenu;
  }
}
