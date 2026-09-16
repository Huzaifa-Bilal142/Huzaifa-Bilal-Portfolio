import { Project, WorkExperience, EducationItem, Certification, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Huzaifa Bilal',
  title: 'Software Engineer & Full-Stack Architect',
  shortBio: 'Software Engineer specializing in modern web development, advanced WordPress architecture, and Artificial Intelligence. Bridging custom CMS systems, scalable APIs, and intelligent data-driven solutions.',
  email: 'huzaifabilal1122@gmail.com',
  phone: '+92-312-8381941',
  location: 'Rawalpindi, Pakistan',
  availability: 'Available for Global Remote & High-Impact Contracts',
  linkedin: 'https://linkedin.com/in/huzaifa-bilal-6409b1417',
  portfolioUrl: 'https://huzaifas-digital-canvas.vercel.app/',
  githubUrl: 'https://github.com/Huzaifa-Bilal142',
  githubUsername: 'Huzaifa-Bilal142',
  whatsappUrl: 'https://wa.me/923128381941',
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'auctify',
    title: 'Auctify – Online Auction Web Application',
    subtitle: 'Full-Stack Real-Time Bidding & Commerce Engine',
    category: 'Full-Stack',
    featured: true,
    metrics: 'Real-Time Sync & Sub-second Bid Latency',
    description: 'A full-stack e-commerce auction platform built to facilitate live concurrent bidding, secure user authentication, and automated bidding increments.',
    detailedPoints: [
      'Engineered scalable database schemas and integrated robust APIs to handle concurrent auction sessions, automated bidding increments, and live inventory updates.',
      'Developed real-time bidding interfaces and secured transaction pipelines with responsive state management.',
      'Optimized and deployed the responsive front-end architecture via Vercel, benchmarking rendering performance and load times for high availability.'
    ],
    liveUrl: 'https://auctify-mu.vercel.app/',
    tags: ['Next.js / React', 'Real-Time APIs', 'Node.js', 'Vercel', 'Tailwind CSS', 'SQL'],
    dateRange: 'Final Year Capstone Project'
  },
  {
    id: 'biocore',
    title: 'BioCORE Sustainable Biomass & Research',
    subtitle: 'Sustainable Energy & Environmental Research Portal',
    category: 'Corporate',
    featured: true,
    metrics: 'Dynamic Social & News Aggregation',
    description: 'Specialized corporate and research platform featuring dynamic news feeds, integrated social media streams, and responsive layouts for sustainable energy initiatives.',
    detailedPoints: [
      'Architected custom post configurations and clean modular layouts for environmental research dissemination.',
      'Integrated dynamic newsfeeds and real-time social media streams.',
      'Streamlined performance for cross-browser enterprise presentation.'
    ],
    liveUrl: 'https://bio.wmcdev.nl/',
    tags: ['WordPress', 'Advanced Custom Fields', 'Tailwind/CSS', 'News Feeds', 'Responsive UI'],
    dateRange: 'Aug 2026 – Sep 2026'
  },
  {
    id: 'top-of-the-world',
    title: 'Top Of The World Digital Platform',
    subtitle: 'Modern Digital Brand & Presentation Architecture',
    category: 'Corporate',
    featured: true,
    metrics: 'Custom Typography & Container Arch',
    description: 'Dynamic digital platform featuring custom font integrations, flexible container architectures, and tailored frontend layouts for enhanced visitor engagement.',
    detailedPoints: [
      'Implemented custom web font loading and typographic hierarchy optimization.',
      'Constructed flexible modular container architectures for rapid marketing iterations.',
      'Delivered fluid micro-interactions elevating visitor engagement rates.'
    ],
    liveUrl: 'https://faith.wmcdev.nl/',
    tags: ['WordPress', 'Custom Layouts', 'CSS3 Architecture', 'Brand UI', 'Performance'],
    dateRange: 'Aug 2026 – Sep 2026'
  },
  {
    id: 'laksbouw',
    title: 'Laksbouw Construction & Finishing',
    subtitle: 'Corporate Engineering & Construction Platform',
    category: 'Corporate',
    featured: false,
    metrics: 'Precision Corporate Showcase',
    description: 'A clean, modern corporate presentation platform utilizing custom WordPress architecture, tailored CSS styling, and responsive layout structures.',
    detailedPoints: [
      'Engineered structured portfolio showcases for complex construction and renovation projects.',
      'Applied custom CSS styling and lightweight grid modules for fast mobile rendering.',
      'Enhanced client credibility through streamlined quote request pathways.'
    ],
    liveUrl: 'https://laksbouw.wmcdev.nl/',
    tags: ['WordPress', 'Custom CSS', 'Corporate CMS', 'Responsive Grid'],
    dateRange: 'Aug 2026 – Sep 2026'
  },
  {
    id: 'vetkanalen',
    title: 'Vetkanalen Reinigen Commercial Platform',
    subtitle: 'B2B Maintenance & Structured Quotations',
    category: 'Corporate',
    featured: true,
    metrics: 'High-Conversion Quotation Workflow',
    description: 'High-performance service and maintenance web application featuring structured quotation workflows, SEO optimization, and responsive design for commercial kitchen solutions.',
    detailedPoints: [
      'Constructed step-by-step interactive quotation workflows tailored to B2B clients.',
      'Conducted on-page and technical SEO optimization targeted at commercial search queries.',
      'Achieved responsive compliance across desktop, tablet, and field technician mobile devices.'
    ],
    liveUrl: 'https://veilig.wmcdev.nl/',
    secondaryUrl: 'https://vetkanalenreinigen.com/',
    tags: ['WordPress', 'Quotation Engine', 'Technical SEO', 'B2B Workflows', 'PHP'],
    dateRange: 'Aug 2026 – Sep 2026'
  },
  {
    id: 'swom',
    title: 'SWOM Accessibility & Labor Market Platform',
    subtitle: 'Inclusive Accessible Workforce Architecture',
    category: 'Corporate',
    featured: false,
    metrics: 'WCAG Accessibility & Inclusive UX',
    description: 'Developed and optimized an accessible web platform incorporating custom Elementor components, responsive grid architecture, and tailored styling to support labor market inclusion.',
    detailedPoints: [
      'Tailored accessibility compliant design elements meeting high usability standards.',
      'Built custom Elementor component extensions for dynamic vacancy presentations.',
      'Refined responsive grid systems ensuring seamless assistive technology compatibility.'
    ],
    liveUrl: 'https://swom.wmcdev.nl/',
    tags: ['Elementor', 'Accessibility (WCAG)', 'Custom Widgets', 'Social Impact'],
    dateRange: 'Jul 2026 – Aug 2026'
  },
  {
    id: 'massage-koning',
    title: 'Massage Koning E-commerce Hub',
    subtitle: 'Conversion-Focused Wellness E-Commerce Store',
    category: 'E-Commerce',
    featured: true,
    metrics: 'High-Converting Checkout Flow',
    description: 'Engineered a feature-rich wellness e-commerce store integrating secure product catalogs, responsive customer support elements, and conversion-focused UI/UX layouts.',
    detailedPoints: [
      'Integrated WooCommerce with custom product variations, attributes, and stock monitoring.',
      'Streamlined checkout funnels and mobile navigation to minimize cart abandonment.',
      'Enhanced product page performance with optimized image delivery and lazy loading.'
    ],
    liveUrl: 'https://massage.wmcdev.nl/',
    tags: ['WooCommerce', 'E-Commerce', 'Payment Gateways', 'PHP Filters', 'Conversion Rate'],
    dateRange: 'Jul 2026 – Aug 2026'
  },
  {
    id: 'maison-pure',
    title: 'Maison Pure Verkoop Platform',
    subtitle: 'Luxury Real Estate & Property Sales Showcase',
    category: 'Corporate',
    featured: false,
    metrics: 'Custom Property Filtering Engine',
    description: 'Designed and deployed a responsive real estate and property sales web platform featuring tailored layouts, custom typography integration, and optimized user workflows.',
    detailedPoints: [
      'Implemented custom real estate listing displays with filterable property parameters.',
      'Integrated bespoke high-contrast typography reflecting premium architectural design.',
      'Configured direct lead generation contact forms with instant agent routing.'
    ],
    liveUrl: 'https://masion.wmcdev.nl/',
    tags: ['WordPress', 'Real Estate CMS', 'Custom Filtering', 'Typography', 'Lead Gen'],
    dateRange: 'Jul 2026 – Aug 2026'
  },
  {
    id: 'kat-cms',
    title: 'KAT Custom CMS Architecture',
    subtitle: 'Advanced Relational Post Types & Custom Taxonomies',
    category: 'WordPress',
    featured: true,
    metrics: 'JetEngine CPT & Relational Taxonomies',
    description: 'Architected complex data structures utilizing JetEngine to build custom post types, metadata fields, and custom taxonomies, delivering a highly modular content system.',
    detailedPoints: [
      'Modelled complex relational data schemas with custom post types and custom fields.',
      'Configured dynamic query loops and custom listing templates for editors.',
      'Empowered client editorial staff to manage multifaceted data without writing code.'
    ],
    liveUrl: 'https://katdeau.nl/',
    tags: ['JetEngine', 'Advanced ACF', 'Custom Post Types', 'Taxonomies', 'PHP'],
    dateRange: 'May 2026 – Jun 2026'
  },
  {
    id: 'arcavest',
    title: 'Arcavest SEO & Front-End Optimization',
    subtitle: 'Corporate Financial Visibility & Search Engine Optimization',
    category: 'SEO',
    featured: false,
    metrics: 'Top Technical SEO & Core Web Vitals',
    description: 'Executed comprehensive end-to-end technical SEO audits and commercial keyword mapping using Rank Math, while developing custom responsive layouts.',
    detailedPoints: [
      'Implemented structured JSON-LD schema markup, canonical tag strategy, and sitemap hierarchy.',
      'Audited Core Web Vitals and eliminated render-blocking CSS/JS to maximize mobile scores.',
      'Formulated keyword ranking models aligning with high-value Dutch search intent.'
    ],
    liveUrl: 'https://arcavest.wmcdev.nl/',
    tags: ['Rank Math SEO', 'Technical Audits', 'Core Web Vitals', 'Responsive CSS', 'Schema.org'],
    dateRange: 'Mar 2026 – Apr 2026'
  },
  {
    id: 'rs-bandenservice',
    title: 'RS Bandenservice Digital Interface',
    subtitle: 'Automotive Dynamic Pricing & Service Portal',
    category: 'Corporate',
    featured: false,
    metrics: 'ACF Dynamic Pricing Matrices',
    description: 'Engineered a dynamic service portal utilizing Advanced Custom Fields (ACF) and modular front-end layouts to efficiently manage automotive service offerings and pricing matrices.',
    detailedPoints: [
      'Constructed ACF repeater matrices for real-time service tier and tire sizing calculations.',
      'Formulated an intuitive booking and inquiry flow for fast vehicle owner requests.',
      'Ensured lightweight delivery with customized styling and minimal third-party plugin bloat.'
    ],
    liveUrl: 'https://rsbandenservice.wmcdev.nl/',
    tags: ['WordPress', 'ACF Pro', 'Dynamic Pricing', 'Automotive Services', 'Mobile First'],
    dateRange: 'Jan 2026 – Apr 2026'
  },
  {
    id: 'waiserr',
    title: 'Waiserr Corporate Web Platform',
    subtitle: 'Enterprise Corporate Architecture with Advanced Caching',
    category: 'Corporate',
    featured: false,
    metrics: 'Sub-second Load Times & Clean UI',
    description: 'Developed a fully responsive, custom-designed corporate website using the WordPress ecosystem, focusing on optimized UI/UX and high-performance load times.',
    detailedPoints: [
      'Implemented advanced object caching, asset minification, and critical CSS inlining.',
      'Engineered a sleek, minimalist user interface conveying corporate authority.',
      'Maintained consistent cross-device navigation with responsive touch menus.'
    ],
    liveUrl: 'https://waiserr.nl/',
    tags: ['WordPress', 'Caching Optimization', 'CSS Refinement', 'Corporate Branding'],
    dateRange: 'Sep 2025 – Nov 2025'
  },
  {
    id: '4x4-rock-cats',
    title: '4x4 Rock Cats Community & E-commerce',
    subtitle: 'Off-Road Community Portal & Commerce Infrastructure',
    category: 'E-Commerce',
    featured: false,
    metrics: 'Custom PHP Filters & Scalable DB',
    description: 'Designed and deployed a robust digital platform incorporating custom PHP filters, scalable database architecture, and tailored CSS to support community engagement.',
    detailedPoints: [
      'Wrote custom WordPress action and filter hooks to handle custom catalog sorting and queries.',
      'Tuned database indexing to support extensive product variants and user community posts.',
      'Designed an energetic, rugged visual aesthetic tailored for 4x4 enthusiasts.'
    ],
    liveUrl: 'https://4x4rockcats.com/',
    tags: ['WooCommerce', 'Custom PHP Hooks', 'Database Architecture', 'Community Portal'],
    dateRange: 'Aug 2025 – Dec 2025'
  }
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: 'wanneeronline',
    role: 'WordPress Developer & CMS Architect',
    company: 'WanneerOnline',
    location: 'Remote, Netherlands',
    period: 'Jan 2026 – Present',
    current: true,
    description: 'Engineering and maintaining high-performance e-commerce and corporate web platforms for Dutch and European clients within the WordPress ecosystem.',
    achievements: [
      'Engineer customized e-commerce and corporate web solutions (including client platforms like babyfoonspecialist.nl, vanzantenkunstgras.nl, and regional portals) using WordPress, Elementor, ACF, and JetEngine.',
      'Manage end-to-end technical SEO audits, commercial keyword mapping, and optimization strategies using Rank Math to drive organic visibility and ranking.',
      'Develop custom PHP filters, actions, and advanced CSS configurations to deliver highly responsive, cross-platform layouts and robust digital interfaces.',
      'Collaborate remotely with international stakeholders, ensuring rapid sprint turnaround and 99.9% uptime compliance.'
    ],
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'ACF Pro', 'JetEngine', 'Rank Math SEO', 'Elementor', 'Tailwind/CSS'],
    highlightProjects: ['babyfoonspecialist.nl', 'vanzantenkunstgras.nl', 'veilig.wmcdev.nl']
  },
  {
    id: 'rankdivine',
    role: 'WordPress Developer',
    company: 'Rank Divine',
    location: 'Sargodha, Pakistan',
    period: 'Aug 2025 – Jan 2026',
    current: false,
    description: 'Developed dynamic, responsive WordPress websites, translating agency client requirements into scalable and efficient web architectures.',
    achievements: [
      'Customized themes and integrated plugins using PHP, HTML, and CSS to enhance front-end functionality, user experience, and overall site architecture.',
      'Constructed client-tailored UI modules and responsive front-end components adhering strictly to design fidelity.',
      'Reduced average page load times across client properties by 35% through asset optimization and lightweight script queuing.'
    ],
    technologies: ['WordPress', 'PHP', 'HTML5/CSS3', 'Plugin Development', 'Performance Tuning', 'Client Management'],
    highlightProjects: ['waiserr.nl', '4x4rockcats.com']
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'uos-se',
    degree: 'B.Sc. Software Engineering',
    institution: 'University of Sargodha (UOS)',
    location: 'Sargodha, Pakistan',
    period: 'Dec 2022 – Jun 2026',
    grade: 'CGPA: 3.33 / 4.00 (82.16%)',
    finalProject: {
      title: 'Auctify – Online Auction Web Application',
      description: 'A full-stack e-commerce auction platform built to facilitate live concurrent bidding, secure user authentication, and seamless inventory management.',
      liveUrl: 'https://auctify-mu.vercel.app/',
      highlights: [
        'Real-time bidding synchronization with live automated incremental bids.',
        'Scalable database schemas engineered for high-concurrency auctions.',
        'Production front-end deployed on Vercel with responsive benchmarks.'
      ]
    }
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'ibm-genai',
    title: 'Generative AI: Introduction and Applications',
    issuer: 'IBM',
    score: '80.35%',
    iconName: 'Sparkles'
  },
  {
    id: 'duke-js',
    title: 'Programming Foundations with JavaScript, HTML and CSS',
    issuer: 'Duke University',
    score: '84.17%',
    iconName: 'Code'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'CMS & WordPress Ecosystem',
    description: 'Advanced architecture, custom themes, relational fields, and high-performance setups.',
    skills: [
      { name: 'Advanced WordPress Architecture', level: 'Expert' },
      { name: 'Custom Theme & Plugin Integration', level: 'Expert' },
      { name: 'Advanced Custom Fields (ACF Pro)', level: 'Expert' },
      { name: 'JetEngine & Custom Post Types', level: 'Expert' },
      { name: 'WooCommerce E-Commerce', level: 'Advanced' },
      { name: 'Elementor Pro Builder', level: 'Expert' },
      { name: 'Technical SEO (Rank Math)', level: 'Expert' }
    ]
  },
  {
    title: 'Programming & Databases',
    description: 'Modern development technologies, clean backend routines, and relational structures.',
    skills: [
      { name: 'PHP (Custom Hooks & Filters)', level: 'Expert' },
      { name: 'JavaScript / TypeScript', level: 'Advanced' },
      { name: 'SQL & Relational Databases', level: 'Advanced' },
      { name: 'HTML5 & Modern Semantic Web', level: 'Expert' },
      { name: 'CSS3 / Tailwind CSS', level: 'Expert' },
      { name: 'REST APIs & Endpoints', level: 'Advanced' },
      { name: 'React / Next.js', level: 'Advanced' }
    ]
  },
  {
    title: 'AI & Modern Technologies',
    description: 'Integrating intelligent generative capabilities, automation, and speed optimization.',
    skills: [
      { name: 'Generative AI & LLM Workflows (IBM Cert)', level: 'Advanced' },
      { name: 'Prompt Engineering & Automation', level: 'Advanced' },
      { name: 'Vercel Deployment & CI/CD', level: 'Advanced' },
      { name: 'Core Web Vitals Optimization', level: 'Expert' },
      { name: 'Cross-Browser Accessibility (WCAG)', level: 'Advanced' }
    ]
  },
  {
    title: 'Project Leadership & Soft Skills',
    description: 'End-to-end delivery with international teams across time zones.',
    skills: [
      { name: 'End-to-End Project Lifecycle', level: 'Expert' },
      { name: 'Technical Auditing & Quality', level: 'Expert' },
      { name: 'Cross-Functional Teamwork', level: 'Expert' },
      { name: 'English (Proficient) & Urdu (Native)', level: 'Expert' },
      { name: 'Analytical Problem Solving', level: 'Expert' },
      { name: 'Agile & Remote Collaboration', level: 'Expert' }
    ]
  }
];
