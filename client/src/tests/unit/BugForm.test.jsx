import { render, screen } from '@testing-library/react';
import BugForm from '../../components/BugForm';

test('renders BugForm component', () => {
    render(<BugForm />);
    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
});