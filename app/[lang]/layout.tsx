import type { Metadata } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import "../globals.css";
import { dictionaries, hasLocale, locales } from "./dictionaries";

const vazirmatn = localFont({
  src: "../../public/fonts/Vazirmatn[wght].woff2",
  variable: "--font-vazirmatn",
  display: "swap",
  weight: "100 900",
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    return {};
  }

  const dict = dictionaries[lang];

  return {
    title: dict.seo.title,
    description: dict.seo.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = dictionaries[lang];

  return (
    <html
      lang={lang}
      dir={dict.dir}
      className={`${vazirmatn.variable} scroll-smooth`}
    >
      <body className={lang === "fa" ? "app-body locale-fa" : "app-body locale-en"}>
        {children}
      </body>
    </html>
  );
}
