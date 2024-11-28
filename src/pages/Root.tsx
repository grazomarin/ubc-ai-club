import { AspectRatio, Box, Flex, Grid, GridItem, Heading, Link, Text } from "@chakra-ui/react";
import SlidingContent from "../components/SlidingContent";

const content = [
	{
		heading: "Speaker Events",
		subHeading: "Hear from the Best in AI",
		body: (
			<Text>
				We invite top researchers and industry leaders to share their insights and experiences in
				AI. Get inspired by cutting-edge advancements and career advice from the most influential
				voices in the field.
			</Text>
		),
	},
	{
		heading: "Hackathons and Collaborations",
		subHeading: "Innovate Together",
		body: (
			<Text>
				Join forces with other UBC clubs and students in hackathons that challenge you to solve
				real-world problems with AI. Collaboration is key to sparking creativity and building
				connections across disciplines.
			</Text>
		),
	},
	{
		heading: "AI Innovation",
		subHeading: "Shaping the Future of AI at UBC",
		body: (
			<Box>
				<Text>
					This year, we're pushing boundaries with in-club innovation projects, including:
				</Text>
				<Text>
					<strong>AI Agent for Club Outreach:</strong> A tool in development to help campus clubs
					improve communication and engagement. Our goal is to make UBC a top hub for AI innovation,
					fostering groundbreaking projects and ideas.
				</Text>
			</Box>
		),
	},
];

export default function Root() {
	return (
		<Grid
			gap="1.5em"
			position="relative"
		>
			<Box
				px={{ base: "1.5em", md: "3em" }}
				py="2em"
			>
				<Grid
					gap="1.5em"
					placeItems="center"
					gridTemplateRows={{ base: "1fr min-content", md: "1fr" }}
					gridTemplateColumns={{ base: "", md: "1fr 2fr" }}
					gridTemplateAreas={{
						base: `"3d" "signup"`,
						md: `"signup 3d"`,
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

					<GridItem area={"signup"}>
						<Grid gap="1.5rem">
							<Heading>Your Edge for a Future-Ready Tomorrow</Heading>
							<Grid
								as={Link}
								href="https://docs.google.com/forms/d/e/1FAIpQLSdG92ZgK0fgI1mhbIu8QI703t5V37xiIMq_9NRemJyGRZt8Ug/viewform?usp=pp_url"
								isExternal
								bgColor="purple.600"
								color="white"
								width={{ base: "100%", md: "300px" }}
								p="1em"
								placeItems="center"
								position="relative"
								boxShadow="-5px 5px var(--chakra-colors-purple-400)"
								_hover={{
									top: "2px",
									left: "-2px",
									boxShadow: "-3px 3px var(--chakra-colors-purple-400)",
									textDecoration: "none",
								}}
								_active={{
									"&:active": {
										top: "10px",
										left: "-10px",
										boxShadow:
											"inset -5px 5px var(--chakra-colors-purple-800), inset 5px -5px var(--chakra-colors-purple-900)",
									},
								}}
							>
								<Heading>Join Us</Heading>
							</Grid>
						</Grid>
					</GridItem>
				</Grid>
			</Box>

			<SlidingContent content={content} />

			<Grid
				px={{ base: "1.5em", md: "3em" }}
				py="2em"
				gap="1.5em"
			>
				<Heading>Join Us</Heading>

				<Grid gap=".5em">
					<Heading size="lg">Be Part of the AI Revolution</Heading>
					<Text>
						Whether you're a beginner, a seasoned coder, or simply curious about AI, there's a place
						for you here. Together, we're building a vibrant community of learners, creators, and
						innovators.
					</Text>
				</Grid>
				<Grid
					as={Link}
					href="https://docs.google.com/forms/d/e/1FAIpQLSdG92ZgK0fgI1mhbIu8QI703t5V37xiIMq_9NRemJyGRZt8Ug/viewform?usp=pp_url"
					isExternal
					placeItems="center"
					px="1.5em"
					py="1em"
					position="relative"
					borderWidth="8px"
					borderStyle="dashed"
					borderColor="pink.500.100"
					transition="background-color 0.3s ease-in-out"
					_hover={{
						".hover-me": {
							visibility: "hidden",
						},
						".click-me": {
							visibility: "visible",
						},
						"borderStyle": "solid",
						"backgroundColor": "pink.500.100",
					}}
				>
					<Heading
						className="hover-me"
						color="pink.500.100"
						visibility="visible"
					>
						HOVER ME!
					</Heading>
					<Heading
						className="click-me"
						position="absolute"
						color="purple.900"
						visibility="hidden"
					>
						NOW CLICK ME!
					</Heading>
				</Grid>

				<Flex></Flex>
			</Grid>
		</Grid>
	);
}
