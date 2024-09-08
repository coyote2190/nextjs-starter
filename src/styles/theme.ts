import { Breakpoints } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import colors, { Colors } from './colors';
import fonts, { Fonts } from './fonts';
import breakpoints from './breakpoints';

export interface Theme {
  breakpoints: Breakpoints;
  colors: Colors;
  fonts: Fonts;
}

const theme = {
  colors,
  breakpoints: {
    ...createTheme({}).breakpoints,
    values: breakpoints
  },
  fonts
};

export default theme;
