import Link from "next/link";
import { dictionaries, getAlternateLocale, type Dictionary, type Locale } from "./dictionaries";

type LocaleLinkProps = {
  locale: Locale;
  path?: string;
};

function SocialIcon({
  kind,
}: {
  kind: "email" | "linkedin" | "telegram" | "github";
}) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "social-icon-svg",
  };

  switch (kind) {
    case "email":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M8 10v8" />
          <path d="M12 18v-4.5a2.5 2.5 0 0 1 5 0V18" />
          <circle cx="8" cy="7" r="1" fill="currentColor" stroke="none" />
          <path d="M16 10a3 3 0 0 1 3 3" />
        </svg>
      );
    case "telegram":
      return (
        <svg {...common}>
          <path d="M21 4 3 11l6 2 2 6 10-15Z" />
          <path d="m9 13 8-6" />
        </svg>
      );
    case "github":
      return (
        <svg {...common}>
          <path d="M9 18c-4 1.2-4-2-6-2" />
          <path d="M15 22v-3.1a3.4 3.4 0 0 0-1-2.6c3.3-.4 6-1.6 6-6.2a4.8 4.8 0 0 0-1.3-3.3 4.5 4.5 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6.2 0C6.6 3.3 5.6 3.6 5.6 3.6a4.5 4.5 0 0 0-.1 3.2 4.8 4.8 0 0 0-1.3 3.3c0 4.6 2.7 5.8 6 6.2a3.4 3.4 0 0 0-1 2.6V22" />
        </svg>
      );
  }
}

function ExternalContact({
  href,
  label,
  hint,
  icon,
}: {
  href: string;
  label: string;
  hint: string;
  icon: "email" | "linkedin" | "telegram" | "github";
}) {
  const external = href.startsWith("http");

  return (
    <a
      className="contact-row reveal"
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      <div className="contact-row-main">
        <span className="social-icon-shell">
          <SocialIcon kind={icon} />
        </span>
        <div>
          <p className="card-title text-base">{label}</p>
          <p className="card-copy contact-hint">{hint}</p>
        </div>
      </div>
      <span className="contact-arrow">↗</span>
    </a>
  );
}

function ProjectThumb({
  project,
}: {
  project: {
    name: string;
    thumbnailLabel: string;
    thumbnailSrc?: string;
  };
}) {
  if (project.thumbnailSrc) {
    return (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.thumbnailSrc} alt={project.name} className="project-thumbnail-image" />
      </>
    );
  }

  return (
    <div className="project-thumbnail">
      <span>{project.thumbnailLabel}</span>
    </div>
  );
}

export function LocaleSwitcher({ locale, path = "" }: LocaleLinkProps) {
  const alternate = getAlternateLocale(locale);
  const dict = dictionaries[locale];

  return (
    <Link className="secondary-button" href={`/${alternate}${path}`}>
      {dict.nav.localeLabel}
    </Link>
  );
}

export function SiteHeader({
  locale,
  path = "",
}: {
  locale: Locale;
  path?: string;
}) {
  const dict = dictionaries[locale];

  return (
    <header className="site-header reveal">
      <div className="header-rail">
        <div className="brand-lockup">
          <span className="brand-mark" />
          <div>
            <p className="brand-domain">{dict.brand.domain}</p>
            <p className="brand-role">{dict.brand.role}</p>
          </div>
        </div>

        <nav className="nav-shell">
          {dict.nav.items.map((item) => (
            <Link key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <LocaleSwitcher locale={locale} path={path} />
          <Link className="primary-button" href={`/${locale}/contact`}>
            {dict.nav.primaryCta}
          </Link>
        </div>
      </div>
    </header>
  );
}

function HeroVisual({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];

  return (
    <div className="hero-visual reveal delay-2">
      <div className="visual-noise" />
      <div className="visual-grid" />
      <div className="visual-orbit visual-orbit-a" />
      <div className="visual-orbit visual-orbit-b" />
      <div className="visual-ring visual-ring-a" />
      <div className="visual-ring visual-ring-b" />
      <div className="visual-arc visual-arc-a" />
      <div className="visual-arc visual-arc-b" />

      <div className="signal-card signal-card-main">
        <p className="signal-label">Core Stack</p>
        <p className="signal-value">Java / Spring / PostgreSQL</p>
      </div>

      <div className="signal-card signal-card-side">
        <p className="signal-label">Mode</p>
        <p className="signal-value">{dict.brand.availability}</p>
      </div>

      <div className="signal-card signal-card-bottom">
        <p className="signal-label">Focus</p>
        <p className="signal-value">Scalable systems + premium web delivery</p>
      </div>

      <div className="hero-device-frame">
        <div className="device-topline" />
        <div className="device-ui">
          <div className="ui-column ui-column-large">
            <span className="ui-kicker">System Design</span>
            <div className="ui-bar ui-bar-strong" />
            <div className="ui-bar" />
            <div className="ui-bar ui-bar-short" />
          </div>
          <div className="ui-column">
            <span className="ui-kicker">Runtime</span>
            <div className="ui-pill">Stable</div>
            <div className="ui-pill">Observed</div>
            <div className="ui-pill">Ready</div>
          </div>
        </div>
      </div>

      <div className="hero-data-ribbon">
        <span className="data-ribbon-label">Shipping robust products</span>
        <div className="data-ribbon-bars">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="signal-column">
        {dict.stats.map((item) => (
          <div key={item.label} className="metric-row">
            <span className="metric-value">{item.value}</span>
            <span className="metric-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeroPanel({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];

  return (
    <section className="hero-layout">
      <div className="hero-copy-block">
        <div className="eyebrow-chip reveal">
          <span className="eyebrow-dot" />
          {dict.home.kicker}
        </div>

        <div className="hero-text-stack reveal delay-1">
          <h1 className="hero-title">{dict.home.title}</h1>
          <p className="hero-copy max-w-2xl">{dict.home.subtitle}</p>
        </div>

        <div className="hero-actions reveal delay-2">
          <a className="primary-button" href="mailto:ali.mjz93@gmail.com">
            {dict.home.primaryCta}
          </a>
          <Link className="secondary-button" href={`/${locale}/projects`}>
            {dict.home.secondaryCta}
          </Link>
        </div>

        <div className="hero-mini-grid reveal delay-3">
          <div className="mini-panel mini-panel-wide">
            <span className="mini-label">Availability</span>
            <p className="mini-value">{dict.brand.availability}</p>
          </div>
          <div className="mini-panel">
            <span className="mini-label">Focus</span>
            <p className="mini-value">Backend / Scale / Brand</p>
          </div>
        </div>

        <div className="hero-ticker reveal delay-3">
          <div className="ticker-track">
            {[...dict.home.highlights, ...dict.home.highlights].map((item, index) => (
              <span key={`${item}-${index}`} className="ticker-item">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <HeroVisual locale={locale} />
    </section>
  );
}

export function SectionHeading({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="content-block reveal">
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
      {intro ? <p className="section-copy">{intro}</p> : null}
    </div>
  );
}

export function HomePageContent({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];
  const featuredProjects = dict.projectsPage.items.slice(0, 3);

  return (
    <>
      <HeroPanel locale={locale} />

      <section className="section-grid">
        <SectionHeading
          kicker={dict.expertise.kicker}
          title={dict.expertise.title}
          intro={dict.expertise.intro}
        />
        <div className="feature-grid">
          {dict.expertise.items.map((item, index) => (
            <article key={item.title} className={`feature-card reveal delay-${(index % 3) + 1}`}>
              <span className="feature-index">0{index + 1}</span>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-copy">{item.text}</p>
              <div className="feature-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid">
        <SectionHeading
          kicker={dict.services.kicker}
          title={dict.services.title}
          intro={dict.services.intro}
        />
        <div className="stacked-panels">
          {dict.services.items.map((item, index) => (
            <article key={item.title} className={`service-strip reveal delay-${(index % 3) + 1}`}>
              <div>
                <p className="service-index">0{index + 1}</p>
                <h3 className="card-title">{item.title}</h3>
              </div>
              <p className="card-copy service-copy">{item.text}</p>
              <div className="service-glow" />
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid">
        <SectionHeading
          kicker={dict.homeProjects.kicker}
          title={dict.homeProjects.title}
          intro={dict.homeProjects.intro}
        />
        <div className="project-stack">
          {featuredProjects.map((project, index) => (
            <article key={project.name} className={`project-card reveal delay-${(index % 3) + 1}`}>
              <div className="project-card-visual">
                <div className="project-card-grid" />
                <div className="project-card-orbit" />
                <span className="project-card-number">0{index + 1}</span>
                <div className="project-thumbnail-shell">
                  <ProjectThumb project={project} />
                </div>
                <div className="space-y-3 project-copy-shell">
                  <p className="section-kicker">{project.category}</p>
                  <h3 className="card-title">{project.name}</h3>
                  <p className="section-copy">{project.summary}</p>
                </div>
              </div>
              <div className="space-y-4 project-card-content">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="stack-pill">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="project-outcome">{project.outcome}</p>
                <a className="project-link" href={project.website}>
                  {project.websiteLabel}
                </a>
              </div>
            </article>
          ))}
          <Link className="secondary-button" href={`/${locale}/projects`}>
            {dict.homeProjects.cta}
          </Link>
        </div>
      </section>

      <section className="section-grid">
        <SectionHeading kicker={dict.process.kicker} title={dict.process.title} />
        <div className="process-shell">
          {dict.process.steps.map((step, index) => (
            <article key={step.title} className={`process-card reveal delay-${(index % 3) + 1}`}>
              <p className="process-index">0{index + 1}</p>
              <h3 className="card-title">{step.title}</h3>
              <p className="card-copy">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid">
        <SectionHeading
          kicker={dict.strengths.kicker}
          title={dict.strengths.title}
          intro={dict.aboutPage.intro}
        />
        <div className="quote-panel reveal delay-1">
          {dict.strengths.items.map((item) => (
            <div key={item} className="strength-row">
              <span className="strength-dot" />
              <p className="text-sm leading-7 text-[var(--foreground)] md:text-base">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-panel reveal">
        <div className="max-w-3xl space-y-4">
          <p className="section-kicker">{dict.homeContact.kicker}</p>
          <h3 className="footer-title">{dict.homeContact.title}</h3>
          <p className="section-copy">{dict.homeContact.text}</p>
        </div>
        <div className="hero-actions">
          <a className="primary-button" href="mailto:ali.mjz93@gmail.com">
            {dict.homeContact.primaryCta}
          </a>
          <Link className="secondary-button" href={`/${locale}/contact`}>
            {dict.homeContact.secondaryCta}
          </Link>
        </div>
      </section>
    </>
  );
}

export function GenericPageIntro({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="page-intro reveal">
      <p className="section-kicker">{kicker}</p>
      <h1 className="page-title">{title}</h1>
      <p className="hero-copy max-w-3xl">{intro}</p>
    </section>
  );
}

export function AboutPageContent({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];

  return (
    <>
      <GenericPageIntro
        kicker={dict.aboutPage.kicker}
        title={dict.aboutPage.title}
        intro={dict.aboutPage.intro}
      />
      <section className="section-grid">
        <div className="copy-panel reveal">
          {dict.aboutPage.paragraphs.map((paragraph) => (
            <p key={paragraph} className="section-copy">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="about-showcase reveal delay-1">
          <div className="portrait-frame">
            <div className="portrait-glow" />
            <div className="portrait-card">
              {/* Using a plain img here avoids the runtime optimizer issue with this user-provided JPEG asset. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/me.jpeg"
                alt="Ali Mirzajanzadeh portrait"
                className="portrait-image"
              />
            </div>
            <div className="portrait-badge">
              <span className="portrait-badge-dot" />
              Freelance developer
            </div>
            <div className="founder-card">
              <p className="section-kicker">Founder</p>
              <h3 className="card-title">{dict.brand.name}</h3>
            </div>
          </div>
          <div className="feature-grid about-feature-grid">
            {dict.expertise.items.map((item, index) => (
              <article key={item.title} className={`feature-card reveal delay-${(index % 3) + 1}`}>
                <span className="feature-index">0{index + 1}</span>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-copy">{item.text}</p>
                <div className="feature-line" />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function ProjectsPageContent({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];

  return (
    <>
      <GenericPageIntro
        kicker={dict.projectsPage.kicker}
        title={dict.projectsPage.title}
        intro={dict.projectsPage.intro}
      />
      <section className="project-stack">
        {dict.projectsPage.items.map((project, index) => (
          <article key={project.name} className={`project-card reveal delay-${(index % 3) + 1}`}>
            <div className="project-card-visual">
              <div className="project-card-grid" />
              <div className="project-card-orbit" />
              <span className="project-card-number">0{index + 1}</span>
              <div className="project-thumbnail-shell">
                <ProjectThumb project={project} />
              </div>
              <div className="space-y-3 project-copy-shell">
                <p className="section-kicker">{project.category}</p>
                <h2 className="card-title">{project.name}</h2>
                <p className="section-copy">{project.summary}</p>
              </div>
            </div>
            <div className="space-y-4 project-card-content">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="stack-pill">
                    {item}
                  </span>
                ))}
              </div>
              <p className="project-outcome">{project.outcome}</p>
              <a className="project-link" href={project.website}>
                {project.websiteLabel}
              </a>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export function ContactPageContent({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];

  return (
    <>
      <GenericPageIntro
        kicker={dict.contactPage.kicker}
        title={dict.contactPage.title}
        intro={dict.contactPage.intro}
      />
      <section className="section-grid">
        <div className="copy-panel reveal">
          <p className="section-copy">{dict.contactPage.availability}</p>
        </div>
        <div className="contact-stack">
          {dict.contactPage.links.map((link) => (
            <ExternalContact
              key={link.label}
              href={link.href}
              hint={link.hint}
              label={link.label}
              icon={link.icon}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export function SiteFooter({ dict }: { dict: Dictionary }) {
  return (
    <footer className="site-footer reveal">
      <div className="footer-line" />
      <div className="footer-socials">
        {dict.contactPage.links.map((link) => (
          <a
            key={link.label}
            className="footer-social-link"
            href={link.href}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            aria-label={link.label}
          >
            <SocialIcon kind={link.icon} />
          </a>
        ))}
      </div>
      <p>{dict.footer.text}</p>
    </footer>
  );
}
