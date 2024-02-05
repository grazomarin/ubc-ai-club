import { useRef, useState } from 'react';
import {
	useDisclosure,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	Box,
	Heading,
} from '@chakra-ui/react';
import Hamburger from 'hamburger-react';
import uniqid from 'uniqid';
import { theme } from '../main';

export default function Menu() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef(null);
	const [activeText, setActiveText] = useState('');

	return (
		<>
			<Box zIndex={1401} ref={btnRef}>
				<Hamburger
					color='white'
					rounded
					toggled={isOpen}
					toggle={() => (isOpen ? onClose() : onOpen())}
				/>
			</Box>
			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={onClose}
				finalFocusRef={btnRef}
				size='full'
			>
				<DrawerOverlay backdropFilter='blur(8px)' />
				<DrawerContent
					display='flex'
					flexFlow='column'
					height='100%'
					opacity={0.85}
					bgColor={theme.colors.pink.custom}
				>
					{['Home', 'About', 'Events', 'Projects', 'Contact Us'].map((text) => {
						return (
							<Box
								display='flex'
								key={uniqid()}
								flex={1}
								alignItems='center'
								bgColor={
									activeText === text ? theme.colors.blue.custom : 'transparent'
								}
								onClick={() => setActiveText(text)}
							>
								<Heading color='white' fontSize='2.7rem' px='2rem'>
									{text}
								</Heading>
							</Box>
						);
					})}
				</DrawerContent>
			</Drawer>
		</>
	);
}
