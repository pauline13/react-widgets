import { render, screen } from '@testing-library/react';
import Button, { ButtonTheme } from './Button';

describe('Button', () => {
    test('Render test', () => {
        render(<Button>test</Button>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });

    test('Add theme test', () => {
        render(<Button theme={ButtonTheme.ADD}>test</Button>);
        expect(screen.getByText('test')).toHaveClass('bg-success');
        expect(screen.getByText('test')).toHaveClass('text-white');
    });
});
