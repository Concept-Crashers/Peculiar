import {
  faChartLine,
  faChalkboardUser,
  faCode,
  faCompass,
  faGlobe,
  faPenRuler,
} from '@fortawesome/free-solid-svg-icons'

export const companyContact = {
  email: 'peculiartechnologies18@gmail.com',
  phones: ['+256 756 156 073', '+256 773 307 552'],
}

export const companyServices = [
  {
    slug: 'software-development',
    title: 'Software Development',
    icon: faCode,
    summary: 'We design and build custom software solutions tailored to real-world needs.',
    description:
      'From web and mobile applications to enterprise software and SaaS platforms, we develop software around practical needs. Our capabilities also include custom business tools and APIs that connect systems and services.',
    capabilities: [
      'Web applications',
      'Mobile apps for Android and iOS',
      'Enterprise software',
      'SaaS platforms',
      'Custom business tools',
      'API development and integrations',
    ],
  },
  {
    slug: 'website-design-development',
    title: 'Website Design & Development',
    icon: faGlobe,
    summary: 'Modern, responsive and accessible websites that reflect your brand.',
    description:
      'We create corporate and startup websites, product and landing pages, e-commerce platforms and CMS-based websites. We also help with redesigns, optimization, security and performance.',
    capabilities: [
      'Corporate and startup websites',
      'Product and landing pages',
      'E-commerce platforms',
      'CMS-based websites',
      'Website redesigns and optimization',
      'Security and performance',
    ],
  },
  {
    slug: 'ui-ux-product-design',
    title: 'UI/UX & Product Design',
    icon: faPenRuler,
    summary: 'We design user experiences and products people love to use.',
    description:
      'Our design capabilities span user research and testing, wireframes, prototypes and interface design. We also focus on accessibility-first design, product experience, design systems and branding.',
    capabilities: [
      'User research and testing',
      'Wireframing and prototyping',
      'Interface (UI) and UX design',
      'Accessibility-first design',
      'Design systems and branding',
    ],
  },
  {
    slug: 'it-consulting-digital-strategy',
    title: 'IT Consulting & Digital Strategy',
    icon: faCompass,
    summary: 'Helping you make smart technology decisions.',
    description:
      'We support technology planning through digital transformation strategy, system architecture and product roadmaps. This service also covers technology audits, automation and process optimization.',
    capabilities: [
      'Digital transformation strategy',
      'System architecture and planning',
      'Technology audits and automation',
      'Process optimization',
      'Product roadmaps',
    ],
  },
  {
    slug: 'data-automation-emerging-technologies',
    title: 'Data, Automation & Emerging Technologies',
    icon: faChartLine,
    summary: 'Practical capabilities across data, automation and emerging technology.',
    description:
      'We work across data management and analytics, automation solutions and system optimization. Our emerging-technology capabilities include ethical, human-focused AI-assisted tools.',
    capabilities: [
      'Data management and analytics',
      'Automation solutions',
      'Ethical, human-focused AI-assisted tools',
      'System optimization',
    ],
  },
  {
    slug: 'training-capacity-building',
    title: 'Training & Capacity Building',
    icon: faChalkboardUser,
    summary: 'Building software, design and technology skills for individuals and organizations.',
    description:
      'Training covers software development, web development bootcamps, UI/UX design, digital skills and IT fundamentals. Programs can also focus on corporate and organizational technology training.',
    capabilities: [
      'Software development training',
      'Web development bootcamps',
      'UI/UX design training',
      'Digital skills training',
      'IT and technology fundamentals',
      'Corporate and organizational technology training',
    ],
  },
] as const
