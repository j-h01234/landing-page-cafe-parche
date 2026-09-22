import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BUSINESS_INFO } from '../../shared/business-info';

@Component({
  selector: 'app-location',
  imports: [],
  templateUrl: './location.html',
  styleUrl: './location.css'
})
export class Location {
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly address = BUSINESS_INFO.address;
  protected readonly hours = BUSINESS_INFO.hours;

  protected readonly mapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    `https://www.google.com/maps?q=${encodeURIComponent(BUSINESS_INFO.address)}&output=embed`
  );
}
