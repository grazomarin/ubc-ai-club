import { useState } from "react";
import { Box, Heading, Collapse } from "@chakra-ui/react";
import uniqid from "uniqid";
import { Link, useLocation } from "react-router-dom";

// @ts-expect-error - no ts types for these
export default function Menu({ isOpen, onClose }) {
	const { pathname } = useLocation();
	const [activePath, setActiveText] = useState(pathname);
	const navigation = [
		{
			title: "<Home />",
			path: "/",
		},
		{
			title: "<About />",
			path: "/about",
		},
		{
			title: "<Events />",
			path: "/events",
		},
		{
			title: "<Projects />",
			path: "/projects",
		},
		{
			title: "<Contact Us />",
			path: "/contact",
		},
	];

	return (
		<Box
			backgroundImage="radial-gradient(circle at center, #0000 1px, pink.500.100 1px)"
			backgroundSize="4px 4px"
			backdropFilter="blur(10px)"
			top={{ base: "0", sm: "100%" }}
			position="absolute"
			width="100%"
		>
			<Collapse
				in={isOpen}
				animateOpacity
				unmountOnExit
			>
				<Box
					height={{ base: "100vh", sm: "auto" }}
					display="grid"
					gridAutoRows={{ base: "1fr", sm: "100px" }}
					placeItems="center stretch"
				>
					{navigation.map(({ title, path }) => {
						return (
							<Box
								position="relative"
								height="100%"
								width="100%"
								display="flex"
								alignItems="center"
								as={Link}
								to={path}
								key={uniqid()}
								bgColor={activePath === path ? "blue.500.100" : "transparent"}
								onClick={() => {
									setActiveText(path);
									onClose();
								}}
								sx={{
									"&:hover": {
										bgColor: "blue.500.100",
									},
								}}
							>
								<Heading
									color="white"
									px="2rem"
								>
									{title}
								</Heading>
							</Box>
						);
					})}
				</Box>
			</Collapse>
		</Box>
	);
}
