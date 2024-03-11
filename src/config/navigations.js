import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

// Default

export const pathnames = {
  "/": "/",
  "/xizmatlar": "/xizmatlar",
  "/xizmatlar/[pathname]": "/xizmatlar/[pathname]",
};
export const locales = ["uz", "ru"];
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ pathnames, locales });
