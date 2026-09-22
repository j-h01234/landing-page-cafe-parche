import { Component } from '@angular/core';
import { BUSINESS_INFO } from '../../shared/business-info';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  protected readonly whatsappLink = BUSINESS_INFO.whatsappLink;
}
