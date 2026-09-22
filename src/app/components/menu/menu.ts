import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  tag?: string;
}

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  protected readonly items: MenuItem[] = [
    { name: 'Tinto de la casa', description: 'Café de origen antioqueño, tostado suave.', price: '$6.000', imageSrc: '/images/menu-tinto.jpg', imageAlt: 'Tinto tradicional colombiano', tag: 'favorito' },
    { name: 'Chocolate completo', description: 'Con queso y almojábana, para compartir.', price: '$12.000', imageSrc: '/images/menu-chocolate.jpg', imageAlt: 'Chocolate santafereño con queso y almojábana' },
    { name: 'Torta del día', description: 'Receta casera, cambia cada semana.', price: '$8.000', imageSrc: '/images/menu-torta.jpg', imageAlt: 'Torta casera del día' },
    { name: 'Frappé de parche', description: 'Café frío, dulce, para tardes calurosas.', price: '$10.000', imageSrc: '/images/menu-frappe.jpg', imageAlt: 'Frappé de café frío' },
    { name: 'Sanduche de la casa', description: 'Pan artesanal, para picar entre café y café.', price: '$14.000', imageSrc: '/images/menu-sanduche.jpg', imageAlt: 'Sanduche de pan artesanal' },
    { name: 'Tabla para parchar', description: 'Quesos, embutidos y pan, pensada para compartir.', price: '$32.000', imageSrc: '/images/menu-tabla.jpg', imageAlt: 'Tabla de quesos, embutidos y pan para compartir', tag: 'para 2+' }
  ];
}
