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

export interface NavLink {
  href: string;
  label: string;
  /** The visitor is on exactly this page: highlight it and render it inert. */
  isCurrent: boolean;
  /** The visitor is on a page nested under this one (e.g. a project detail
   *  page under /projects): highlight it but keep it navigable. */
  isInSection: boolean;
}

const NAV_ITEMS = [
  // `exact` stops "/" — and "/es/", which every Spanish path starts with —
  // from being treated as the parent section of the whole locale.
  { path: "/", key: "nav.home", exact: true },
  { path: "/projects", key: "nav.projects", exact: false },
  { path: "/about", key: "nav.about", exact: false },
  { path: "/contact", key: "nav.contact", exact: false },
] as const;

/**
 * Astro's `build.format: "directory"` makes every page pathname end in a slash
 * ("/projects/"), while `localizePath` returns none ("/projects"). Strip it so
 * the two are comparable.
 */
function normalizePath(path: string): string {
  return path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
}

/**
 * The header nav resolved against the current URL: localized hrefs, translated
 * labels, and which entry the visitor is currently on.
 */
export function getNavLinks(url: URL): NavLink[] {
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);
  const current = normalizePath(url.pathname);

  return NAV_ITEMS.map(({ path, key, exact }) => {
    const href = localizePath(path, lang);
    const target = normalizePath(href);

    return {
      href,
      label: t(key),
      isCurrent: current === target,
      isInSection: !exact && current.startsWith(`${target}/`),
    };
  });
}
