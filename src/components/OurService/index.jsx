import ServiceList from '@/components/OurService/ServiceList'
import OurServiceModal from '@/components/modal/OurServiceModal'
import { Box, Heading } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

const OurService = () => {
	const t = useTranslations('ServicePage')
	const listLanguage = {
		ketrin: t('servislar.Ketrin'),
		arenda: t('servislar.Arenda'),
		coffee: t('servislar.Coffee'),
	}
	return (
		<Box>
			<Heading size={'lg'} mb={'30px'}>
				{t('Sarlavha')}
			</Heading>
			<ServiceList listLanguage={listLanguage} />
			<OurServiceModal />
		</Box>
	)
}

export default OurService
