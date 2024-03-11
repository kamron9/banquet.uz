import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/config/navigations";
// Can be imported from a shared config

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
