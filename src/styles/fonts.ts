import { Lato } from 'next/font/google';

export type Fonts = Record<keyof typeof fonts, string>;

export const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif']
});

const fonts = {
  lato
};

export default fonts;
