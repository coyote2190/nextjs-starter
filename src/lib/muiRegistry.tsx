'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import muiTheme from '../styles/muiTheme';

export const StyledComponentsRegistryMui = ({ children }: { children: React.ReactNode }) => (
  // <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
  <ThemeProvider theme={muiTheme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    {children}
  </ThemeProvider>
  // </NextAppDirEmotionCacheProvider>
);

export default StyledComponentsRegistryMui;
