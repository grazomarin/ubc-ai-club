import { Box, Heading } from '@chakra-ui/react';
import Menu from '../components/Menu';

export default function Root() {
	return (
		<Box
			id='body'
			bgColor='Black'
			minH='100vh'
			minW='100vw'
			px='1.5em'
			py='1em'
		>
			<Box display='flex' justifyContent='space-between'>
				<Heading color='White'>UBC AI CLUB</Heading>
				<Menu />
			</Box>
		</Box>
	);
}
