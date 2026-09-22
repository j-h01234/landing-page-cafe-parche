import { Component } from '@angular/core';
import { BUSINESS_INFO } from '../../shared/business-info';

@Component({
  selector: 'app-floating-whatsapp',
  imports: [],
  templateUrl: './floating-whatsapp.html',
  styleUrl: './floating-whatsapp.css'
})
export class FloatingWhatsapp {
  protected readonly whatsappLink = BUSINESS_INFO.whatsappLink;
}
