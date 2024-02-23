import { AspectRatio, Box, Heading } from '@chakra-ui/react';
import Content from '../components/Content';
import { theme } from '../main';

export default function Root() {
	return (
		<>
			<AspectRatio max-width='100%' ratio={1} bgColor='white'>
				<Box>SOMETHING 3D</Box>
			</AspectRatio>

			<Box>
				<Heading color='White' pb='.5em' fontFamily={theme.fonts.pixel}>
					Latest
				</Heading>
				<AspectRatio max-width='100%' ratio={1} bgColor='white'>
					<Box>AN INSTAGRAM POST</Box>
				</AspectRatio>
			</Box>

			<Content />
		</>
	);
}
