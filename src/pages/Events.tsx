import { Grid } from "@chakra-ui/react";
import InstagramContent from "../components/InstagramContent";
import UpcomingEvents from "../components/UpcomingEvents";
import { useInstagram } from "../contexts/InstagramContext";

export default function Events() {
	const instagramData = useInstagram();

	return (
		<Grid
			gap="4em"
			color="white"
			px={{ base: "1.5em", md: "3em" }}
			py="2em"
		>
			<UpcomingEvents data={instagramData} />
			<InstagramContent data={instagramData} />
		</Grid>
	);
}
