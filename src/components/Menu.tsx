import { useState } from 'react';
import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	Box,
	Heading,
} from '@chakra-ui/react';
import uniqid from 'uniqid';
import { theme } from '../main';
import { Link } from 'react-router-dom';

// @ts-expect-error - no ts types for these
export default function Menu({ isOpen, onClose }) {
	const [activeText, setActiveText] = useState('<Home />');
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
			<Drawer isOpen={isOpen} onClose={onClose} placement='top' size='xs'>
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
