import { Box, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import { lia, kamran, oliver, ryan, vivian, alex, bradley, isha, hetav } from "../index";

export default function About() {
	const team = [
		{
			name: "Lia Tulchinsky",
			role: "Founder and President",
			src: lia,
		},
		{
			name: "Kamran Huseynov",
			role: "VP of Infrastructure",
			src: kamran,
		},
		{
			name: "Oliver Luo",
			role: "VP of Engineering",
			src: oliver,
		},
		{
			name: "Ryan Saloff",
			role: "VP of Logistics",
			src: ryan,
		},
		{
			name: "Vivian Weng",
			role: "Software Developer",
			src: vivian,
		},
		{
			name: "Alexander Zhong",
			role: "Software Developer",
			src: alex,
		},
		{
			name: "Bradley Eugene",
			role: "Software Developer",
			src: bradley,
		},
		{
			name: "Isha Dau",
			role: "Logistics Coordinator",
			src: isha,
		},
		{
			name: "Hetav ...",
			role: "Advisor",
			src: hetav,
		},
	];

	return (
		<Grid
			gap="4em"
			color="white"
			px="1.5em"
			py="2em"
		>
			<Grid gap="2em">
				<Heading
					textAlign="center"
					size="2xl"
				>
					About Us
				</Heading>

				<Text>
					The purpose of AMS AI Club at UBC is to teach students from all backgrounds how to use AI
					to leverage their degrees and become proficient in AI use. As AI continues to advance we
					want our club members to stay ahead of the curve and be confident in their future. That's
					why we aim to provide bi weekly meetings that involve workshops and discussions on AI
					developments. Our workshops are designed to give students the tools to build their own
					projects using AI. These projects can be showcased at the end of the term and will be a
					great addition to anyone's resume. On top of the workshops, we will also have speakers who
					work and engage with AI so our members will be able to ask questions and learn from
					industry professionals. By joining our club you will have an amazing opportunity to
					network, build AI proficiency and stay the most up to date with AI advancements.
				</Text>
			</Grid>

			<Grid gap="2em">
				<Heading
					textAlign="center"
					size="2xl"
				>
					Meet The Team
				</Heading>

				<Grid
					gridTemplateColumns={{
						base: "repeat(auto-fill, minmax(250px, 1fr))",
						lg: "repeat(auto-fill, minmax(380px, 1fr))",
					}}
				>
					{team.map(({ name, role, src }) => (
						<GridItem key={name}>
							<Box
								bgImg={src}
								aspectRatio={1 / 1}
								objectFit="cover"
								bgPos="center"
								bgSize="cover"
								bgRepeat="no-repeat"
								position="relative"
								sx={{
									"&::after": {
										content: "''",
										position: "absolute",
										height: "100%",
										width: "100%",
										top: 0,
										left: 0,
										boxShadow: "inset 0px -120px 110px 0px var(--chakra-colors-purple-900)",
										opacity: 0,
										transition: "opacity 0.3s ease-in-out",
									},
									"&:hover::after": {
										opacity: 1,
									},
									"& .content": {
										opacity: 0,
										transition: "opacity 0.3s ease-in-out",
									},
									"&:hover .content": {
										opacity: 1,
									},
								}}
								display="flex"
								flexFlow="column"
								justifyContent="end"
								p="1rem"
							>
								<Box
									className="content"
									zIndex={2}
								>
									<Heading width="min-content">{name}</Heading>
									<Text>{role}</Text>
								</Box>
							</Box>
						</GridItem>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
}
