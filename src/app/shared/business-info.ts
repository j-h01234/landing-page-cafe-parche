export interface HeroPhoto {
  positionClass: string;
  src: string;
  alt: string;
  caption: string;
}

export interface GalleryPhoto {
  src: string;
  alt: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  tag?: string;
}

export const BUSINESS_INFO = {
  businessName: 'CaféParche',
  whatsappNumber: '573000000000', // TODO Camilo: reemplazar por el número real (formato 57XXXXXXXXXX)
  whatsappMessage: 'Hola, quiero saber de disponibilidad en CaféParche',
  get whatsappLink(): string {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappMessage)}`;
  },
  instagramLink: 'https://instagram.com/cafeparche',
  address: 'Frente al Segundo Parque de Laureles, Medellín',
  neighborhood: 'Laureles, Medellín',
  hours: 'Lun a vie: 8am – 8pm · Sáb y dom: 9am – 9pm',

  // TODO: reemplazar por la URL real del deploy (dominio propio o subdominio Netlify definitivo).
  // robots.txt y sitemap.xml tienen el mismo placeholder — hay que sincronizar los tres a mano,
  // porque esos dos son archivos estáticos que el build de Angular no procesa.
  siteUrl: 'https://REEMPLAZAR-con-la-url-real-del-deploy.netlify.app',
  siteTitle: 'CaféParche — Ven a parchar, quédate a compartir',
  metaDescription: 'CaféParche: un café de barrio en Laureles, Medellín, para llegar con amigos o familia y quedarte el tiempo que quieras.',
  ogImage: '/images/hero-fachada.jpg',

  heroPhotos: [
    { positionClass: 'p1', src: '/images/hero-amigos-mesa.jpg', alt: 'Grupo de amigos alrededor de una mesa en CaféParche', caption: 'sábado en la tarde' },
    { positionClass: 'p2', src: '/images/hero-cafe-torta.jpg', alt: 'Café acompañado de torta en CaféParche', caption: 'el combo de siempre' },
    { positionClass: 'p3', src: '/images/hero-fachada.jpg', alt: 'Fachada de CaféParche', caption: 'nuestra puerta' },
    { positionClass: 'p4', src: '/images/hero-risas-grupo.jpg', alt: 'Grupo de amigos riendo en CaféParche', caption: 'un parche cualquiera' }
  ] as HeroPhoto[],

  galleryPhotos: [
    { src: '/images/gallery-interior-1.jpg', alt: 'Interior de CaféParche, mesas y ambiente' },
    { src: '/images/gallery-interior-2.jpg', alt: 'Otro rincón interior de CaféParche' },
    { src: '/images/gallery-barra.jpg', alt: 'Barra de café de CaféParche' },
    { src: '/images/gallery-exterior.jpg', alt: 'Mesa exterior de CaféParche' }
  ] as GalleryPhoto[],

  menuItems: [
    { name: 'Tinto de la casa', description: 'Café de origen antioqueño, tostado suave.', price: '$6.000', imageSrc: '/images/menu-tinto.jpg', imageAlt: 'Tinto tradicional colombiano', tag: 'favorito' },
    { name: 'Chocolate completo', description: 'Con queso y almojábana, para compartir.', price: '$12.000', imageSrc: '/images/menu-chocolate.jpg', imageAlt: 'Chocolate santafereño con queso y almojábana' },
    { name: 'Torta del día', description: 'Receta casera, cambia cada semana.', price: '$8.000', imageSrc: '/images/menu-torta.jpg', imageAlt: 'Torta casera del día' },
    { name: 'Frappé de parche', description: 'Café frío, dulce, para tardes calurosas.', price: '$10.000', imageSrc: '/images/menu-frappe.jpg', imageAlt: 'Frappé de café frío' },
    { name: 'Sanduche de la casa', description: 'Pan artesanal, para picar entre café y café.', price: '$14.000', imageSrc: '/images/menu-sanduche.jpg', imageAlt: 'Sanduche de pan artesanal' },
    { name: 'Tabla para parchar', description: 'Quesos, embutidos y pan, pensada para compartir.', price: '$32.000', imageSrc: '/images/menu-tabla.jpg', imageAlt: 'Tabla de quesos, embutidos y pan para compartir', tag: 'para 2+' }
  ] as MenuItem[]
};
