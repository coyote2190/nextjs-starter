'use client';

import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/styledComponentsRegistry';
import MuiRegistry from '@/lib/muiRegistry';
import '@/styles/reset.css';
import { Provider } from 'react-redux';
import { store } from '@/store';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <MuiRegistry>
            <Provider store={store}>{children}</Provider>
          </MuiRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
