'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Section from '@/components/ui/section'
import { formatPhoneNumber } from '@/utils'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const Contact = () => {
	const { t } = useTranslation()
	const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
		const formattedValue = `+998 ${formatPhoneNumber(e.target.value)}`
		e.target.value = formattedValue
	}

	return (
		<Section title={t('home.navbar.contact')} id='contact'>
			<div className='flex flex-col sm:flex-row'>
				<div className='w-full sm:w-2/4'>
					<Image
						alt='call-center'
						src='/images/callcenter.jpeg'
						width={600}
						height={400}
						className='w-full h-full object-cover'
					/>
				</div>
				<div className='w-full sm:w-2/4 p-4 bg-lightGray rounded-r-md flex flex-col  gap-2 items-center justify-center'>
					<h2 className='text-xl'>{t('section.contact.title')}</h2>
					<div className='flex flex-col gap-2 max-w-[400px] w-full'>
						<Input
							placeholder={t('section.contact.input_name')}
							maxLength={18}
						/>
						<div className='flex items-center'>
							<Input
								placeholder={t('section.contact.input_phone')}
								type='tel'
								maxLength={14}
								onChange={handleChangeNumber}
							/>
						</div>
						<div className='text-end'>
							<Button className='w-fit'>Yuborish</Button>
						</div>
					</div>
				</div>
			</div>
		</Section>
	)
}

export default Contact
