import { useRef } from 'react';
import {
	useDisclosure,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	Box,
} from '@chakra-ui/react';
import Hamburger from 'hamburger-react';

export default function Menu() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef(null);

	return (
		<>
			<Box zIndex={1401} ref={btnRef}>
				<Hamburger
					color={isOpen ? 'black' : 'white'}
					rounded
					toggled={isOpen}
					toggle={() => (isOpen ? onClose() : onOpen())}
				/>
			</Box>
			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={onClose}
				finalFocusRef={btnRef}
				size='full'
			>
				<DrawerOverlay />
				<DrawerContent></DrawerContent>
			</Drawer>
		</>
	);
}
