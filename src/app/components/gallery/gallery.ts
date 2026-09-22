import { Component } from '@angular/core';

interface GalleryPhoto {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {
  protected readonly photos: GalleryPhoto[] = [
    { src: '/images/gallery-interior-1.jpg', alt: 'Interior de CaféParche, mesas y ambiente' },
    { src: '/images/gallery-interior-2.jpg', alt: 'Otro rincón interior de CaféParche' },
    { src: '/images/gallery-barra.jpg', alt: 'Barra de café de CaféParche' },
    { src: '/images/gallery-exterior.jpg', alt: 'Mesa exterior de CaféParche' }
  ];
}
