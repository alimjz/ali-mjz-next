import { notFound } from "next/navigation";
import { AmbientParallax } from "../ambient-parallax";
import { ContactPageContent, SiteFooter, SiteHeader } from "../components";
import { dictionaries, hasLocale } from "../dictionaries";

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  return (
    <main className="brand-shell">
      <AmbientParallax />
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-12 pt-6 sm:px-10 lg:px-12">
        <SiteHeader locale={lang} path="/contact" />
        <ContactPageContent locale={lang} />
        <SiteFooter dict={dictionaries[lang]} />
      </section>
    </main>
  );
}
