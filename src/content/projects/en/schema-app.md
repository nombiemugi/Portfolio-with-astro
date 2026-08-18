---
title: Schema App
description: A self-hosted Next.js 14 + Prisma/SQLite web app for generating and publishing Schema.org JSON-LD to client WordPress sites.
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

A self-hosted **Next.js 14 + Prisma/SQLite** web app that generates Schema.org JSON-LD markup for law firm websites and publishes it directly into client WordPress sites — replacing hand-authoring the markup from the sibling skills//templates/ spec in this repo.
<br/><br/>

Core workflow: Staff create a "Website" record, fill in firm details (Organization/LegalService), attorneys (Person), services, and offices/locations, then build individual pages (Contact, About, Attorney Profile, Practice Area, Location, Blog, etc.) through page-type-specific editors. The engine assembles the correct @graph of <a href="https://schema.org" target="blank" class="hover:text-[var(--accent)] underline"> **Schema.org**</a> entities per page, live-previews the JSON-LD, and validates it before publish.
<br/><br/>
**Publishing**: No WordPress admin login is used. A companion must-use plugin (aia-schema-render.php, currently v0.4.0) exposes token-authenticated REST endpoints; the app sends a per-site connection token (AES-encrypted at rest via SCHEMA_ENC_KEY) in a custom X-AIA-Token header — chosen because hosts often strip Authorization: Basic. The plugin resolves the target post/page and injects the JSON-LD into the HEAD.

Multi-office / multi-language: The most recent major work built out first-class support for:
<br/><br/>

- **Locations** as their own entity, many-to-many linked to People/Services (empty = firm-wide), with a primary-office model — the firm's main #organization/LegalService node can be a designated primary office (carrying its NAP data), while subOrganization lists only secondary offices.<br/><br/>
- **Per-office sitewide routing** — different head schema per office (e.g., Dallas root vs. Fort Worth pages), resolved via exact route → longest-prefix language variant → default, entirely server-computed and pushed to the plugin.<br><br/>
- **Spanish (es) variants** — "Duplicate as ES" pages, per-language override editors on Person/Service/Location, and per-language sitewide blocks served at the correct /es/ paths.
