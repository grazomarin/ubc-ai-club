import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Root from '../routes/root';

describe('Root', () => {
	it('renders home page', () => {
		const { container } = render(<Root />);
		expect(container).toMatchSnapshot();
	});
});
