import { Box, Heading, useDisclosure } from '@chakra-ui/react';
import Menu from './Menu';
import { theme } from '../main';
import { useRef } from 'react';
import Hamburger from 'hamburger-react';

export default function Navbar() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef(null);

	return (
		<>
			<Box
				display='flex'
				justifyContent='space-between'
				alignItems='center'
				p='1.2rem'
				position='fixed'
				zIndex={1400}
				width='100%'
				height='70px'
				backgroundImage={`radial-gradient(rgba(0,0,0,0) 1px, ${theme.colors.pink.main} 1px)`}
				backgroundSize='4px 4px'
			>
				<Heading color='White' fontSize='2rem' fontFamily={theme.fonts.pixel}>
					UBC AI CLUB
				</Heading>
				<Box
					transform='scale(0.8)'
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
						toggled={isOpen}
						toggle={() => (isOpen ? onClose() : onOpen())}
					/>
				</Box>
			</Box>
			<Box height='80px' p='1.2rem' />
			{/* make menu slide from the top */}
			<Menu isOpen={isOpen} onClose={onClose} />
		</>
	);
}
