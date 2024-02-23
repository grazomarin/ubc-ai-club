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
import { Link, useLocation } from 'react-router-dom';

// @ts-expect-error - no ts types for these
export default function Menu({ isOpen, onClose }) {
	const { pathname } = useLocation();
	const [activePath, setActiveText] = useState(pathname);
	const navigation = [
		{
			title: '<Home />',
			path: '/',
		},
		{
			title: '<About />',
			path: '/about',
		},
		{
			title: '<Events />',
			path: '/events',
		},
		{
			title: '<Projects />',
			path: '/projects',
		},
		{
			title: '<Contact Us />',
			path: '/contact',
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
					{navigation.map(({ title, path }) => {
						return (
							<Box
								as={Link}
								to={path}
								display='flex'
								key={uniqid()}
								flex={1}
								alignItems='center'
								bgColor={
									activePath === path ? theme.colors.blue.main : 'transparent'
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
