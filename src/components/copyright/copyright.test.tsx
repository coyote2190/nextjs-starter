import { renderWithEveryProvider } from '@/__tests__/test-utils';
import { screen } from '@testing-library/react';
import Copyright from './copyright';

describe('Copyright', () => {
  it('should render Movies by getByRole', () => {
    renderWithEveryProvider(<Copyright />);

    const container = screen.queryByTestId('copyright-container');

    expect(container).toBeInTheDocument();
  });
});
