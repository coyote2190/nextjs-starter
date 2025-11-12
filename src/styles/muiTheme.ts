import { createTheme } from '@mui/material/styles';
import colors from '@/styles/colors';
import { lato } from './fonts';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: colors.primary
    }
  },
  typography: {
    fontFamily: lato.style.fontFamily,
    allVariants: {
      color: '#10293E'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: '40px',
          lineHeight: 0,
          fontSize: '15px',
          boxShadow: 'none',
          borderRadius: '26px'
        }
      },
      variants: [
        {
          props: { variant: 'fluo' },
          style: {
            background: colors.greenFluo,
            '&:hover': {
              backgroundColor: '#0e293e',
              color: '#00fcc6'
            }
          }
        }
      ]
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: '#fff'
        }
      }
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          '> text': {
            fontSize: 25,
            fontWeight: 600
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow:
            'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px',
          borderRadius: 12,
          position: 'relative',
          zIndex: 0 // Fix Safari overflow: hidden with border radius
        }
      }
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: 'h6' },
        subheaderTypographyProps: { variant: 'body2' }
      },
      styleOverrides: {
        root: {
          padding: '24px 24px 0px'
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '24px 24px 8px'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&::after': {
            borderBottom: '2px solid #0033ff !important'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: '#fff',
          borderRadius: 30
        },
        notchedOutline: {
          borderRadius: 30,
          borderColor: 'transparent'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: '#fff',
          borderRadius: 30
        }
      }
    }
  }
});

export default muiTheme;
