# Peculiar frontend

The frontend is a modular React + TypeScript application built with Vite.
Feature-specific page sections live under `src/features/<feature>`; shared
layout and reusable UI live under `src/components`; route composition lives
under `src/pages`.

## Current increment

The public homepage includes responsive navigation, introductory content,
service direction, working approach and a call-to-action. Motion is intentionally
subtle and respects the operating system's reduced-motion preference. The text
wordmark and CSS illustration are temporary until approved brand assets are
provided. Public index and detail routes are represented by reusable editorial
templates. Where company facts are missing, the pages explain that approved
content is in preparation rather than showing invented claims. See the root
README for the page-by-page content readiness checklist.

The contact route does not yet submit enquiries, and product/service/project/
article detail routes need approved CMS content. The privacy and terms routes
are explicitly review placeholders, not legal advice or publishable policies.

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
Font Awesome and Framer Motion. Poppins is used for display typography and DM
Sans for body copy. API-backed forms and content will be added when the
corresponding backend modules are implemented.
