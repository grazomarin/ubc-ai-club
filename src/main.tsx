import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';

export const theme = {
	colors: {
		blue: {
			custom: '#000b39',
		},
		pink: {
			custom: '#9a0081',
		},
	},
	sizes: {
		default: '2rem',
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
