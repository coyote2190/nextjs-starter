'use client';

import { Inter } from 'next/font/google';
// import StyledComponentsRegistry from '@/lib/styledComponentsRegistry';
// import MuiRegistry from '@/lib/muiRegistry';
// import '@/styles/reset.css';
// import { Provider } from 'react-redux';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Provider } from 'react-redux';
import { store } from '@/store';
import StyledComponentsRegistryMui from '@/lib/muiRegistry';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {/* <StyledComponentsRegistry>
          <MuiRegistry>
            <Provider store={store}>{children}</Provider>
          </MuiRegistry>
        </StyledComponentsRegistry> */}

        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <StyledComponentsRegistryMui>
            <Provider store={store}>
              {/* <SnackBarProvider> */}
              {/* <LoadingProvider> */}
              {children}
              {/* </LoadingProvider> */}
              {/* </SnackBarProvider> */}
            </Provider>
          </StyledComponentsRegistryMui>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
