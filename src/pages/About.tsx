import { Heading, Text, Grid } from "@chakra-ui/react";
import { lia, kamran, oliver, ryan, vivian, alex, bradley, isha, hetav } from "../index";
import ContentImage from "../components/ContentImage";

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
			px={{ base: "1.5em", md: "3em" }}
			py="2em"
		>
			<Grid gap="2em">
				<Heading>Who are we?</Heading>

				<Text>
					At UBC AI, we strive to make UBC a leading hub for AI innovation and education in Canada.
					Our mission is to foster groundbreaking AI projects, democratize AI knowledge for all
					students, and build meaningful partnerships with student groups, industry leaders, and
					academic advisors. Through high-quality workshops, speaker events, and collaborations, we
					provide hands-on opportunities and cutting-edge insights, empowering students to
					confidently explore and innovate with AI. With a focus on impactful projects and strategic
					collaborations—like our partnership with BOLT—we are shaping a vibrant AI ecosystem that
					drives positive social and economic change while making AI accessible to everyone.
				</Text>
			</Grid>
			<Grid gap="2em">
				<Heading>What We Do?</Heading>

				<Grid gap="0.5em">
					<Heading size="lg">Learn AI, One Step at a Time</Heading>
					{[
						{
							bold: "AI for Beginners: ",
							body: "Discover the fundamentals of AI through beginner-friendly sessions. Gain a roadmap to navigate this fascinating field and build confidence with no prior experience required.",
						},
						{
							bold: "AI for Software Developers: ",
							body: "Bridge the gap between coding and AI by learning how to integrate AI tools and techniques into your development projects.",
						},
						{
							bold: "Hands-On Skill Building: ",
							body: "Participate in practical workshops that empower you to tackle real-world AI challenges.",
						},
					].map(({ bold, body }, index) => (
						<Text
							key={index}
							position="relative"
							_before={{
								position: "absolute",
								left: "-1em",
								content: "'-'",
								color: "pink.500.100",
								marginRight: "0.5em",
							}}
						>
							<strong>{bold}</strong>
							{body}
						</Text>
					))}
				</Grid>
			</Grid>
			<Grid gap="2em">
				<Heading>Workshops</Heading>

				<Grid gap="0.5em">
					<Heading size="lg">Learn AI, One Step at a Time</Heading>
					{[
						{
							bold: "AI for Beginners: ",
							body: "Discover the fundamentals of AI through beginner-friendly sessions. Gain a roadmap to navigate this fascinating field and build confidence with no prior experience required.",
						},
						{
							bold: "AI for Software Developers: ",
							body: "Bridge the gap between coding and AI by learning how to integrate AI tools and techniques into your development projects.",
						},
						{
							bold: "Hands-On Skill Building: ",
							body: "Participate in practical workshops that empower you to tackle real-world AI challenges.",
						},
					].map(({ bold, body }, index) => (
						<Text key={index}>
							<strong>{bold}</strong>
							{body}
						</Text>
					))}
				</Grid>
			</Grid>

			<Grid gap="2em">
				<Heading>Meet The Team</Heading>
				<Grid
					gridTemplateColumns={{
						base: "repeat(auto-fill, minmax(250px, 1fr))",
						lg: "repeat(auto-fill, minmax(320px, 1fr))",
					}}
				>
					{team.map(({ name, role, src }) => (
						<ContentImage
							src={src}
							key={name}
							showContentOnHover={window.innerWidth > 768}
						>
							<ContentImage.Heading text={name} />
							<ContentImage.Text text={role} />
						</ContentImage>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
}
