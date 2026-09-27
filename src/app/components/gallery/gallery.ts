import { Component } from '@angular/core';
import { BUSINESS_INFO, GalleryPhoto } from '../../shared/business-info';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {
  protected readonly photos: GalleryPhoto[] = BUSINESS_INFO.galleryPhotos;
}
