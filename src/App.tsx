import { Box } from '@chakra-ui/react';
import { theme } from './main';
import { Route, Routes } from 'react-router-dom';
import Root from './pages/Root';
import About from './pages/About';
import Navbar from './components/Navbar';

export default function App() {
	return (
		<Box
			gap='2em'
			bgColor={theme.colors.blue.custom}
			minH='100vh'
			maxW='100vw'
			px='1.5em'
			py='1em'
		>
			<Navbar />
			<Routes>
				<Route path='/' element={<Root />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</Box>
	);
}
