import { AspectRatio, Box, Heading } from '@chakra-ui/react';
import Menu from '../components/Menu';
import Content from '../components/Content';
import { theme } from '../main';

export default function Root() {
	return (
		<Box
			id='body'
			display='flex'
			flexFlow='column'
			gap='2em'
			bgColor={theme.colors.blue.custom}
			minH='100vh'
			maxW='100vw'
			px='1.5em'
			py='1em'
		>
			<Box display='flex' justifyContent='space-between'>
				<Heading color='White'>UBC AI CLUB</Heading>
				<Menu />
			</Box>

			<AspectRatio max-width='100%' ratio={1} bgColor='white'>
				<Box>SOMETHING 3D</Box>
			</AspectRatio>

			<Box>
				<Heading color='White' pb='.5em'>
					Latest
				</Heading>
				<AspectRatio max-width='100%' ratio={1} bgColor='white'>
					<Box>AN INSTAGRAM POST</Box>
				</AspectRatio>
			</Box>

			<Content />
		</Box>
	);
}
