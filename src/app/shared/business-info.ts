export const BUSINESS_INFO = {
  whatsappNumber: '573000000000', // TODO Camilo: reemplazar por el número real (formato 57XXXXXXXXXX)
  whatsappMessage: 'Hola, quiero saber de disponibilidad en CaféParche',
  get whatsappLink(): string {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappMessage)}`;
  },
  instagramLink: 'https://instagram.com/cafeparche',
  address: 'Frente al Segundo Parque de Laureles, Medellín',
  neighborhood: 'Laureles, Medellín',
  hours: 'Lun a vie: 8am – 8pm · Sáb y dom: 9am – 9pm'
};
