import ImageModal from '@/components/ImageModal'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import Providers from './providers'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				<meta
					name='keywords'
					content='keytering.uz ketrin,keytering, keytering xizmati, banket,tadbir,tadbirlar,arenda, arenda posuda, catering cateyring,  keytering xizmati tashkent'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://banquet.uz/' />
				<meta property='og:title' content='banquet.uz' />
				<meta
					property='og:description'
					content="Xar xil turdagi banketlar va tadbirlarni o'tkazish xizmaltari. Tadbirlar uchun arenda xizmatlari"
				/>
				<meta
					property='og:image'
					content='https://banquet.uz/assets/images/meta.jpg'
				/>

				{/*  Twitter  */}
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://banquet.uz/' />
				<meta
					property='twitter:title'
					content='https://banquet.uz/assets/images/meta.jpg'
				/>
				<meta
					property='twitter:description'
					content="Xar xil turdagi banketlar va tadbirlarni o'tkazish xizmaltari. Tadbirlar uchun arenda xizmatlari"
				/>
				<meta
					property='twitter:image'
					content='https://banquet.uz/assets/images/meta.jpg'
				/>
			</head>
			<body className={manrope.className} suppressHydrationWarning={true}>
				<Providers>
					<Header />
					<main
						className='py-[70px]'
						style={{ minHeight: 'calc(100vh - 170px)' }}
					>
						<div className='container'>{children}</div>
						<ImageModal />
					</main>
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
export default RootLayout
