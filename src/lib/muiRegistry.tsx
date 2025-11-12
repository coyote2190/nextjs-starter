'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import muiTheme from '../styles/muiTheme';

export const StyledComponentsRegistryMui = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={muiTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default StyledComponentsRegistryMui;
