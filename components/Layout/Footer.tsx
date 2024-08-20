'use client'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const Footer = () => {
	const { t } = useTranslation()
	return (
		<footer className='bg-footerColor py-9'>
			<div className='container'>
				<div>
					<ul className='grid gap-8 m md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
						<li>
							<h2>Logo</h2>
						</li>
						{/* socials */}
						<li className='flex flex-col gap-2'>
							<p className='font-thin'>{t('home.footer.socials')}</p>
							<div className='flex items-center gap-2'>
								<a href='#' target='_blank'>
									<Image
										src={'/icons/telegram.svg'}
										width={20}
										height={20}
										alt='telegram'
										className='w-[27px] h-[25px]'
									/>
								</a>
								<a href='#' target='_blank'>
									<Image
										src={'/icons/instagram.svg'}
										width={20}
										height={20}
										alt='instagram'
										className='w-[32px] h-[32px]'
									/>
								</a>
								<a href='#' target='_blank'>
									<Image
										src={'/icons/facebook.svg'}
										width={20}
										height={20}
										alt='facebook'
										className='w-[16px] h-[25px]'
									/>
								</a>
							</div>
						</li>
						{/* contact details */}
						<li className='flex flex-col gap-2'>
							<a href='tel:+998919192020' className='flex items-center gap-1'>
								<Image
									src={'/icons/phone.svg'}
									width={25}
									height={25}
									alt='phone'
								/>
								<span className='font-thin'>+998 (91) 919 20 20</span>
							</a>
							<a
								href='mailto:kamronalimov80@gmail.com'
								className='flex items-center gap-1'
							>
								<Image
									src={'/icons/email.svg'}
									width={25}
									height={25}
									alt='email'
								/>
								<span className='font-thin'>kamronalimov80@gmail.com</span>
							</a>
						</li>
						{/* address */}
						<li className='flex flex-col gap-2'>
							<p className='font-thin'>
								Toshkent shahri, Сhilanzor Yakkabog’ ko’chasi 25-uy
							</p>
							<a
								href='#'
								className='bg-white px-5 py-[10px] rounded-md flex items-center justify-center gap-1 w-fit'
							>
								<Image
									src={'/icons/map.svg'}
									width={16}
									height={19}
									alt='map'
								/>
								<span>{t('home.footer.map')}</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer
