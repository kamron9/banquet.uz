import { pathnames, locales } from "@/config/navigations";
import createMiddleware from "next-intl/middleware";
export default createMiddleware({
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale: "uz",
  pathnames,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(uz|ru)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
