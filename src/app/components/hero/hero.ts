import { Component } from '@angular/core';
import { BUSINESS_INFO, HeroPhoto } from '../../shared/business-info';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  protected readonly whatsappLink = BUSINESS_INFO.whatsappLink;
  protected readonly neighborhood = BUSINESS_INFO.neighborhood;
  protected readonly photos: HeroPhoto[] = BUSINESS_INFO.heroPhotos;
}
