# CLAUDE.md — Contexto del proyecto CaféParche

Este archivo le da contexto a Claude Code al abrir este repo. No es documentación para humanos (para eso está el README.md), es memoria de trabajo para vos mismo (Claude Code).

## Qué es este proyecto

Landing page de un solo scroll para "CaféParche", un **concepto de café de barrio inventado como proyecto de portafolio** (no es un negocio real — Juan Camilo Henao Vallejo lo construyó para mostrar capacidad técnica a clientes freelance, no para venderlo a un dueño de café real).

- Demo en vivo: https://classy-pudding-99966c.netlify.app/
- Repo: https://github.com/j-h01234/CafeParche
- Deploy: Netlify (nunca Vercel — su plan free prohíbe uso comercial)

## Stack y arquitectura

- Angular 20, TypeScript, CSS puro (sin frameworks de UI)
- Sin routing (single page)
- **Prerendering en build-time**: `outputMode: 'static'` en `angular.json` — genera HTML real navegable, sin servidor Node corriendo. Crítico para SEO/Core Web Vitals, no lo cambies a `'server'`.
- Componentes standalone en `src/app/components/`: `navbar`, `hero`, `about`, `menu`, `gallery`, `location`, `contact`, `footer`, `floating-whatsapp`
- `src/app/shared/business-info.ts`: **única fuente de verdad** del contenido del sitio — WhatsApp, dirección, horario, título/meta description, imagen OG, y los arrays de fotos del hero/galería/menú. **Nunca hardcodear estos datos directamente en un componente** — importar de acá siempre. Pensado así a propósito para poder reusar este proyecto como plantilla con otros clientes: en teoría, un cliente nuevo = editar este archivo + reemplazar fotos en `public/images/`, sin tocar el resto del código.
- `src/app/app.ts`: inyecta `<title>`, meta description, Open Graph/Twitter Card y el JSON-LD (`CafeOrCoffeeShop`) en tiempo de build usando los servicios `Title`/`Meta` de Angular — quedan horneados en el HTML prerenderizado (verificado leyendo `dist/cafeparche/browser/index.html` después del build). `index.html` ya no tiene esos tags a mano.
- `netlify.toml`: build command, publish dir, `NODE_VERSION` y headers de seguridad (CSP, X-Frame-Options, HSTS, etc.) — `style-src` necesita `'unsafe-inline'` porque Angular inyecta los estilos por componente como `<style>` inline en el `<head>`, no como archivo aparte.
- `.nvmrc`: fija la versión de Node (Angular CLI 20.3.x exige `^20.19.0 || ^22.12.0`, y `@netlify/angular-runtime` exige `^22.22.0` en adelante — la intersección usada es `22.22.0`).
- Variables de diseño (paleta, tipografía) en `src/styles.css`

## Decisiones ya tomadas (no las reabras sin preguntar)

- Paleta "de barrio" (crema, verde pino, ocre, rojo ladrillo) — decisión explícita para evitar el cliché café+terracota de IA
- Tipografía: Bevan (display) + Karla (body) + Caveat (acentos manuscritos)
- El hero usa un "corcho de fotos pineadas" como elemento visual característico, no una foto de stock genérica
- CTA principal: WhatsApp (no formulario de contacto, no llamada telefónica)
- Mapa embebido: Google Maps sin API key vía `DomSanitizer.bypassSecurityTrustResourceUrl` (`https://www.google.com/maps?q=...&output=embed`)

## Mejoras de conversión/SEO (implementadas, verificar que estén en el repo)

1. WhatsApp como CTA primario en el hero (no solo al final)
2. Botón flotante de WhatsApp visible en todo el scroll (`components/floating-whatsapp`)
3. Badge de barrio ("📍 Laureles, Medellín") arriba del pliegue en el hero
4. Nav "Escríbenos" abre WhatsApp directo
5. Imágenes de menú y galería con `loading="lazy" decoding="async"`; hero SIN lazy (carga arriba del pliegue)
6. Datos estructurados JSON-LD (`CafeOrCoffeeShop`) en `src/index.html`

**Nota de reconciliación:** el sitio en vivo (deployado) puede tener el nav con DOS links ("Ver ubicación" + "Escríbenos") en vez de solo uno. No está resuelto cuál versión es la definitiva — preguntarle a Camilo antes de decidir por él si aparece esta discrepancia.

## Imágenes (públicas, ya subidas por Camilo)

Van en `public/images/`, 14 archivos exactos — ver `cafeparche-imagenes-manifiesto.md` en la raíz del repo (o pedirle el archivo a Camilo) para la lista completa con alt-text. Si falta alguna al hacer build, es un archivo que no se subió, no un error de código.

## Pendientes bloqueados (no resolver solo, preguntar)

- **Número real de WhatsApp**: sigue en placeholder `573000000000` en `business-info.ts` hasta que Camilo lo confirme.
- **Dominio propio**: aún en subdominio Netlify (`classy-pudding-99966c.netlify.app` es del repo viejo `CafeParche`; este repo `landing-page-cafe-parche` tiene su propio deploy nuevo en Netlify, con URL todavía por confirmar).
- **`siteUrl` en `business-info.ts`**: placeholder `https://REEMPLAZAR-con-la-url-real-del-deploy.netlify.app` hasta tener la URL final. Usado en Open Graph/Twitter/JSON-LD. `public/robots.txt` y `public/sitemap.xml` tienen el mismo placeholder — son archivos estáticos que el build no procesa, hay que actualizar los tres a mano cuando se defina la URL.

## Comandos

```bash
npm install
npm start                              # ng serve, localhost:4200
npm run build                          # build con prerendering, dist/cafeparche/browser
```

En un entorno con internet normal (no sandbox), verificar que `angular.json` NO tenga `"fonts": false` en la config de producción — esa línea solo existe para saltarse un bloqueo de red en entornos sandbox sin salida a Google Fonts.

## Cómo trabajar en este repo

- Rama `Mejoras` para cambios en curso, no commitear directo a `main`.
- Commits atómicos, uno por mejora/cambio, mensajes descriptivos.
- Correr `npm run build` antes de dar por terminado cualquier cambio — confirmar que compila y que sigue diciendo "Prerendered 1 static route" en el log.
- Este proyecto es una pieza de portafolio, no un cliente real — no hace falta pedir permiso para decisiones de diseño ya asentadas arriba, pero sí para reabrir decisiones ya tomadas.
