# Peculiar Technologies Limited

The corporate website for Peculiar Technologies Limited, a technology company
operating in Uganda. Development is incremental: the frontend foundation and
first public landing page are being built before the CMS and API.

## Requirements and content principles

- Build a responsive, accessible, search-friendly corporate website and a
  separately protected content-management experience.
- Use a modular architecture so public pages, CMS features, and backend
  domains can evolve independently.
- Do not publish unverified company history, customers, testimonials,
  certifications, project results, statistics, or contact details.
- Treat homepage copy as a draft until company facts and brand guidelines are
  approved. The supplied logo asset is used in shared navigation and footer.

## Sitemap

### Public website

- `/` — Home
- `/about` — About Peculiar
- `/services` — Services index
- `/services/:slug` — Service details
- `/products` — Products index
- `/products/:slug` — Product details
- `/projects` — Projects and case studies
- `/projects/:slug` — Project details
- `/team` — Team
- `/insights` — Insights index
- `/insights/:slug` — Article
- `/careers` — Careers and open roles
- `/contact` — Contact and enquiries
- `/privacy` — Privacy policy
- `/terms` — Terms of use

### Admin

- `/admin/login`
- `/admin` — Dashboard
- `/admin/pages`, `/admin/services`, `/admin/products`, `/admin/projects`
- `/admin/insights`, `/admin/team`, `/admin/testimonials`, `/admin/media`
- `/admin/enquiries`, `/admin/careers`, `/admin/applications`
- `/admin/seo`, `/admin/users`, `/admin/settings`, `/admin/audit-logs`

The public routes have page-specific frontend templates. The admin routes remain
future work; this frontend increment does not implement a CMS or backend.

## Public-page content readiness

The frontend now provides route-level templates for the public pages. A route
being present does **not** mean its company-specific content or business
workflow is finished. Pages with unconfirmed information intentionally explain
that accurate content is being prepared; no fake case studies, reviews, job
openings, policies, contact details, service catalogues or products are shown.

| Page | In the frontend | Still needed before publication |
|---|---|---|
| Home `/` | Editorial hero, introductory sections, service entry point, approach, navigation cards, evidence standards for future case studies/testimonials/outcomes, contact CTA and animated marquees | Approved logo and messaging; confirmed service/product/project links; verified proof points; technology and industry focus; genuine testimonials; approved article links; functioning contact destination |
| About `/about` | Story, purpose and people sections with publication-readiness states | Approved company overview, history, mission/vision/values, leadership bios and approved team photography |
| Services `/services` | Service catalogue and detail expectations; no unconfirmed offerings | Confirmed service list, scope, deliverables, process, outcomes and imagery |
| Service detail `/services/:slug` | Reusable service detail outline; not a specific published service | Real service slugs and approved descriptions, scope, deliverables, examples and enquiry CTA |
| Products `/products` | Product catalogue and user/access information sections | Confirmed products, availability, intended users, feature details, screenshots and support information |
| Product detail `/products/:slug` | Reusable product detail outline; not a specific published product | Product records, feature/benefit copy, access or pricing details, support route and approved imagery |
| Projects `/projects` | Case-study and evidence standards; no unapproved client work | Client permissions, project summaries, approved visual assets and verified outcomes |
| Project detail `/projects/:slug` | Reusable case-study outline; publication and evidence requirements | Approved challenge/approach/outcome, client attribution, metrics with evidence and publication consent |
| Team `/team` | Profile, consent and verified-link sections; no invented people | Approved names, job titles, biographies, portrait consent and profile links |
| Insights `/insights` | Editorial library and standards; no invented articles | Editorial topics, original reviewed articles, authors, dates, images and publishing cadence |
| Article `/insights/:slug` | Reusable article detail outline; not a published article | Article content, author metadata, date, related stories, share image and SEO fields |
| Careers `/careers` | Current-opportunities and application information; no invented vacancies | Approved open roles, requirements, location/terms, application destination and recruitment privacy notice |
| Contact `/contact` | Contact-channel and enquiry-handling requirements; no unconnected form | Business email/phone/address as approved; working form endpoint or destination; response expectations; consent text |
| Privacy `/privacy` | Privacy-practice checklist; not a published policy or legal advice | Actual data collection and retention, purposes/legal bases, processors/cookies, rights contact and legal review |
| Terms `/terms` | Terms outline checklist; not published terms or legal advice | Legal entity and jurisdiction, IP/use rules, liability/disputes, effective date and legal review |

### Homepage sections still awaiting real material

- **Featured products and projects:** add only confirmed items with publication
  approval, imagery and supported claims.
- **Why choose Peculiar:** requires approved, defensible differentiators rather
  than generic marketing claims.
- **Technology capabilities and industries:** confirm actual expertise and
  relevant sectors before naming them.
- **Testimonials:** require genuine quotations, names/roles and permission.
- **Latest articles:** require reviewed articles and accurate dates/authors.
- **Contact CTA:** the route exists, but an approved contact destination and
  working enquiry handling are still needed.

The homepage evidence section describes the approval and verification required
before publishing client work, testimonials or outcomes. Page templates also
show their outstanding publication requirements; these are preparation notes,
not claims about the company.

The next step for content completion is for the company to supply or approve
these materials. Homepage copy remains a design draft, and the stock photos
are illustrative—not evidence of company work.

## Modular architecture

The first increment is a frontend-only React application. It separates route
composition, feature sections and shared UI. The intended full system is a
modular monolith: one deployable API with independently owned domain modules,
not a distributed microservice system.

```text
frontend/
  src/
    app/                 # Application providers and route configuration
    components/
      layout/            # Shared site shell
      ui/                # Reusable, accessible presentation components
    features/
      home/              # Homepage sections and page-specific content
      services/          # Future public service pages
      enquiries/         # Future enquiry form and admin workflows
      admin/             # Future protected CMS shell and feature modules
    lib/                 # Future API client and shared utilities
    pages/               # Route-level page composition

backend/                 # Planned modular Express API
  src/
    modules/
      auth/
      users/
      pages/
      services/
      products/
      projects/
      insights/
      team/
      testimonials/
      enquiries/
      careers/
      media/
      settings/
      audit-logs/
    middleware/          # Auth, permissions, validation, errors, rate limits
    config/              # Environment, database, logging
    shared/              # Cross-module types and utilities
```

Each backend domain will own its model, validation, service, controller and
routes. Cross-cutting authentication, authorization, error handling, logging,
configuration and HTTP concerns remain shared. Modules interact through
explicit service interfaces rather than importing another module's internals.
MongoDB/Mongoose provides persistence; HTTP-only cookie JWTs, password hashing,
role permissions and audit events are implemented before protected CMS
features are exposed.

## Design direction

- Mobile-first layout, with tested widths from 320px through large desktops.
- Outfit typography throughout, and a calm warm-neutral, deep-navy and teal
  palette aligned with the supplied logo.
- Clear hierarchy, generous whitespace, responsive navigation and reusable
  page/section patterns.
- Subtle entrance and ambient motion; honor `prefers-reduced-motion`.
- An uninterrupted, duplicate-track marquee that loops continuously and
  becomes static for reduced-motion preferences.
- Locally stored, resized Unsplash workplace photos used as illustrative
  imagery—not as representations of Peculiar staff, clients, or projects.
- The supplied logo at `frontend/src/assets/peculiar-logo.jpg` is used in the
  shared header and footer; a cropped transparent derivative is used for display.
- Semantic landmarks, keyboard navigation, visible focus, and descriptive
  accessible names.
- Replace illustrative stock photos with approved company photography when
  available.

## Delivery plan

1. **Foundation and public homepage** — Vite/React/TypeScript, shared shell,
   visual system, responsive homepage and motion. In progress.
2. **Public content modules** — About, service/product detail, projects,
   insights, team, careers, contact, and legal pages with approved content.
3. **API foundation** — Express/TypeScript modular monolith, environment
   configuration, MongoDB, validation, logging, errors, security and API docs.
4. **CMS and authentication** — Cookie-based authentication, RBAC, admin
   features, audit logs, media, SEO and content workflows.
5. **Integration and operations** — Enquiry/email integration, tests, Docker,
   CI/CD, deployment, backups, monitoring and security/accessibility review.

Each phase should be built and verified before the next. Backend/CMS modules,
deployment, and real data are not part of the current frontend increment.

## Frontend development

```sh
cd frontend
npm install
npm run dev
npm run lint
npm run build
```

See [frontend/README.md](./frontend/README.md) for frontend-specific details.
