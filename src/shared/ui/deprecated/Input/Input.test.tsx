import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
    test('simple test.', () => {
        render(<Input type="text" />);
        expect(screen.getByTestId('input')).toBeInTheDocument();
    });
});
