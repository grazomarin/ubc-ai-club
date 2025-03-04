import {
	AspectRatio,
	Box,
	Flex,
	Grid,
	GridItem,
	Heading,
	Image,
	Text,
	useStyleConfig,
} from "@chakra-ui/react";
import SlidingContent from "../components/SlidingContent";
import { instagram, linkedin, discord } from "../index";

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
	const boxButtonStyle = useStyleConfig("BoxButton", { variant: "3d" });

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
							<Box
								onClick={() =>
									window.open(
										"https://docs.google.com/forms/d/e/1FAIpQLSdG92ZgK0fgI1mhbIu8QI703t5V37xiIMq_9NRemJyGRZt8Ug/viewform?usp=pp_url"
									)
								}
								__css={boxButtonStyle}
							>
								<Heading>Join Us</Heading>
							</Box>
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
					onClick={() =>
						window.open(
							"https://docs.google.com/forms/d/e/1FAIpQLSdG92ZgK0fgI1mhbIu8QI703t5V37xiIMq_9NRemJyGRZt8Ug/viewform?usp=pp_url"
						)
					}
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
						"cursor": "pointer",
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

				<Flex
					height="48px"
					gap="1em"
					justifyContent="center"
				>
					{[
						{ source: instagram, link: "https://www.instagram.com/ubcaiclub/" },
						{ source: discord, link: "https://discord.gg/Avp2Ssdah2" },
						{ source: linkedin, link: "https://www.linkedin.com/company/ubc-ai-club/" },
					].map(({ source, link }, index) => (
						<Image
							key={index}
							src={source}
							onClick={() => window.open(link)}
							_hover={{
								cursor: "pointer",
							}}
						/>
					))}
				</Flex>
			</Grid>
		</Grid>
	);
}
