# Peculiar frontend

The frontend is a modular React + TypeScript application built with Vite.
Feature-specific page sections live under `src/features/<feature>`; shared
layout and reusable UI live under `src/components`; route composition lives
under `src/pages`.

## Current increment

The public homepage includes responsive navigation, introductory content,
company service information, discovery prompts and a call-to-action. Motion is
intentionally subtle and respects the operating system's reduced-motion
preference. The supplied Peculiar logo is used in the shared header and footer.
Unsplash workplace photography is used as illustrative stock imagery
and does not depict Peculiar staff, clients, or projects. Public index and
detail routes are represented by page-specific editorial templates. The
Services catalog and Contact page use company information supplied in the
services flyer. Other pages retain editorial outlines where company-approved
facts are not yet available. See the root README for the page-by-page content
readiness checklist.

The service catalog and service detail pages use the service list provided in
the company's supplied services flyer. The Contact page uses the email address
and phone numbers provided in that material. The homepage links directly to
these services and contact channels.

The homepage footer now includes a photographic contact panel, grouped links
and location context. The value marquee uses two identical viewport-filling
tracks for a continuous loop, and becomes static when reduced motion is enabled.
Desktop also has a top utility strip with the approved `Kampala, Uganda` label.
Unverified social-profile links are omitted from the utility strip; verified
company accounts can be added when supplied. The utility strip is hidden on
mobile.

Product, project, team, insights and careers pages remain informational
templates until company-approved content is available. The Contact page links
to the supplied email and phone numbers; it does not pretend to submit a web
form. Privacy and terms content still requires operational and legal review
before publication.
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
