import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App";
import {
	createHashRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import About from "./pages/About";
import Events from "./pages/Events";
import Root from "./pages/Root";
import "@fontsource/silkscreen";
import "@fontsource-variable/jetbrains-mono";

export const theme = {
	sizes: {
		default: "2rem",
	},
	radius: {
		xl: "20px",
		l: "18px",
		m: "16px",
		s: "14px",
		xs: "12px",
	},
};

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
				Component={About}
			/>
			<Route
				path="/events"
				Component={Events}
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
			<RouterProvider router={router} />
		</ChakraProvider>
	</React.StrictMode>
);
