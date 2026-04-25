export const locales = ['en', 'fa'] as const;

export type Locale = (typeof locales)[number];

export function hasLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export type NavItem = {
  href: string;
  label: string;
};

export type ContactLink = {
  label: string;
  href: string;
  hint: string;
  icon: 'email' | 'linkedin' | 'telegram' | 'github';
};

export type ProjectItem = {
  name: string;
  category: string;
  summary: string;
  stack: string[];
  outcome: string;
  website: string;
  websiteLabel: string;
  thumbnailLabel: string;
  thumbnailSrc?: string;
};

export type Dictionary = {
  dir: 'ltr' | 'rtl';
  seo: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    domain: string;
    role: string;
    availability: string;
  };
  nav: {
    localeLabel: string;
    items: NavItem[];
    primaryCta: string;
  };
  home: {
    kicker: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    highlights: string[];
  };
  stats: Array<{
    value: string;
    label: string;
  }>;
  expertise: {
    kicker: string;
    title: string;
    intro: string;
    items: Array<{
      title: string;
      text: string;
    }>;
  };
  services: {
    kicker: string;
    title: string;
    intro: string;
    items: Array<{
      title: string;
      text: string;
    }>;
  };
  process: {
    kicker: string;
    title: string;
    steps: Array<{
      title: string;
      text: string;
    }>;
  };
  strengths: {
    kicker: string;
    title: string;
    items: string[];
  };
  aboutPage: {
    kicker: string;
    title: string;
    intro: string;
    paragraphs: string[];
  };
  projectsPage: {
    kicker: string;
    title: string;
    intro: string;
    featuredLabel: string;
    items: ProjectItem[];
  };
  contactPage: {
    kicker: string;
    title: string;
    intro: string;
    availability: string;
    links: ContactLink[];
  };
  homeProjects: {
    kicker: string;
    title: string;
    intro: string;
    cta: string;
  };
  homeContact: {
    kicker: string;
    title: string;
    text: string;
    primaryCta: string;
    secondaryCta: string;
  };
  footer: {
    text: string;
  };
};

const sharedContacts = {
  email: 'mailto:ali.mjz93@gmail.com',
  linkedin: 'http://linkedin.com/in/ali-mirzajanzadeh',
  telegram: 'https://t.me/alimjz93',
  github: 'https://github.com/alimjz/',
} as const;

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    dir: 'ltr',
    seo: {
      title: 'Ali Mirzajanzadeh | Freelance Backend & Full-Stack Developer',
      description:
        'Premium bilingual portfolio for Ali Mirzajanzadeh, freelance developer focused on Java, Spring Boot, PostgreSQL, NoSQL, scalable systems, and premium websites.',
    },
    brand: {
      name: 'Ali Mirzajanzadeh',
      domain: 'alimjz.me',
      role: 'Freelance backend and full-stack developer',
      availability: 'Available for selected freelance projects',
    },
    nav: {
      localeLabel: 'فارسی',
      items: [
        { href: '/en', label: 'Home' },
        { href: '/en/about', label: 'About' },
        { href: '/en/projects', label: 'Projects' },
        { href: '/en/contact', label: 'Contact' },
      ],
      primaryCta: 'Start a project',
    },
    home: {
      kicker: 'Java, scalable systems, and premium web experiences',
      title:
        'I design and build software that feels credible on day one and scales with the business behind it.',
      subtitle:
        'I help startups, product teams, and ambitious brands launch reliable backend systems and polished websites with strong engineering, premium presentation, and practical delivery.',
      primaryCta: 'Discuss your project',
      secondaryCta: 'View recent work',
      highlights: [
        'Java and Spring Boot architecture',
        'PostgreSQL and NoSQL data design',
        'High-scale platform thinking',
        'Website design and development',
      ],
    },
    stats: [
      { value: 'Java + Spring', label: 'Backend systems for production' },
      { value: 'Postgres / NoSQL', label: 'Data models for real traffic' },
      { value: 'High Scale', label: 'Architecture prepared for growth' },
      { value: 'Design to Launch', label: 'Strong product presentation' },
    ],
    expertise: {
      kicker: 'Expertise',
      title: 'Technical depth with product-facing execution',
      intro:
        'I work across backend architecture, data systems, and modern web delivery, with a focus on building products that look professional and stay dependable as they grow.',
      items: [
        {
          title: 'Backend engineering',
          text: 'Java and Spring Boot services with clean APIs, maintainable code, and strong system boundaries.',
        },
        {
          title: 'Data architecture',
          text: 'PostgreSQL-first design plus NoSQL when scale, speed, or flexible access patterns require it.',
        },
        {
          title: 'Scalable applications',
          text: 'Solutions shaped around throughput, reliability, observability, and future team growth.',
        },
        {
          title: 'Premium web delivery',
          text: 'Brand-driven websites and interfaces that communicate professionalism as clearly as the code does.',
        },
      ],
    },
    services: {
      kicker: 'Services',
      title: 'From product foundations to launch-ready websites',
      intro:
        'I can support greenfield projects, platform improvements, and premium digital presence work for founders, companies, and agencies.',
      items: [
        {
          title: 'Custom backend development',
          text: 'API design, business logic, integrations, and service architecture tailored to your product roadmap.',
        },
        {
          title: 'Scalability and refactoring',
          text: 'Performance tuning, backend cleanup, and architectural improvements for growing systems.',
        },
        {
          title: 'Website design and development',
          text: 'Professional marketing and personal-brand sites with elevated visual direction and solid frontend execution.',
        },
        {
          title: 'Technical freelance partnership',
          text: 'A hands-on collaborator who can move between implementation detail and product-level thinking.',
        },
      ],
    },
    process: {
      kicker: 'Approach',
      title: 'A working style built around clarity and momentum',
      steps: [
        {
          title: 'Understand the real problem',
          text: 'I begin with goals, constraints, users, and technical risk before choosing tools or patterns.',
        },
        {
          title: 'Shape the right technical path',
          text: 'I define an approach that balances scalability, delivery speed, and long-term maintainability.',
        },
        {
          title: 'Build with polish',
          text: 'I care about readable systems, thoughtful interfaces, and outputs that feel professional from the first release.',
        },
        {
          title: 'Prepare for what comes next',
          text: 'The final result is designed for growth, handoff, iteration, and production confidence.',
        },
      ],
    },
    strengths: {
      kicker: 'Why clients hire me',
      title: 'A mix of engineering confidence and visual credibility',
      items: [
        'Clear communication and pragmatic delivery',
        'Strong backend foundations with product awareness',
        'Attention to presentation, not just implementation',
        'Comfort moving between architecture and hands-on coding',
      ],
    },
    aboutPage: {
      kicker: 'About',
      title:
        'I build products that need both technical structure and professional presentation.',
      intro:
        'My work sits at the intersection of backend engineering, scalable architecture, and premium web execution.',
      paragraphs: [
        'I focus on turning business ideas into software that is dependable, maintainable, and ready for real users.',
        'That often means combining Java and Spring Boot backend work with database design, system thinking, and frontend delivery that reflects the quality of the product itself.',
        'For clients, that creates a more complete outcome: a product that works well under the surface and looks serious on the surface.',
      ],
    },
    projectsPage: {
      kicker: 'Projects',
      title: 'Selected work across backend systems and premium web builds',
      intro:
        'These featured project types represent the kind of work I want to be known for. Replace or refine them with your exact case studies when ready.',
      featuredLabel: 'Selected projects',
      items: [
        {
          name: 'Hesar Office Studio',
          category: 'A Design Office Automation Tools.',
          summary:
            'A Platform to manage The Business flows, Exclusive Design for Hesar Office Studio.',
          stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Next.Js'],
          outcome:
            'Built to support expanding business logic and team growth without losing structure.',
          website: 'https://hesr-office.ir',
          websiteLabel: 'Project website',
          thumbnailLabel: 'Urban planning office',
          thumbnailSrc: '/projects/hesr-office.png',
        },
      ],
    },
    contactPage: {
      kicker: 'Contact',
      title: 'Let us talk about your next build',
      intro:
        'If you need a freelance developer for backend-heavy products, scalable systems, or a premium brand website, I am open to the right conversations.',
      availability:
        'Currently open to freelance work and remote collaborations.',
      links: [
        {
          label: 'Email',
          href: sharedContacts.email,
          hint: 'ali.mjz93@gmail.com',
          icon: 'email',
        },
        {
          label: 'LinkedIn',
          href: sharedContacts.linkedin,
          hint: 'linkedin.com/in/ali-mirzajanzadeh',
          icon: 'linkedin',
        },
        {
          label: 'Telegram',
          href: sharedContacts.telegram,
          hint: '@alimjz93',
          icon: 'telegram',
        },
        {
          label: 'GitHub',
          href: sharedContacts.github,
          hint: 'github.com/alimjz',
          icon: 'github',
        },
      ],
    },
    homeProjects: {
      kicker: 'Previous projects',
      title: 'Work that combines scale, structure, and presentation',
      intro:
        'I am strongest on projects where backend reliability and product credibility matter equally.',
      cta: 'See all projects',
    },
    homeContact: {
      kicker: 'Contact',
      title:
        'Need a developer who can build the system and represent the brand well?',
      text: 'I am available for freelance collaborations involving backend engineering, scalable applications, and premium web experiences.',
      primaryCta: 'Email me',
      secondaryCta: 'Open contact page',
    },
    footer: {
      text: 'Ali Mirzajanzadeh - Freelance Developer - Java, Spring Boot, PostgreSQL, NoSQL, scalable platforms, and premium websites',
    },
  },
  fa: {
    dir: 'rtl',
    seo: {
      title: 'علی میرزاجان‌زاده | توسعه‌دهنده فریلنسر بک‌اند و فول‌استک',
      description:
        'پورتفولیوی دو زبانه و پریمیوم علی میرزاجان‌زاده برای معرفی خدمات فریلنسری، پروژه‌ها، Java، Spring Boot، PostgreSQL، NoSQL و توسعه وب‌سایت‌های حرفه‌ای.',
    },
    brand: {
      name: 'علی میرزاجان‌زاده',
      domain: 'alimjz.me',
      role: 'توسعه‌دهنده فریلنسر بک‌اند و فول‌استک',
      availability: 'آماده همکاری در پروژه‌های فریلنسری منتخب',
    },
    nav: {
      localeLabel: 'English',
      items: [
        { href: '/fa', label: 'خانه' },
        { href: '/fa/about', label: 'درباره من' },
        { href: '/fa/projects', label: 'پروژه‌ها' },
        { href: '/fa/contact', label: 'ارتباط' },
      ],
      primaryCta: 'شروع همکاری',
    },
    home: {
      kicker: 'خدمات من',
      title:
        'طراحی و پیاده سازی نیاز شما برای نمایش حرفه و پریمیوم از کسب و کارتان',
      subtitle:
        'به استارتاپ‌ها، تیم‌های محصول و برندها کمک می‌کنم تا سیستم‌های بک‌اند قابل اعتماد و وب‌سایت‌های حرفه‌ای با ارائه قوی و اجرای فنی دقیق داشته باشند.',
      primaryCta: 'گفتگو درباره پروژه',
      secondaryCta: 'مشاهده نمونه‌کارها',
      highlights: [
        'طراحی حرفه ای سایت',
        'طراحی منطبق بر محور برند و پرسونا',
        'پیاده سازی محصول برای استارتاپ ها',
        'طراحی مدل های نگهداری داده',
        'نگاه مهندسی به مقیاس بالا',
        'اراپه راهکارهای نرم افزاری برای کسب و کارها',
      ],
    },
    stats: [
      { value: 'Java و Spring', label: 'سیستم‌های بک‌اند در سطح پروداکشن' },
      { value: 'Postgres / NoSQL', label: 'مدل‌سازی داده برای ترافیک واقعی' },
      { value: 'High Scale', label: 'معماری آماده رشد' },
      { value: 'Design to Launch', label: 'ارائه حرفه‌ای محصول' },
    ],
    expertise: {
      kicker: 'تخصص',
      title: 'عمق فنی همراه با اجرای محصول‌محور',
      intro:
        'من روی معماری بک‌اند، سیستم‌های داده و توسعه وب مدرن کار می‌کنم؛ با تمرکز بر ساخت محصولاتی که هم حرفه‌ای دیده شوند و هم در طول زمان قابل اتکا بمانند.',
      items: [
        {
          title: 'مهندسی بک‌اند',
          text: 'ساخت سرویس‌ها و APIهای مبتنی بر Java و Spring Boot با ساختار تمیز و مرزبندی درست.',
        },
        {
          title: 'معماری داده',
          text: 'طراحی بر پایه PostgreSQL و استفاده از NoSQL هرجا که مقیاس، سرعت یا انعطاف بیشتر لازم باشد.',
        },
        {
          title: 'اپلیکیشن‌های مقیاس‌پذیر',
          text: 'طراحی راه‌حل‌ها با توجه به کارایی، پایداری، مانیتورینگ و آمادگی برای رشد آینده.',
        },
        {
          title: 'طراحی وب خلاقانه',
          text: 'وب‌سایت‌ها و رابط‌هایی که حرفه‌ای بودن برند را به همان اندازه کیفیت کد نشان می‌دهند.',
        },
      ],
    },
    services: {
      kicker: 'خدمات',
      title: 'از زیرساخت محصول تا وب‌سایت آماده لانچ',
      intro:
        'می‌توانم در پروژه‌های جدید، بهبود پلتفرم‌های موجود و ساخت حضور دیجیتال حرفه‌ای برای بنیان‌گذاران، شرکت‌ها و آژانس‌ها همراه شما باشم.',
      items: [
        {
          title: 'توسعه بک‌اند سفارشی',
          text: 'طراحی API، منطق کسب‌وکار، یکپارچه‌سازی‌ها و معماری سرویس متناسب با نیاز محصول شما.',
        },
        {
          title: 'مقیاس‌پذیری و ریفکتور',
          text: 'بهبود عملکرد، پاک‌سازی بک‌اند و ارتقای معماری برای سیستم‌های در حال رشد.',
        },
        {
          title: 'طراحی و توسعه وب‌سایت',
          text: 'وب‌سایت‌های شخصی و شرکتی با هویت بصری قوی و پیاده‌سازی فرانت‌اند دقیق.',
        },
        {
          title: 'همکاری فنی فریلنسری',
          text: 'همکاری عملی و نزدیک که بین جزئیات اجرا و نگاه سطح محصول حرکت می‌کند.',
        },
      ],
    },
    process: {
      kicker: 'رویکرد',
      title: 'سبک کاری مبتنی بر شفافیت و سرعت درست',
      steps: [
        {
          title: 'درک مسئله واقعی',
          text: 'قبل از انتخاب ابزار و الگوها، هدف، محدودیت‌ها، کاربر و ریسک فنی را بررسی می‌کنم.',
        },
        {
          title: 'انتخاب مسیر فنی مناسب',
          text: 'رویکردی تعریف می‌کنم که بین مقیاس‌پذیری، سرعت تحویل و نگهداری‌پذیری تعادل داشته باشد.',
        },
        {
          title: 'ساخت با ظرافت',
          text: 'برای من هم خوانایی سیستم مهم است و هم حرفه‌ای بودن خروجی از اولین نسخه.',
        },
        {
          title: 'آماده برای مرحله بعد',
          text: 'نتیجه نهایی برای رشد، تحویل به تیم، توسعه بعدی و استقرار مطمئن آماده می‌شود.',
        },
      ],
    },
    strengths: {
      kicker: 'دلیل انتخاب من',
      title: 'ترکیب اطمینان فنی و اعتبار بصری',
      items: [
        'ارتباط شفاف و تحویل عمل‌گرا',
        'پایه فنی قوی همراه با درک محصول',
        'توجه به ارائه، نه فقط پیاده‌سازی',
        'راحتی در حرکت بین معماری و کدنویسی عملی',
      ],
    },
    aboutPage: {
      kicker: 'درباره من',
      title:
        'من محصولاتی می‌سازم که هم به ساختار فنی درست نیاز دارند و هم به ارائه حرفه‌ای.',
      intro:
        'حوزه کاری من در تقاطع مهندسی بک‌اند، معماری مقیاس‌پذیر و اجرای حرفه‌ای وب قرار دارد.',
      paragraphs: [
        'تمرکز من روی تبدیل ایده‌های کسب‌وکار به نرم‌افزارهایی است که قابل اعتماد، قابل نگهداری و آماده استفاده واقعی باشند.',
        'این یعنی ترکیب توسعه بک‌اند با Java و Spring Boot، طراحی دیتابیس، نگاه سیستمی و تحویل فرانت‌اندی که کیفیت محصول را به خوبی نمایش دهد.',
        'برای مشتری، نتیجه یک خروجی کامل‌تر است: محصولی که هم در لایه فنی درست کار می‌کند و هم در لایه برندینگ و ارائه جدی دیده می‌شود.',
      ],
    },
    projectsPage: {
      kicker: 'پروژه‌ها',
      title:
        'نمونه‌هایی از کارهای من در بک‌اند، مقیاس‌پذیری و وب‌سایت‌های حرفه‌ای',
      intro:
        'این‌ها نمونه پروژه‌هایی هستند که نوع کار مورد علاقه و جایگاه حرفه‌ای من را نشان می‌دهند. هر زمان خواستید می‌توانیم آن‌ها را با کیس‌استادی‌های واقعی شما جایگزین کنیم.',
      featuredLabel: 'پروژه‌های منتخب',
      items: [
        {
          name: 'پلتفرم مدیریت دفاتر مهندسی و نقشه برداری',
          category: 'معماری بک اند و طراحی پریمیوم',
          summary:
            'ایجاد پلتفرم اختصاصی برای مدیریت پرونده های ثبتی املاک و تهیه سند',
          stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Next.Js'],
          outcome:
            'طراحی شده برای رشد منطق کسب‌وکار و توسعه تیم بدون از دست رفتن ساختار.',
          website: 'https://hesr-office.ir',
          websiteLabel: 'وب‌سایت پروژه',
          thumbnailLabel: 'دفتر شهرسازی',
          thumbnailSrc: '//hesr-office.png',
        },
      ],
    },
    contactPage: {
      kicker: 'ارتباط',
      title: 'برای ساخت پروژه بعدی‌تان صحبت کنیم',
      intro:
        'اگر برای یک محصول بک‌اند‌محور، سیستم مقیاس‌پذیر یا وب‌سایت حرفه‌ای به توسعه‌دهنده فریلنسر نیاز دارید، از گفتگو استقبال می‌کنم.',
      availability:
        'در حال حاضر برای همکاری فریلنسری و همکاری ریموت در دسترس هستم.',
      links: [
        {
          label: 'ایمیل',
          href: sharedContacts.email,
          hint: 'ali.mjz93@gmail.com',
          icon: 'email',
        },
        {
          label: 'لینکدین',
          href: sharedContacts.linkedin,
          hint: 'linkedin.com/in/ali-mirzajanzadeh',
          icon: 'linkedin',
        },
        {
          label: 'تلگرام',
          href: sharedContacts.telegram,
          hint: '@alimjz93',
          icon: 'telegram',
        },
        {
          label: 'گیت‌هاب',
          href: sharedContacts.github,
          hint: 'github.com/alimjz',
          icon: 'github',
        },
      ],
    },
    homeProjects: {
      kicker: 'پروژه‌های قبلی',
      title: 'کارهایی که مقیاس، ساختار و ارائه حرفه‌ای را کنار هم می‌آورند',
      intro:
        'بیشترین ارزش من در پروژه‌هایی دیده می‌شود که هم پایداری بک‌اند مهم است و هم اعتبار محصول.',
      cta: 'مشاهده همه پروژه‌ها',
    },
    homeContact: {
      kicker: 'ارتباط',
      title:
        'به توسعه دهنده حرفه ای برای خلق ایده و معرفی محصولتان نیاز دارید؟',
      text: 'برای همکاری‌های فریلنسری در حوزه بک‌اند، اپلیکیشن‌های مقیاس‌پذیر و تجربه‌های وب پریمیوم در دسترس هستم.',
      primaryCta: 'ایمیل به من',
      secondaryCta: 'صفحه ارتباط',
    },
    footer: {
      text: 'علی میرزاجان‌زاده - توسعه‌دهنده فریلنسر - Java، Spring Boot، PostgreSQL، NoSQL، پلتفرم‌های مقیاس‌پذیر و وب‌سایت‌های حرفه‌ای',
    },
  },
};

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'en' ? 'fa' : 'en';
}
