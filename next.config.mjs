import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '193.164.18.134',
			},
			{
				protocol: 'https',
				hostname: '193.124.115.127',
			},
			{
				protocol: 'https',
				hostname: '193.124.115.127',
			},
			{
				protocol: 'https',
				hostname: '193.124.115.127',
			},
			{
				protocol: 'https',
				hostname: 'loremflickr.com',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'plus.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'shohruhbekk.pythonanywhere.com',
			},
		],
	},
}

export default withNextIntl(nextConfig)
