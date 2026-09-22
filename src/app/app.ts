import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Menu } from './components/menu/menu';
import { Gallery } from './components/gallery/gallery';
import { Location } from './components/location/location';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { FloatingWhatsapp } from './components/floating-whatsapp/floating-whatsapp';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Menu, Gallery, Location, Contact, Footer, FloatingWhatsapp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
