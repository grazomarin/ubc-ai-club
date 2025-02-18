import { Box, Flex, Grid, Heading, Image, Text, useStyleConfig } from "@chakra-ui/react";
import { InstagramData } from "../contexts/InstagramContext";

export default function UpcomingEvents({ data }: { data: InstagramData[] }) {
	const boxButtonConfig = useStyleConfig("BoxButton", { variant: "3d" });

	const latestPost = data[0];

	return (
		<Grid
			templateRows="min-content auto"
			gap="1.5em"
		>
			<Heading>Upcoming Event</Heading>
			<Grid
				autoFlow={{ base: "row", lg: "column" }}
				templateColumns={{ base: "1fr", lg: "1fr 2fr" }}
				gap={{ base: "1.5em", lg: "2em" }}
				justifyItems={{ base: "center", lg: "start" }}
			>
				<Image
					maxHeight={{ base: "700px", lg: "auto" }}
					src={latestPost?.thumbnail_url ? latestPost?.thumbnail_url : latestPost?.media_url}
					aspectRatio={0.8}
				/>

				<Flex
					direction="column"
					gap="1.5em"
				>
					<Heading width="fit-content">Event Title</Heading>
					<Text wordBreak="break-word">{latestPost?.caption}</Text>
					<Box
						__css={boxButtonConfig}
						onClick={() => window.open("https://www.perplexity.ai/discount_code=FREEPPLXUBCAI")}
					>
						<Heading>Register Now</Heading>
					</Box>
				</Flex>
			</Grid>
		</Grid>
	);
}
