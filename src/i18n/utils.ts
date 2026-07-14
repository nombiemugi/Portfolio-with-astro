import { ui, defaultLang, type Lang } from "./ui";

export type { Lang } from "./ui";

/** Detect the locale from the current URL (/es/... -> "es", otherwise "en"). */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  if (first in ui) return first as Lang;
  return defaultLang;
}

/** Returns a translate function bound to the given locale. */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Prefix a root-relative path with the locale (English stays unprefixed). */
export function localizePath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return path === "/" ? `/${lang}/` : `/${lang}${path}`;
}

/**
 * Path of the *same* page in another locale.
 * Slugs are identical across locales, so this is a pure prefix swap.
 */
export function getAlternatePath(url: URL, targetLang: Lang): string {
  let path = url.pathname.replace(/^\/es(\/|$)/, "/");
  if (!path.startsWith("/")) path = `/${path}`;
  return localizePath(path, targetLang);
}
