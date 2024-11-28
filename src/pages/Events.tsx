import { Grid } from "@chakra-ui/react";
import InstagramContent from "../components/InstagramContent";

export default function Events() {
	return (
		<Grid
			gap="4em"
			color="white"
			px={{ base: "1.5em", md: "3em" }}
			py="2em"
		>
			<InstagramContent />
		</Grid>
	);
}
