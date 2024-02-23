import { Box, Heading, Text } from '@chakra-ui/react';
import { theme } from './../main';

export default function Content() {
	return (
		<Box display='flex' flexFlow='column' textColor='white' gap='1.5em'>
			<Box>
				<Heading fontFamily={theme.fonts.pixel}>Workshops</Heading>
				<Text>
					Our workshops teach members how to train and fine tune ML (Machine
					Learning) models. Through the workshop process, students will build a
					project to show off during a project showcase.
				</Text>
			</Box>
			<Box
				textAlign='right'
				bgColor={theme.colors.pink.main}
				mx='-1.5rem'
				padding='1.5rem'
			>
				<Heading fontFamily={theme.fonts.pixel}>Speaker Events</Heading>
				<Text>
					Our workshops teach members how to train and fine tune ML (Machine
					Learning) models. Through the workshop process, students will build a
					project to show off during a project showcase.
				</Text>
			</Box>
			<Box>
				<Heading fontFamily={theme.fonts.pixel}>Discussion Events</Heading>
				<Text>
					Our workshops teach members how to train and fine tune ML (Machine
					Learning) models. Through the workshop process, students will build a
					project to show off during a project showcase.
				</Text>
			</Box>
			<Box
				textAlign='right'
				bgColor={theme.colors.pink.main}
				mx='-1.5rem'
				padding='1.5rem'
			>
				<Heading fontFamily={theme.fonts.pixel}>Competitions</Heading>
				<Text>
					Our workshops teach members how to train and fine tune ML (Machine
					Learning) models. Through the workshop process, students will build a
					project to show off during a project showcase.
				</Text>
			</Box>
		</Box>
	);
}
