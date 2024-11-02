import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
	const states = ["Loading", "Loading.", "Loading..", "Loading..."];
	const [state, setState] = useState(0);

	useEffect(() => {
		const id = setInterval(() => {
			setState((prev) => (prev + 1) % states.length);
		}, 500);

		return () => clearInterval(id);
	}, [state]);

	return (
		<Box
			width="100%"
			display="flex"
			justifyContent="center"
			alignItems="center"
		>
			<Heading fontSize={{ base: "2rem", sm: "3rem", md: "4rem" }}>{states[state]}</Heading>
		</Box>
	);
}
