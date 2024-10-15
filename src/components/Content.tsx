import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";

const content = [
	{
		heading: "Workshops",
		text: "Our workshops teach members how to train and fine tune ML (Machine Learning) models. Through the workshop process, students will build a project to show off during a project showcase.",
		gridArea: "a",
	},
	{
		heading: "Speaker Events",
		text: "Our workshops teach members how to train and fine tune ML (Machine Learning) models. Through the workshop process, students will build a project to show off during a project showcase.",
		gridArea: "b",
	},
	{
		heading: "Discussion Events",
		text: "Our workshops teach members how to train and fine tune ML (Machine Learning) models. Through the workshop process, students will build a project to show off during a project showcase.",
		gridArea: "c",
	},
	{
		heading: "Competitions",
		text: "Our workshops teach members how to train and fine tune ML (Machine Learning) models. Through the workshop process, students will build a project to show off during a project showcase.",
		gridArea: "d",
	},
];

export default function Content() {
	return (
		<Grid
			templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
			templateRows={{ base: "repeat(4, min-content)", lg: "1fr 1fr" }}
			templateAreas={{ base: `"a" "b" "c" "d"`, lg: `"a b" "d c"` }}
			// gap={{ base: "1.5rem", lg: "0" }}
			position="relative"
		>
			{content.map((item, index) => {
				const isPink = index % 2 === 0;
				let props: Object = {};
				if (isPink) {
					props = {
						...props,
						textAlign: { base: "right", lg: "left" },
						bgColor: "pink.500.100",
					};
				}

				return (
					<GridItem
						key={index}
						area={item.gridArea}
						p="1.5rem"
						{...props}
					>
						<Heading>{item.heading}</Heading>
						<Text>{item.text}</Text>
					</GridItem>
				);
			})}
		</Grid>
	);
}

// function AnimatedContentBlock({
// 	children,
// 	isOnTheRight,
// }: {
// 	children: React.ReactNode;
// 	isOnTheRight: boolean;
// }) {
// 	const boxRef = useRef(null);
// 	const { scrollYProgress, scrollY } = useScroll({
// 		target: boxRef,
// 		offset: ["end end", "start start"],
// 	});

// 	return (
// 		<FramerBox
// 			ref={boxRef}
// 			position="relative"
// 			left={`${Number(scrollYProgress) * 100}px`}
// 			{...(isOnTheRight
// 				? {
// 						textAlign: "right",
// 						bgColor: `${theme.colors.pink.main[1]}`,
// 						mx: "-1.5rem",
// 						padding: "1.5rem",
// 					}
// 				: {})}>
// 			{children}
// 		</FramerBox>
// 	);
// }
