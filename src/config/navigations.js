import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

// Default

export const pathnames = {
  "/": "/",
  "/xizmatlar": "/xizmatlar",
  "/xizmatlar/arenda": "/xizmatlar/arenda",
  "/xizmatlar/cofe-break": "/xizmatlar/cofe-break",
  "/xizmatlar/ketrin": "/xizmatlar/ketrin",
};
export const locales = ["uz", "ru"];
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ pathnames, locales });
