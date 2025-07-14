import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BugForm from '../../components/BugForm';

test('renders BugForm component', () => {
    render(<BugForm />);
    expect(screen.getByPlaceholderText(/Bug Title/i)).toBeInTheDocument();
});