import { Component } from '@angular/core';
import { BUSINESS_INFO } from '../../shared/business-info';

interface CorkPhoto {
  positionClass: string;
  src: string;
  alt: string;
  caption: string;
}

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  protected readonly whatsappLink = BUSINESS_INFO.whatsappLink;
  protected readonly neighborhood = BUSINESS_INFO.neighborhood;

  protected readonly photos: CorkPhoto[] = [
    { positionClass: 'p1', src: '/images/hero-amigos-mesa.jpg', alt: 'Grupo de amigos alrededor de una mesa en CaféParche', caption: 'sábado en la tarde' },
    { positionClass: 'p2', src: '/images/hero-cafe-torta.jpg', alt: 'Café acompañado de torta en CaféParche', caption: 'el combo de siempre' },
    { positionClass: 'p3', src: '/images/hero-fachada.jpg', alt: 'Fachada de CaféParche', caption: 'nuestra puerta' },
    { positionClass: 'p4', src: '/images/hero-risas-grupo.jpg', alt: 'Grupo de amigos riendo en CaféParche', caption: 'un parche cualquiera' }
  ];
}
