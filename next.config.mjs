import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cloudflare-ipfs.com',
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
