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
import { Link } from 'react-router-dom';

export default function Menu() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef(null);
	const [activeText, setActiveText] = useState('');
	const navigation = [
		{
			title: '<Home />',
			destination: '/',
		},
		{
			title: '<About />',
			destination: '/about',
		},
		{
			title: '<Events />',
			destination: '/events',
		},
		{
			title: '<Projects />',
			destination: '/projects',
		},
		{
			title: '<Contact Us />',
			destination: '/contact',
		},
	];

	return (
		<>
			<Box
				zIndex={1401}
				ref={btnRef}
				backgroundColor='blue.800'
				// rounded='16px'
				boxShadow='0px 5px 0px 0px #1a202c'
				position='relative'
				_active={{
					boxShadow: '0px 0px 0px 0px #1a202c',

					top: '5px',
				}}
			>
				<Hamburger
					color='white'
					// rounded
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
					bgColor={theme.colors.pink.main}
				>
					{navigation.map(({ title, destination }) => {
						return (
							<Box
								as={Link}
								to={destination}
								display='flex'
								key={uniqid()}
								flex={1}
								alignItems='center'
								bgColor={
									activeText === title ? theme.colors.blue.main : 'transparent'
								}
								onClick={() => {
									setActiveText(title);
									onClose();
								}}
							>
								<Heading
									color='white'
									width='100%'
									px='2rem'
									fontFamily={theme.fonts.pixel}
								>
									{title}
								</Heading>
							</Box>
						);
					})}
				</DrawerContent>
			</Drawer>
		</>
	);
}
