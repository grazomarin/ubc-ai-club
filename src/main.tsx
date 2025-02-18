import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, defineStyleConfig, extendTheme } from "@chakra-ui/react";
import App from "./App";
import {
	createHashRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import "@fontsource/silkscreen";
import "@fontsource-variable/jetbrains-mono";
import LoadingScreen from "./components/LoadingScreen";
import { InstagramProvider } from "./contexts/InstagramContext";

import Root from "./pages/Root";
// import Events from "./pages/Events";
// import About from "./pages/About";
const Events = React.lazy(() => import("./pages/Events"));
const About = React.lazy(() => import("./pages/About"));

const BoxButton = defineStyleConfig({
	variants: {
		"3d": {
			placeItems: "center",
			width: "auto",
			p: "1em",
			bgColor: "purple.600",
			position: "relative",
			transition: "none",
			boxShadow: "-5px 5px var(--chakra-colors-purple-400)",
			_hover: {
				top: "2px",
				left: "-2px",
				boxShadow: "-3px 3px var(--chakra-colors-purple-400)",
				textDecoration: "none",
				cursor: "pointer",
			},
			_active: {
				"&:active": {
					top: "10px",
					left: "-10px",
					boxShadow:
						"inset -5px 5px var(--chakra-colors-purple-800), inset 5px -5px var(--chakra-colors-purple-900)",
				},
			},
		},
	},
	defaultProps: {
		variant: "3d",
	},
});

const chakraTheme = extendTheme({
	fonts: {
		heading: "Silkscreen",
		body: "JetBrains Mono Variable",
	},
	colors: {
		purple: { 600: "#3e2790", 700: "#301F70", 800: "#231650", 900: "#150d30" },
		blue: {
			500: {
				50: "#1AA3A880",
				75: "#1AA3A8bf",
				100: "#1AA3A8",
			},
		},
		pink: {
			500: {
				50: "#F5009780",
				75: "#F50097bf",
				100: "#F50097",
			},
		},
	},
	components: {
		BoxButton,
		Text: {
			baseStyle: {
				fontSize: {
					base: "s",
					sm: "lg",
					lg: "xl",
				},
			},
		},
	},
});

const router = createHashRouter(
	createRoutesFromElements(
		<Route
			path="/"
			Component={App}
		>
			<Route
				index
				Component={Root}
			/>
			<Route
				path="/about"
				element={
					<Suspense fallback={<LoadingScreen />}>
						<About />
					</Suspense>
				}
			/>
			<Route
				path="/events"
				element={
					<Suspense fallback={<LoadingScreen />}>
						<Events />
					</Suspense>
				}
			/>
			<Route
				path="/projects"
				element={<LoadingScreen />}
			/>
			<Route
				path="/contact"
				element={<LoadingScreen />}
			/>
		</Route>
	)
);

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
	<React.StrictMode>
		<ChakraProvider
			resetCSS={true}
			theme={chakraTheme}
		>
			<InstagramProvider>
				<RouterProvider router={router} />
			</InstagramProvider>
		</ChakraProvider>
	</React.StrictMode>
);
