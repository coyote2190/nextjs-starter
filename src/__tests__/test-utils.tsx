import { CssBaseline } from '@mui/material';
import { RenderResult, render } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { store } from '@/store';
import muiTheme from '@/styles/muiTheme';

export const wrapWithEveryProvider = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider theme={muiTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  </Provider>
);

export const renderWithEveryProvider = (ui: React.ReactElement): RenderResult =>
  render(ui, {
    wrapper: ({ children }) => wrapWithEveryProvider({ children })
  });
