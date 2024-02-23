import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';

export const theme = {
	colors: {
		blue: {
			main: '#000b39',
			light: '#001f6d',
		},
		pink: {
			main: '#9a0081',
			light: '#c700a8',
		},
	},
	sizes: {
		default: '2rem',
	},
	fonts: {
		code: 'JetBrains Mono',
		pixel: 'Silkscreen',
	},
};

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ChakraProvider resetCSS={true}>
			<HashRouter>
				<App />
			</HashRouter>
		</ChakraProvider>
	</React.StrictMode>
);
