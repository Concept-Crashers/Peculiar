import { companyContact } from './companyInformation'

export interface PageDefinition {
  label: string
  eyebrow: string
  title: string
  description: string
  introTitle: string
  intro: string
  status: string
  needed: string[]
  blocks: {
    title: string
    description: string
    items: string[]
  }[]
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
    blocks: [
      {
        title: 'The company story',
        description: 'A clear introduction should explain what Peculiar does and why it exists, using details approved by the company.',
        items: ['Company background', 'Who the company serves', 'What it aims to make possible'],
      },
      {
        title: 'People and principles',
        description: 'The people and values behind the work belong here once names, roles and statements are confirmed.',
        items: ['Leadership profiles', 'Mission and values', 'Approved team photography'],
      },
    ],
  },
  services: {
    label: 'Services',
    eyebrow: 'Services',
    title: 'Technology services built for real-world needs.',
    description:
      'Explore software development, website design, product design, technology strategy, data and training services.',
    introTitle: 'Technology, design and skills for what comes next.',
    intro:
      'Peculiar Technologies provides services across software, web, product design, IT consulting, data, automation and technology training.',
    status: 'Explore our service areas',
    needed: [],
    blocks: [
      {
        title: 'Digital products and experiences',
        description: 'Design and development capabilities for software products and digital experiences.',
        items: ['Software development', 'Website design and development', 'UI/UX and product design'],
      },
      {
        title: 'Technology strategy and capability',
        description: 'Consulting, data, automation and training to support technology decisions and skills.',
        items: ['IT consulting and digital strategy', 'Data, automation and emerging technologies', 'Training and capacity building'],
      },
    ],
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
    blocks: [
      {
        title: 'Product catalogue',
        description: 'Product listings will be added only after the product name, ownership and current availability are confirmed.',
        items: ['Verified product name and purpose', 'Current availability', 'Approved product visuals'],
      },
      {
        title: 'Useful product details',
        description: 'Visitors should be able to understand who a product is for and where to go for access or help.',
        items: ['Intended users and verified features', 'Demo, access or pricing route', 'Support information'],
      },
    ],
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
    blocks: [
      {
        title: 'A responsible case study',
        description: 'Every project story should have clear publication permission and enough context to be useful.',
        items: ['Client approval and attribution preference', 'Challenge, scope and delivered work', 'Approved imagery and supporting detail'],
      },
      {
        title: 'Evidence behind outcomes',
        description: 'Any stated result must be verifiable, clearly attributed and presented with the right context.',
        items: ['Evidence for metrics or outcomes', 'Timeframe and relevant assumptions', 'Client review of the final story'],
      },
    ],
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
    blocks: [
      {
        title: 'Meet the team',
        description: 'The directory will introduce real colleagues only after each person approves their profile.',
        items: ['Name and current role', 'Person-approved biography', 'Portrait and publication consent'],
      },
      {
        title: 'Professional profiles',
        description: 'External profile links will be included only when verified and approved by the person represented.',
        items: ['Verified profile URLs', 'Role and expertise confirmation', 'Accessibility text for approved imagery'],
      },
    ],
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
    blocks: [
      {
        title: 'Editorial library',
        description: 'Articles will appear here after editorial review, with accurate publication details and useful reading content.',
        items: ['Original reviewed articles', 'Author, date and topic', 'Related reading and sharing image'],
      },
      {
        title: 'Editorial standards',
        description: 'The publication process should make authorship, accuracy and updates clear to readers.',
        items: ['Author review and approval', 'Fact-checking and update process', 'Publishing cadence confirmed by the company'],
      },
    ],
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
    blocks: [
      {
        title: 'Current opportunities',
        description: 'No confirmed open roles are listed on this page. A vacancy will appear only when it is approved and active.',
        items: ['Approved role and responsibilities', 'Requirements and employment terms', 'Closing date or application status'],
      },
      {
        title: 'Application information',
        description: 'Applicants should be told how their information is handled and where to direct questions.',
        items: ['Verified application route', 'Recruitment privacy notice', 'Hiring contact and process'],
      },
    ],
  },
  contact: {
    label: 'Contact',
    eyebrow: 'Start a conversation',
    title: 'Talk to Peculiar Technologies.',
    description:
      'Reach our team in Uganda by email or phone to discuss your technology needs.',
    introTitle: 'We’re ready to hear from you.',
    intro:
      'Contact Peculiar Technologies Limited by email or phone. For a faster response, include a short description of what you need.',
    status: 'Email and phone',
    needed: [],
    blocks: [
      {
        title: 'Email us',
        description: 'Send your enquiry to our team.',
        items: [companyContact.email],
      },
      {
        title: 'Call us',
        description: 'Reach us on either of our contact numbers.',
        items: companyContact.phones,
      },
    ],
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
    blocks: [
      {
        title: 'What a privacy notice must cover',
        description: 'The notice must describe the website’s real data practices, not a generic or assumed setup.',
        items: ['Data collected and purposes', 'Retention and service providers', 'Rights, requests and privacy contact'],
      },
      {
        title: 'Review before publication',
        description: 'The final text needs operational confirmation and appropriate legal review before it is relied upon.',
        items: ['Actual forms, cookies and analytics', 'Applicable legal bases and jurisdiction', 'Review date and responsible contact'],
      },
    ],
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
    blocks: [
      {
        title: 'Terms that reflect this website',
        description: 'The terms should match the company, the website’s content and the services actually offered.',
        items: ['Verified legal entity and jurisdiction', 'Website use and intellectual property', 'Relevant disclaimers and limitations'],
      },
      {
        title: 'Approval and maintenance',
        description: 'Terms require review before publication and a process for keeping them current.',
        items: ['Legal review and approval', 'Effective date and version', 'Dispute process and legal contact'],
      },
    ],
  },
}

export const featuredDestinations = [
  { title: 'Services', description: 'Explore confirmed capabilities and how they help.', href: '/services', number: '01', tone: 'blue', image: '/images/workshop.webp' },
  { title: 'Products', description: 'Learn about products when details are approved.', href: '/products', number: '02', tone: 'lime', image: '/images/workspace.webp' },
  { title: 'Projects', description: 'See case studies shared with client approval.', href: '/projects', number: '03', tone: 'peach', image: '/images/team-session.webp' },
  { title: 'Insights', description: 'Read perspectives and practical ideas.', href: '/insights', number: '04', tone: 'lavender', image: '/images/collaborative-work.webp' },
]
