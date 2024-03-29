import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('simple test', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');

        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
