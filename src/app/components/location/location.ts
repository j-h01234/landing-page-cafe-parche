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

  // El mapa solo se carga si el usuario lo pide: evita que Google Maps reciba
  // la IP de cada visitante con solo abrir la página.
  protected mapLoaded = false;

  protected readonly mapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    `https://www.google.com/maps?q=${encodeURIComponent(BUSINESS_INFO.address)}&output=embed`
  );

  protected loadMap(): void {
    this.mapLoaded = true;
  }
}
