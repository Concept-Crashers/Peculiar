# Peculiar frontend

The frontend is a modular React + TypeScript application built with Vite.
Feature-specific page sections live under `src/features/<feature>`; shared
layout and reusable UI live under `src/components`; route composition lives
under `src/pages`.

## Current increment

The public homepage includes responsive navigation, introductory content,
service information outline, discovery prompts and a call-to-action. Motion is
intentionally subtle and respects the operating system's reduced-motion
preference. The supplied Peculiar logo is used in the shared header and footer.
Unsplash workplace photography is used as illustrative stock imagery
and does not depict Peculiar staff, clients, or projects. Public index and
detail routes are represented by page-specific editorial templates. About,
services, products, projects, team, insights, careers, contact and legal pages
have dedicated content outlines and publication-readiness states. Where company
facts are missing, the pages explain what needs confirmation rather than
showing invented claims. See the root README for the page-by-page content
readiness checklist.

Index and detail templates show the information and permissions needed before
publication. The homepage evidence section describes the standards for future
case studies, client feedback and outcomes; it does not contain invented
testimonials or results.

The homepage footer now includes a photographic contact panel, grouped links
and location context. The value marquee uses two identical viewport-filling
tracks for a continuous loop, and becomes static when reduced motion is enabled.
Desktop also has a top utility strip with the approved `Kampala, Uganda` label.
Social-profile URLs are demo links and must be replaced with the company's
verified accounts before deployment; that strip is hidden on mobile.

The contact route does not yet submit enquiries because no approved recipient
or form-processing service is configured. Product/service/project/article
detail routes are outlines, not published records. The privacy and terms routes
are explicitly review placeholders, not legal advice or publishable policies.
Admin/CMS screens and backend functionality remain out of scope for this
frontend increment.

## Run locally

```sh
npm install
npm run dev
```

## Validate

```sh
npm run lint
npm run build
```

## Stack

React, TypeScript, Vite, Bootstrap 5, React Router, Axios, React Hook Form, Zod,
Font Awesome and Framer Motion. Outfit is used throughout the interface.
API-backed forms and content will be added when the corresponding backend
modules are implemented.

## Image sources

The local, resized WebP images are sourced from Unsplash and used as illustrative
workplace photography:

- [Collaborative work](https://unsplash.com/photos/people-sitting-down-near-table-with-assorted-laptop-computers-5fNmWej4tAA)
- [Team session](https://images.unsplash.com/photo-1522071820081-009f0129c71c)
- [Workshop](https://images.unsplash.com/photo-1556761175-b413da4baf72)
- [Workspace](https://images.unsplash.com/photo-1497366754035-f200968a6e72)

Images are not presented as actual Peculiar employees, clients or project work.
