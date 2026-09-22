import { Component } from '@angular/core';
import { BUSINESS_INFO } from '../../shared/business-info';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  protected readonly whatsappLink = BUSINESS_INFO.whatsappLink;
  protected readonly instagramLink = BUSINESS_INFO.instagramLink;
}
