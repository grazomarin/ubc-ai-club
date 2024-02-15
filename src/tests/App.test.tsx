import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Root from '../pages/Root';

describe('Root', () => {
	it('renders home page', () => {
		const { container } = render(<Root />);
		expect(container).toMatchSnapshot();
	});
});
