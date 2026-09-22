# CaféParche

Landing page conceptual de un café de barrio en Medellín, construida en Angular con
prerendering (build-time), sin servidor Node corriendo (`outputMode: static`).

🔗 Demo: https://classy-pudding-99966c.netlify.app/

## Mejoras aplicadas en esta versión

1. **WhatsApp como CTA principal del hero** (antes solo estaba al final).
2. **Botón flotante de WhatsApp** visible en todo el scroll (`components/floating-whatsapp`).
3. **Badge de barrio** ("📍 Laureles, Medellín") arriba del pliegue, en el hero.
4. **Nav "Escríbenos"** ahora abre WhatsApp directo, ya no hace scroll a #contacto.
5. **Imágenes reales con lazy loading**: `menu` y `gallery` usan `loading="lazy" decoding="async"`; el hero queda sin lazy (carga arriba del pliegue).
6. **`business-info.ts` centralizado**: número de WhatsApp, dirección y horario en un solo archivo (`src/app/shared/business-info.ts`) — cambiar el número real es una sola línea.
7. **Datos estructurados JSON-LD** (`CafeOrCoffeeShop`) en `src/index.html` para SEO local.
8. **Mapa embebido real** en la sección de ubicación (Google Maps sin API key, vía `DomSanitizer.bypassSecurityTrustResourceUrl`).

## Pendiente — esto sí te toca a vos

- [ ] **Número real de WhatsApp**: reemplazar en `src/app/shared/business-info.ts` (una sola línea, `whatsappNumber`).
- [ ] **Fotos reales**: colocar los archivos en `public/images/` con los nombres exactos que ya están referenciados en el código (`hero-amigos-mesa.jpg`, `menu-tinto.jpg`, `gallery-interior-1.jpg`, etc. — ver `hero.ts`, `menu.ts`, `gallery.ts` para la lista completa). Si tus fotos reales tienen otros nombres, es más rápido renombrarlas que tocar el código.
- [ ] **Reconciliar con tu repo real**: este proyecto se reconstruyó desde cero en un entorno sandbox (no tenía acceso a tus imágenes ya subidas ni a cambios que hayas hecho manualmente fuera de esta conversación). Antes de hacer push, compará esta versión con lo que ya tenés en GitHub y llevate las imágenes que ya conseguiste.
- [ ] **Dominio propio** (opcional, ~$12/año) — fuera del alcance de código.
- [ ] En un build con internet normal (fuera de este sandbox), borrar `"fonts": false` de `angular.json` para que Angular optimice las fuentes de Google en el build.

## Cómo correrlo local

```bash
npm install
npm start          # ng serve → http://localhost:4200
```

## Cómo compilar (prerenderizado)

```bash
npm run build       # genera dist/cafeparche/browser, listo para cualquier hosting estático
```

## Deploy

Netlify (ya en uso): build command `npm run build`, publish directory `dist/cafeparche/browser`.
