import { Box } from '@chakra-ui/react';
import { theme } from './main';
import { Route, Routes } from 'react-router-dom';
import Root from './pages/Root';
import About from './pages/About';
import Navbar from './components/Navbar';
import Events from './pages/Events';
import { useEffect } from 'react';
import WebFont from 'webfontloader';
import { FramerBox } from './components/Framer';

export default function App() {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ['JetBrains Mono', 'Silkscreen'],
			},
		});
	}, []);

	function backgroundGlowComponent() {
		const y = Math.floor(Math.random() * screen.height);
		const x = Math.random() > 0.5 ? -100 : screen.width + 100;
		const color =
			Math.random() > 0.5 ? theme.colors.pink.light : theme.colors.blue.light;
		const minShadowBlur = screen.width * 0.1 < 180 ? 180 : screen.width * 0.18;
		const minShadowSpread =
			screen.width * 0.2 < 110 ? 110 : screen.width * 0.07;
		const maxShadowBlur = screen.width * 0.1 < 300 ? 300 : screen.width * 0.25;
		const maxShadowSpread =
			screen.width * 0.2 < 200 ? 200 : screen.width * 0.14;

		return (
			<FramerBox
				position='fixed'
				left={x}
				top={y}
				backgroundColor={color}
				animate={{
					boxShadow: [
						`0 0 ${minShadowBlur}px ${minShadowSpread}px ${color}`,
						`0 0 ${maxShadowBlur}px ${maxShadowSpread}px ${color}`,
					],
				}}
				// @ts-expect-error - framer acting weird
				transition={{
					duration: Math.random() * 2 + 1.5,
					ease: 'easeInOut',
					repeat: Infinity,
					repeatType: 'reverse',
				}}
			></FramerBox>
		);
	}

	return (
		<Box bgColor='black' minH='100vh' maxW='100vw' position='relative'>
			{backgroundGlowComponent()}
			{backgroundGlowComponent()}
			{backgroundGlowComponent()}
			<Navbar />
			<Box
				px='1.5em'
				py='1em'
				display='flex'
				flexFlow='column'
				gap='1.5em'
				position='relative'
			>
				<Routes>
					<Route path='/' element={<Root />} />
					<Route path='/about' element={<About />} />
					<Route path='/events' element={<Events />} />
				</Routes>
			</Box>
		</Box>
	);
}
