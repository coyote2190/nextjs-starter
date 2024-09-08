import localFont from 'next/font/local';
import { Kodchasan, Quicksand } from 'next/font/google';

export type Fonts = Record<keyof typeof fonts, string>;

export const kodchasan = Kodchasan({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif']
});

export const quicksand = Quicksand({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif']
});

// export const satoshi = localFont({
//   src: [
//     {
//       path: '../../public/fonts/Satoshi-Black.woff2',
//       weight: '900',
//       style: 'normal'
//     },
//     // {
//     //   path: '../../public/fonts/Satoshi-BlackItalic.woff2',
//     //   weight: '900',
//     //   style: 'normal'
//     // },
//     {
//       path: '../../public/fonts/Satoshi-Bold.woff2',
//       weight: '700',
//       style: 'normal'
//     },
//     // {
//     //   path: '../../public/fonts/Satoshi-BoldItalic.woff2',
//     //   weight: '700',
//     //   style: 'normal'
//     // },
//     // {
//     //   path: '../../public/fonts/Satoshi-Italic.woff2',
//     //   weight: '400',
//     //   style: 'normal'
//     // },
//     {
//       path: '../../public/fonts/Satoshi-Light.woff2',
//       weight: '300',
//       style: 'normal'
//     },
//     // {
//     //   path: '../../public/fonts/Satoshi-LightItalic.woff2',
//     //   weight: '300',
//     //   style: 'normal'
//     // },
//     {
//       path: '../../public/fonts/Satoshi-Medium.woff2',
//       weight: '500',
//       style: 'normal'
//     },
//     // {
//     //   path: '../../public/fonts/Satoshi-MediumItalic.woff2',
//     //   weight: '500',
//     //   style: 'normal'
//     // },
//     {
//       path: '../../public/fonts/Satoshi-Regular.woff2',
//       weight: '400',
//       style: 'normal'
//     }
//     // {
//     //   path: '../../public/fonts/Satoshi-Variable.woff2',
//     //   weight: '900',
//     //   style: 'normal'
//     // },
//     // {
//     //   path: '../../public/fonts/Satoshi-VariableItalic.woff2',
//     //   weight: '900',
//     //   style: 'normal'
//     // }
//   ]
// });

const fonts = {
  quicksand,
  kodchasan
  // satoshi
};

export default fonts;