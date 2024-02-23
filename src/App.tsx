import { Box } from '@chakra-ui/react';
import { theme } from './main';
import { Route, Routes } from 'react-router-dom';
import Root from './pages/Root';
import About from './pages/About';
import Navbar from './components/Navbar';
import Events from './pages/Events';
import { useEffect } from 'react';
import WebFont from 'webfontloader';

export default function App() {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ['JetBrains Mono', 'Silkscreen'],
			},
		});
	}, []);

	function randomBgGlowPosition() {
		const y = Math.floor(Math.random() * screen.height);
		const x = Math.random() > 0.5 ? -100 : screen.width + 100;
		const color =
			Math.random() > 0.5 ? theme.colors.pink.main : theme.colors.blue.light;
		const shadowBlur = screen.width * 0.1 < 200 ? 200 : screen.width * 0.2;
		const shadowSpread = screen.width * 0.2 < 130 ? 130 : screen.width * 0.09;

		return (
			<Box
				position='fixed'
				left={x}
				top={y}
				backgroundColor={color}
				boxShadow={`0 0 ${shadowBlur}px ${shadowSpread}px ${color}`}
			></Box>
		);
	}

	return (
		<Box bgColor='black' minH='100vh' maxW='100vw' position='relative'>
			{randomBgGlowPosition()}
			{randomBgGlowPosition()}
			{randomBgGlowPosition()}
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
				</Routes>
			</Box>
		</Box>
	);
}
