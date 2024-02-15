import { Box, Image, Heading, Text } from '@chakra-ui/react';
import aiHandSquare from '../assets/ai-hand-square.jpg';
import blankProfilePicture from '../assets/blank-profile-picture.png';
import { theme } from './../main';
import uniqid from 'uniqid';

export default function About() {
	const team = [
		{
			name: 'John Doe',
			role: 'President',
			src: blankProfilePicture,
		},
		{
			name: 'Jane Doe',
			role: 'Vice President',
			src: blankProfilePicture,
		},
	];

	return (
		<Box color='white' display='flex' flexFlow='column' gap='2rem'>
			<Heading textAlign='center' size='2xl'>
				About Us
				<Box
					p='1px'
					backgroundColor={theme.colors.pink.custom}
					rounded='20px'
					marginTop='.5rem'
				/>
			</Heading>
			<Box display='flex' justifyContent='center' width='100%'>
				<Image
					src={aiHandSquare}
					objectFit='cover'
					borderRadius='full'
					maxWidth='500px'
					width='80%'
				/>
			</Box>

			<Text fontSize='1.2rem'>
				The purpose of AMS AI Club at UBC is to teach students from all
				backgrounds how to use AI to leverage their degrees and become
				proficient in AI use. As AI continues to advance we want our club
				members to stay ahead of the curve and be confident in their future.
				That's why we aim to provide bi weekly meetings that involve workshops
				and discussions on AI developments. Our workshops are designed to give
				students the tools to build their own projects using AI. These projects
				can be showcased at the end of the term and will be a great addition to
				anyone's resume. On top of the workshops, we will also have speakers who
				work and engage with AI so our members will be able to ask questions and
				learn from industry professionals. By joining our club you will have an
				amazing opportunity to network, build AI proficiency and stay the most
				up to date with AI advancements.
			</Text>

			<Heading textAlign='center' size='2xl'>
				Meet The Team
				<Box
					p='1px'
					backgroundColor={theme.colors.pink.custom}
					rounded='20px'
					marginTop='.5rem'
				/>
			</Heading>

			{team.map(({ name, role, src }) => (
				<Box
					display='flex'
					flexFlow='column'
					alignItems='center'
					gap='.5em'
					key={uniqid()}
				>
					<Image src={src} objectFit='cover' maxWidth='500px' width='80%' />
					<Heading textAlign='center'>{name}</Heading>
					<Text textAlign='center'>{role}</Text>
				</Box>
			))}
		</Box>
	);
}
