import Footer from '@/components/Footer'
import Header from '@/components/Header'
import OurServiceModalProvider from '@/context/OurServiceModalContext'
import { ChakraProvider } from '@/providers/ChakraProvider'
import { Container } from '@chakra-ui/react'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className} suppressHydrationWarning={true}>
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
