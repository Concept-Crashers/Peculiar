export interface PageDefinition {
  label: string
  eyebrow: string
  title: string
  description: string
  introTitle: string
  intro: string
  status: string
  needed: string[]
}

export const pageContent: Record<string, PageDefinition> = {
  about: {
    label: 'About',
    eyebrow: 'About Peculiar',
    title: 'The people and purpose behind the work.',
    description:
      'A closer look at Peculiar Technologies Limited is coming together with the company’s approved story and team details.',
    introTitle: 'A story worth telling accurately.',
    intro:
      'This page is ready for the real story: what the company believes, who it serves, how it began and where it is going.',
    status: 'Company profile in preparation',
    needed: ['Approved company overview', 'Mission, vision and values', 'Founder or leadership biographies', 'Approved team photography'],
  },
  services: {
    label: 'Services',
    eyebrow: 'Services',
    title: 'Technology services, clearly explained.',
    description:
      'Explore the capabilities Peculiar Technologies Limited offers, with scope and outcomes explained in plain language.',
    introTitle: 'Specifics make a better first conversation.',
    intro:
      'Service names, descriptions and delivery details will be published here once the company confirms its current offerings.',
    status: 'Service catalogue in preparation',
    needed: ['Confirmed service list', 'Scope and deliverables per service', 'Typical engagement process', 'Approved service imagery'],
  },
  products: {
    label: 'Products',
    eyebrow: 'Products',
    title: 'Products made for real-world needs.',
    description:
      'A home for Peculiar Technologies Limited products, with useful details about what each one does and who it serves.',
    introTitle: 'Only verified product information belongs here.',
    intro:
      'Product names, availability, features, screenshots and support details will be added when confirmed by the company.',
    status: 'Product catalogue in preparation',
    needed: ['Confirmed product names and availability', 'Feature lists and intended users', 'Approved screenshots or demos', 'Support and access information'],
  },
  projects: {
    label: 'Projects',
    eyebrow: 'Selected work',
    title: 'Work speaks best when it can be shown.',
    description:
      'Project stories will share the challenge, the work and the outcome—with client approval and evidence.',
    introTitle: 'Evidence over empty claims.',
    intro:
      'No client names, project outcomes or metrics are published until they are verified and approved for public use.',
    status: 'Approved case studies will appear here',
    needed: ['Client and publication permissions', 'Project scope and context', 'Verified outcomes and evidence', 'Approved project visuals'],
  },
  team: {
    label: 'Team',
    eyebrow: 'Our people',
    title: 'Meet the people behind Peculiar.',
    description:
      'A team page should introduce real people, their roles and what they bring to the work.',
    introTitle: 'People should be introduced by the people themselves.',
    intro:
      'Team profiles and photographs will be added once names, roles, biographies and consent are confirmed.',
    status: 'Team profiles in preparation',
    needed: ['Approved names and job titles', 'Short biographies', 'Portrait photography and consent', 'Approved social profile links'],
  },
  insights: {
    label: 'Insights',
    eyebrow: 'Ideas and perspectives',
    title: 'Notes on technology, people and possibility.',
    description:
      'A useful collection of original perspectives, practical guides and updates from Peculiar Technologies Limited.',
    introTitle: 'Useful writing takes a real point of view.',
    intro:
      'Articles will be published when there are approved authors, editorial themes and content ready to help readers.',
    status: 'The first articles are being prepared',
    needed: ['Editorial topics and publishing cadence', 'Approved authors and biographies', 'First articles and review process', 'Social sharing imagery'],
  },
  careers: {
    label: 'Careers',
    eyebrow: 'Careers',
    title: 'Build meaningful work with us.',
    description:
      'This is where confirmed opportunities, role expectations and the application process will live.',
    introTitle: 'Open roles will be listed when they are available.',
    intro:
      'No vacancy or hiring promise is implied. Role details and an application route will appear here after internal approval.',
    status: 'No confirmed vacancies published',
    needed: ['Approved open roles and requirements', 'Employment location and terms', 'Application destination and process', 'Recruitment privacy notice'],
  },
  contact: {
    label: 'Contact',
    eyebrow: 'Start a conversation',
    title: 'Tell us what you are working on.',
    description:
      'The right contact details and enquiry route are being prepared so messages reach the right person.',
    introTitle: 'A good conversation starts with the right route.',
    intro:
      'Contact channels and an enquiry form will be enabled once the company confirms its preferred contact details and response process.',
    status: 'Enquiry channel in preparation',
    needed: ['Approved business email and phone', 'Office or mailing address, if public', 'Enquiry form recipient and response expectations', 'Privacy and consent wording'],
  },
  privacy: {
    label: 'Privacy',
    eyebrow: 'Privacy',
    title: 'Your privacy deserves a clear explanation.',
    description:
      'The privacy notice will explain what information the website collects, why it is used and how to contact the company.',
    introTitle: 'Legal copy must match actual practice.',
    intro:
      'A privacy policy should not be published until data flows, retention, providers, legal basis and contact details have been reviewed.',
    status: 'Privacy notice awaits legal and operational review',
    needed: ['Data collected by site and forms', 'Purposes, legal bases and retention periods', 'Processors, analytics and cookie usage', 'Data-subject rights and privacy contact'],
  },
  terms: {
    label: 'Terms',
    eyebrow: 'Terms of use',
    title: 'Clear terms for using this website.',
    description:
      'The terms will explain the rules and limitations that apply when visitors use this website.',
    introTitle: 'Terms need to reflect the real service.',
    intro:
      'Website terms are not being fabricated. They require legal review and confirmation of the business, content and jurisdiction details.',
    status: 'Terms await legal review',
    needed: ['Legal entity and jurisdiction confirmation', 'Website use and intellectual property rules', 'Liability, warranties and dispute terms', 'Effective date and legal contact'],
  },
}

export const featuredDestinations = [
  { title: 'Services', description: 'Understand what the company can help with.', href: '/services', number: '01', tone: 'blue' },
  { title: 'Products', description: 'Explore confirmed Peculiar products.', href: '/products', number: '02', tone: 'lime' },
  { title: 'Projects', description: 'See approved work and its context.', href: '/projects', number: '03', tone: 'peach' },
  { title: 'Insights', description: 'Read practical ideas and perspectives.', href: '/insights', number: '04', tone: 'lavender' },
]
