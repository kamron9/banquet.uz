import { locales, pathnames } from '@/config/navigations'
import createMiddleware from 'next-intl/middleware'
export default createMiddleware({
	locales,
	defaultLocale: 'uz',
	pathnames,
})

export const config = {
	matcher: ['/', '/(uz|ru)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
}
