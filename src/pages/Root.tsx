import { AspectRatio, Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import Content from "../components/Content";
import InstagramContent from "../components/InstagramContent";

export default function Root() {
	return (
		<Grid
			gap="1.5em"
			position="relative"
		>
			<Box
				px="1.5em"
				py="2em"
			>
				<Grid
					gap="1.5em"
					placeItems={{ base: "center", sm: "center" }}
					gridTemplateRows={{ base: "1fr min-content", sm: "1fr" }}
					gridTemplateColumns={{ base: "", sm: "1fr 2fr" }}
					gridTemplateAreas={{
						base: `"3d" "signup"`,
						sm: `"signup 3d"`,
					}}
				>
					<GridItem
						area={"3d"}
						maxW="600px"
						width="100%"
					>
						<AspectRatio
							ratio={1}
							bgColor="white"
						>
							<Box color="black">SOMETHING 3D</Box>
						</AspectRatio>
					</GridItem>

					<GridItem
						area={"signup"}
						maxW={"300px"}
						alignSelf="end"
						width="100%"
					>
						<AspectRatio
							ratio={1}
							bgColor="white"
						>
							<Box color="black">Sign Up</Box>
						</AspectRatio>
					</GridItem>
				</Grid>
			</Box>

			<Content />
			<InstagramContent />
		</Grid>
	);
}
