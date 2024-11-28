import { Box, Heading, useDisclosure } from "@chakra-ui/react";
import Menu from "./Menu";
import { useRef } from "react";
import Hamburger from "hamburger-react";

export default function Navbar() {
	const { isOpen, onToggle } = useDisclosure();
	const btnRef = useRef(null);

	return (
		<>
			<Box
				position="sticky"
				top="0"
				zIndex={1400}
				height="70px"
				backgroundImage="radial-gradient(circle at center, #0000 1px, pink.500.100 1px)"
				backgroundSize="4px 4px"
			>
				<Box
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					height="100%"
					p="1.2rem"
				>
					<Heading color="white">UBC AI CLUB</Heading>
					<Box
						transform="scale(0.8)"
						ref={btnRef}
						backgroundColor="purple.600"
						boxShadow="0px 5px 0px 0px var(--chakra-colors-purple-900)"
						position="relative"
						_active={{
							boxShadow: "0px 0px 0px 0px var(--chakra-colors-purple-900)",
							top: "5px",
						}}
						onClick={onToggle}
					>
						<Hamburger
							color="white"
							toggled={isOpen}
						/>
					</Box>
				</Box>
				<Menu
					isOpen={isOpen}
					onClose={onToggle}
				/>
			</Box>
		</>
	);
}
