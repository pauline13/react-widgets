import { fireEvent, render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
    test('should render with title', () => {
        render(<Input title="Test Title" />);
        expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    test('should display correct value', () => {
        render(<Input value="Test Value" />);
        expect(screen.getByDisplayValue('Test Value')).toBeInTheDocument();
    });

    test('should call onChange handler when value changes', () => {
        const handleChange = jest.fn();
        render(<Input value="Test Value" onChange={handleChange} />);

        const inputElement = screen.getByDisplayValue('Test Value');
        fireEvent.change(inputElement, { target: { value: 'New Value' } });

        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(handleChange).toHaveBeenCalledWith('New Value');
    });
});
