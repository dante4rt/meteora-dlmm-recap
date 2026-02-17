import en from './en.json';
import id from './id.json';

export const locales = ['en', 'id'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

const translations = {
  en,
  id,
} as const;

export type Translations = typeof en;

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations[defaultLocale];
}

export function getLocaleFromUrl(url: URL): Locale {
  const segments = url.pathname.split('/').filter(Boolean);
  const firstSegment = segments[0] as Locale;
  
  if (locales.includes(firstSegment)) {
    return firstSegment;
  }
  
  return defaultLocale;
}
