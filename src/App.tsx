import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
	return (
		<Box
			display="grid"
			gridAutoFlow="row"
			gridAutoRows="min-content 1fr"
			bgColor="purple.900"
			minH="100vh"
			maxW="100vw"
			position="relative"
			color="white"
		>
			<Navbar />
			<Outlet />
		</Box>
	);
}

// TODO: fix inneficient memory usage
// function BackgroundGlow() {
// 	const y = Math.floor(Math.random() * screen.height);
// 	const x = Math.random() > 0.5 ? -100 : screen.width + 100;
// 	const color = Math.random() > 0.5 ? "pink.light" : "blue.light";
// 	// const minShadowBlur = screen.width * 0.1 < 180 ? 180 : screen.width * 0.18;
// 	// const minShadowSpread =
// 	// 	screen.width * 0.2 < 110 ? 110 : screen.width * 0.07;
// 	const minShadowBlur = 0;
// 	const minShadowSpread = 0;
// 	// const maxShadowBlur = screen.width * 0.1 < 300 ? 300 : screen.width * 0.25;
// 	// const maxShadowSpread =
// 	// 	screen.width * 0.2 < 200 ? 200 : screen.width * 0.14;
// 	const maxShadowBlur = screen.width * 0.1 < 200 ? 200 : screen.width * 0.18;
// 	const maxShadowSpread = screen.width * 0.2 < 150 ? 150 : screen.width * 0.12;

// 	return (
// 		<FramerBox
// 			position="fixed"
// 			left={x}
// 			top={y}
// 			backgroundColor={color}
// 			animate={{
// 				boxShadow: [
// 					`0 0 ${minShadowBlur}px ${minShadowSpread}px ${color}`,
// 					`0 0 ${maxShadowBlur}px ${maxShadowSpread}px ${color}`,
// 				],
// 			}}
// 			// @ts-expect-error - framer acting weird
// 			transition={{
// 				duration: Math.random() * 2 + 3,
// 				ease: "easeInOut",
// 				repeat: Infinity,
// 				repeatType: "reverse",
// 			}}
// 		/>
// 	);
// }
