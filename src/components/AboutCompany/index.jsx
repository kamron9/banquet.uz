import AboutCard from '@/components/AboutCompany/AboutCard'
import { Box, Heading } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

const AboutCompany = () => {
	const t = useTranslations('IndexPage')
	return (
		<Box as='section' id={'about'} my={'80px'}>
			<Heading size={'lg'} mb={'30px'}>
				{t('bizHaqimizda')}
			</Heading>
			<AboutCard />
		</Box>
	)
}

export default AboutCompany
