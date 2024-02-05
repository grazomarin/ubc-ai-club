import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import { ChakraProvider } from '@chakra-ui/react';

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

const router = createHashRouter([
	{
		path: '/',
		element: <Root />,
	},
	{
		path: '/about',
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ChakraProvider resetCSS={true}>
			<RouterProvider router={router} />
		</ChakraProvider>
	</React.StrictMode>
);
