import { ChakraProvider } from '@/app/ChakraProvider'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header'
import OurServiceModalProvider from '@/context/OurServiceModalProvider'
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
				{/*  Open Graph / Facebook */}
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
