import { useOurServiceModal } from '@/context/OurServiceModalContext'
import {
	List,
	ListItem,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

export default function OurServiceModal() {
	const { isOpen, onClose } = useOurServiceModal()
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose} size={'xl'} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Tariflar</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<List
							display={'flex'}
							gap={'20px'}
							mt={'10px'}
							flexWrap={{ base: 'wrap', md: 'nowrap' }}
							justifyContent={{ base: 'center', md: 'start' }}
						>
							<ListItem
								width={300}
								height={200}
								overflow={'hidden'}
								className={'our-service-list__item'}
								onClick={onClose}
							>
								<Link href={'/xizmatlar/oddiy'}>
									<Image
										src={'/basic.avif'}
										alt={'basic'}
										width={300}
										height={200}
										className={'service-img'}
									/>
									<Text
										as={'b'}
										fontSize={'20px'}
										position={'absolute'}
										bottom={'10px'}
										left={'10px'}
										zIndex={2}
										color={'white'}
									>
										oddiy
									</Text>
								</Link>
							</ListItem>
							<ListItem
								width={300}
								height={200}
								overflow={'hidden'}
								className={'our-service-list__item'}
								onClick={onClose}
							>
								<Link href={'/xizmatlar/standard'}>
									<Image
										src={'/standard.avif'}
										alt={'standard'}
										width={300}
										height={200}
										className={'service-img'}
									/>
									<Text
										as={'b'}
										fontSize={'20px'}
										color={'white'}
										position={'absolute'}
										bottom={'10px'}
										left={'10px'}
										zIndex={2}
									>
										standard
									</Text>
								</Link>
							</ListItem>
							<ListItem
								width={300}
								height={200}
								overflow={'hidden'}
								className={'our-service-list__item'}
								onClick={onClose}
							>
								<Link href={'/xizmatlar/premium'}>
									<Image
										src={'/premium.avif'}
										alt={'standard'}
										width={300}
										height={200}
										className={'service-img'}
									/>
									<Text
										as={'b'}
										fontSize={'20px'}
										color={'white'}
										position={'absolute'}
										bottom={'10px'}
										left={'10px'}
										zIndex={2}
									>
										premium
									</Text>
								</Link>
							</ListItem>
						</List>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}
