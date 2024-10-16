import { Component} from '@angular/core';
import {  RouterModule } from '@angular/router';

@Component({
  selector: 'app-sid-bar',
  standalone: true,
  imports: [ RouterModule],
  templateUrl: './sid-bar.component.html',
  styleUrl: './sid-bar.component.scss'
})
export class SidBarComponent  {


  darkMode = localStorage.getItem('darkMode');

}
