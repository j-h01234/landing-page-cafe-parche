import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Menu } from './components/menu/menu';
import { Gallery } from './components/gallery/gallery';
import { Location } from './components/location/location';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { FloatingWhatsapp } from './components/floating-whatsapp/floating-whatsapp';
import { BUSINESS_INFO } from './shared/business-info';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Menu, Gallery, Location, Contact, Footer, FloatingWhatsapp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly document = inject(DOCUMENT);

  constructor(title: Title, meta: Meta) {
    const imageUrl = `${BUSINESS_INFO.siteUrl}${BUSINESS_INFO.ogImage}`;

    title.setTitle(BUSINESS_INFO.siteTitle);
    meta.addTags([
      { name: 'description', content: BUSINESS_INFO.metaDescription },
      { property: 'og:type', content: 'business.business' },
      { property: 'og:title', content: BUSINESS_INFO.siteTitle },
      { property: 'og:description', content: BUSINESS_INFO.metaDescription },
      { property: 'og:url', content: BUSINESS_INFO.siteUrl },
      { property: 'og:image', content: imageUrl },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: BUSINESS_INFO.siteTitle },
      { name: 'twitter:description', content: BUSINESS_INFO.metaDescription },
      { name: 'twitter:image', content: imageUrl }
    ]);

    const jsonLd = this.document.createElement('script');
    jsonLd.type = 'application/ld+json';
    jsonLd.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'CafeOrCoffeeShop',
      name: BUSINESS_INFO.businessName,
      description: BUSINESS_INFO.metaDescription,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_INFO.address,
        addressLocality: 'Medellín',
        addressCountry: 'CO'
      },
      openingHours: ['Mo-Fr 08:00-20:00', 'Sa-Su 09:00-21:00'],
      url: BUSINESS_INFO.siteUrl,
      sameAs: [BUSINESS_INFO.instagramLink]
    });
    this.document.head.appendChild(jsonLd);
  }
}
