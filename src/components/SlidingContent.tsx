import { Box, Grid, Heading } from "@chakra-ui/react";
import { FramerBox } from "./Framer";

export default function SlidingContent({
	content,
}: {
	content: { heading: string; subHeading: string; body: React.ReactNode }[];
}) {
	return (
		<Box>
			<Grid
				templateColumns="1fr"
				autoRows="min-content"
				position="relative"
			>
				{content.map((item, index) => {
					let isPink = !(index % 2);
					let styleProps = {};
					let animationDirection = { left: -window.innerWidth };
					if (isPink) {
						styleProps = {
							textAlign: "left",
							bgColor: "pink.500.100",
						};
						animationDirection = { left: window.innerWidth };
					}

					return (
						<Box
							key={index}
							width="100%"
							py="1.5em"
							px={{ base: "1.5em", md: "3em" }}
							position="relative"
							overflow="hidden"
							textAlign="right"
							{...styleProps}
							display="grid"
							gap="1em"
						>
							<FramerBox
								width="100%"
								height="100%"
								position="absolute"
								zIndex="20"
								bgColor="purple.900"
								top="0"
								initial={{ left: 0 }}
								animate={animationDirection}
								transition={{
									duration: "0.8",
									delay: `${index * 0.3}`,
									ease: "easeInOut",
									type: "tween",
								}}
								viewport={{ once: false }}
							/>

							<Heading size="xl">{item.heading}</Heading>
							<Box
								display="grid"
								gap="0.5em"
							>
								<Heading size="lg">{item.subHeading}</Heading>
								{item.body}
							</Box>
						</Box>
					);
				})}
			</Grid>
		</Box>
	);
}
