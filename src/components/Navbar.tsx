import { Box, Heading } from '@chakra-ui/react';
import Menu from './Menu';
import { theme } from '../main';

export default function Navbar() {
	return (
		<Box
			display='flex'
			justifyContent='space-between'
			alignItems='center'
			p='1.2rem'
			backgroundColor={theme.colors.pink.main}
			position='relative'
		>
			<Heading color='White' fontFamily={theme.fonts.pixel}>
				UBC AI CLUB
			</Heading>
			<Menu />
		</Box>
	);
}
