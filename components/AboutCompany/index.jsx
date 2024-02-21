import AboutCard from '@/components/AboutCompany/AboutCard'
import { Box, Heading } from '@chakra-ui/react'

const AboutCompany = () => {
	return (
		<Box as='section' id={'about'} mt={'50px'}>
			<Heading size={'lg'}>Biz Haqimizda</Heading>
			<AboutCard />
		</Box>
	)
}

export default AboutCompany
