import {
    createLocalizedPathnamesNavigation,
    Pathnames
  } from 'next-intl/navigation';
   
  export const locales = ['en', 'de'] as const;
   
  // The `pathnames` object holds pairs of internal
  // and external paths, separated by locale.
  export const pathnames = {
    // If all locales use the same pathname, a
    // single external path can be provided.
    '/': '/',
    '/search/[...filters]': '/search/[...filters]',
    '/product/[slug]': '/product/[slug]',
   
    
  } satisfies Pathnames<typeof locales>;
   
  export const {Link, redirect, usePathname, useRouter} =
    createLocalizedPathnamesNavigation({locales, pathnames});