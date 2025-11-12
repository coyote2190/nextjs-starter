'use client';

import { Lato } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Provider } from 'react-redux';
import { store } from '@/store';
import StyledComponentsRegistryMui from '@/lib/muiRegistry';
import '../styles/global.css';

const lato = Lato({
  weight: '400',
  subsets: ['latin']
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={lato.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <StyledComponentsRegistryMui>
            <Provider store={store}>{children}</Provider>
          </StyledComponentsRegistryMui>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
