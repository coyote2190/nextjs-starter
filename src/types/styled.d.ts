import theme from '@/styles/theme';
// import 'styled-components';
// import '@material-ui/core/styles';

type Theme = typeof theme;

declare module '@mui/material/styles' {
  export interface DefaultTheme extends Theme {}
}

declare module '@mui/material/styles' {
  interface Palette {
    greenFluo: Palette['primary'];
    violet: Palette['primary'];
  }

  interface PaletteOptions {
    greenFluo?: PaletteOptions['primary'];
    violet?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    greenFluo: true;
    violet: true;
  }
  interface ButtonPropsVariantOverrides {
    fluo: true;
  }
}
