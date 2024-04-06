import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header'
import OurServiceModalProvider from '@/context/OurServiceModalProvider'
import { ChakraProvider } from '@/providers/ChakraProvider'
import { Container } from '@chakra-ui/react'
import { Manrope } from 'next/font/google'

import './globals.css'

export const metadata = {
	title: 'banquet.uz',
	description:
		"Xar xil turdagi banketlar va tadbirlarni o'tkazish xizmaltari. Tadbirlar uchun arenda xizmatlari",
}

const manrope = Manrope({
	weights: ['400', '700'],
	style: 'normal',
	subsets: ['latin'],
	display: 'swap',
	variable: true,
})
export default function RootLayout({ children, params: { locale } }) {
	return (
		<html lang={locale}>
			<head>
				{/* <Primary Meta Tags */}
				<title>banquet.uz</title>
				<meta name='title' content='banquet.uz' />

				{/*  Open Graph / Facebook */}
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://banquet.uz/' />
				<meta property='og:title' content='banquet.uz' />
				<meta
					property='og:description'
					content="Xar xil turdagi banketlar va tadbirlarni o'tkazish xizmaltari. Tadbirlar uchun arenda xizmatlari"
				/>
				<meta
					property='og:image'
					content='https://metatags.io/images/meta-tags.png'
				/>

				{/*  Twitter  */}
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://banquet.uz/' />
				<meta property='twitter:title' content='banquet.uz' />
				<meta
					property='twitter:description'
					content="Xar xil turdagi banketlar va tadbirlarni o'tkazish xizmaltari. Tadbirlar uchun arenda xizmatlari"
				/>
				<meta
					property='twitter:image'
					content='https://metatags.io/images/meta-tags.png'
				/>
			</head>
			<body suppressHydrationWarning={true} className={manrope.className}>
				<ChakraProvider>
					<OurServiceModalProvider>
						<Header />
						<main className={'main'}>
							<Container maxW={'1400px'}>{children}</Container>
						</main>
						<Footer />
					</OurServiceModalProvider>
				</ChakraProvider>
			</body>
		</html>
	)
}
