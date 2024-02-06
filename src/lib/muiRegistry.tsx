'use client';

import muiTheme from '@/styles/muiTheme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import * as React from 'react';

export const MuiRegistry = ({ children }: { children: React.ReactNode }) => (
  // <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
  <ThemeProvider theme={muiTheme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    {children}
  </ThemeProvider>
  // </NextAppDirEmotionCacheProvider>
);

export default MuiRegistry;
