import { Box, Heading } from '@chakra-ui/react';
import Menu from './Menu';

export default function Navbar() {
	return (
		<Box
			display='flex'
			justifyContent='space-between'
			alignItems='center'
			paddingBottom='1.5em'
		>
			<Heading color='White'>UBC AI CLUB</Heading>
			<Menu />
		</Box>
	);
}
