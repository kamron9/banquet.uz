'use client'

import { navbar } from '@/constants/navbar'
import {
	Box,
	Button,
	Link as ChakraLink,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
	VStack,
	useDisclosure,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

import { useRef } from 'react'
import LanguageMenu from './LanguageMenu'

function BurgerMenu({ translates }) {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const btnRef = useRef()

	return (
		<>
			<Button
				ref={btnRef}
				variant={'ghost'}
				onClick={onOpen}
				_hover={{ background: 'transparent' }}
				transform={'rotate(180deg)'}
			>
				<Image
					src={'/assets/icons/fries-menu.svg'}
					alt='fries-menu'
					width={30}
					height={30}
				/>
			</Button>
			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />

				<DrawerContent>
					{/* drawer close btn */}
					<Box
						position={'absolute'}
						left={'-38'}
						top={5}
						onClick={onClose}
						transform={'rotate(180deg)'}
						background={'white'}
						padding={2}
						borderRadius={'50%'}
						cursor={'pointer'}
						boxShadow={'0 0 5px rgba(0,0,0,0.2)'}
					>
						<Image
							src={'/assets/icons/close.svg'}
							alt='close'
							width={20}
							height={20}
						/>
					</Box>
					<DrawerBody>
						<VStack align='center' spacing={4} p={5} mt={33}>
							{navbar.map(item => (
								<ChakraLink
									as={Link}
									key={item.id}
									href={item.path}
									fontSize='lg'
									fontWeight='bold'
									_hover={{ color: 'teal.300' }}
									onClick={e => onClose()}
									color={'gray.600'}
								>
									{translates[item.title]}
								</ChakraLink>
							))}
						</VStack>
						<VStack align='center'>
							<LanguageMenu />
						</VStack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	)
}
export default BurgerMenu
