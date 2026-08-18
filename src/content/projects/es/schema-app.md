---
title: Schema App
description: Una aplicación web autoalojada con Next.js 14 + Prisma/SQLite para generar y publicar JSON-LD de Schema.org en sitios de WordPress de clientes.
date: "2026-06-29"
img: "/schema-app-image.webp"
url: "https://almostillegalads.com"
author: Andres Soler

technologies:
  - Typescript
  - Prisma
  - SQLite
  - Wordpress
  - Docker

tags:
  - Application
  - frontend
  - backend

status: developed
---

Una aplicación web autoalojada con **Next.js 14 + Prisma/SQLite** que genera el marcado JSON-LD de Schema.org para sitios web de bufetes de abogados y lo publica directamente en los sitios de WordPress de los clientes, reemplazando la redacción manual del marcado a partir de la especificación de skills//templates/ hermana en este repositorio.
<br/><br/>

Flujo de trabajo principal: el personal crea un registro de "Website", completa los datos del bufete (Organization/LegalService), los abogados (Person), los servicios y las oficinas/ubicaciones, y luego construye páginas individuales (Contacto, Acerca de, Perfil de Abogado, Área de Práctica, Ubicación, Blog, etc.) mediante editores específicos para cada tipo de página. El motor ensambla el @graph correcto de entidades de <a href="https://schema.org" target="blank" class="hover:text-[var(--accent)] underline"> **Schema.org**</a> por página, muestra una vista previa en vivo del JSON-LD y lo valida antes de publicarlo.
<br/><br/>
**Publicación**: no se utiliza ningún inicio de sesión de administrador de WordPress. Un plugin complementario de tipo must-use (aia-schema-render.php, actualmente v0.4.0) expone endpoints REST autenticados por token; la aplicación envía un token de conexión por sitio (cifrado con AES en reposo mediante SCHEMA_ENC_KEY) en un encabezado personalizado X-AIA-Token, elegido porque muchos hostings eliminan el encabezado Authorization: Basic. El plugin resuelve el post/página objetivo e inyecta el JSON-LD en el HEAD.

Multi-oficina / multi-idioma: el trabajo principal más reciente construyó soporte de primera clase para:
<br/><br/>

- **Ubicaciones** como entidad propia, vinculada de forma muchos-a-muchos con Personas/Servicios (vacío = a nivel de todo el bufete), con un modelo de oficina principal: el nodo principal #organization/LegalService del bufete puede designarse como oficina principal (con sus datos NAP), mientras que subOrganization solo lista las oficinas secundarias.<br/><br/>
- **Enrutamiento por oficina a nivel de sitio** — un esquema de head distinto por oficina (por ejemplo, la raíz de Dallas frente a las páginas de Fort Worth), resuelto mediante ruta exacta → variante de idioma por prefijo más largo → predeterminado, calculado completamente en el servidor y enviado al plugin.<br><br/>
- **Variantes en español (es)** — páginas "Duplicar como ES", editores de anulación por idioma en Person/Service/Location, y bloques de todo el sitio por idioma servidos en las rutas /es/ correctas.
