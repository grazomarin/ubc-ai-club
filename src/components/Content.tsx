import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import { FramerBox } from "./Framer";

const content = [
	{
		heading: "Workshops",
		text: "Our workshops teach members how to train and fine tune ML (Machine Learning) models. Through the workshop process, students will build a project to show off during a project showcase.",
	},
	{
		heading: "Speaker Events",
		text: "Our workshops teach members how to train and fine tune ML (Machine Learning) models. Through the workshop process, students will build a project to show off during a project showcase.",
	},
	{
		heading: "Discussion Events",
		text: "Our workshops teach members how to train and fine tune ML (Machine Learning) models. Through the workshop process, students will build a project to show off during a project showcase.",
	},
	{
		heading: "Competitions",
		text: "Our workshops teach members how to train and fine tune ML (Machine Learning) models. Through the workshop process, students will build a project to show off during a project showcase.",
	},
];

export default function Content() {
	return (
		<Box>
			<Grid
				templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
				templateRows={{ base: "repeat(4, min-content)", lg: "1fr 1fr" }}
				// gap={{ base: "1.5rem", lg: "0" }}
				position="relative"
			>
				{content.map((item, index) => {
					let isPink = window.innerWidth > 992 ? !(index % 3) : !(index % 2);
					let props = {};

					if (isPink) {
						props = {
							textAlign: { base: "right", lg: "left" },
							bgColor: "pink.500.100",
						};
					}

					return (
						<Box
							key={index}
							width="100%"
							p="1.5rem"
							position="relative"
							overflow="hidden"
							{...props}
						>
							<FramerBox
								width="100%"
								height="100%"
								position="absolute"
								zIndex="20"
								bgColor="purple.900"
								top="0"
								initial={{ left: 0 }}
								animate={{ left: window.innerWidth }}
								transition={{
									duration: "0.8",
									delay: `${index * 0.3}`,
									ease: "easeInOut",
									type: "tween",
								}}
								viewport={{ once: true }}
							/>

							<Heading>{item.heading}</Heading>
							<Text>{item.text}</Text>
						</Box>
					);
				})}
			</Grid>
		</Box>
	);
}
