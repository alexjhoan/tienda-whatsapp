import { createTheme, responsiveFontSizes } from '@mui/material/styles'

interface micolor {
  gradient: {
    main: String
  }
}

declare module '@mui/material/styles' {
  interface Palette extends micolor {}
  interface PaletteOptions extends micolor {}
}

const colors = {
  primary: {
    main: '#252E57',
    light: '#394e9a80'
  },
  secondary: {
    main: '#384d99'
  },
  text: {
    primary: '#252E57',
    secondary: '#000000',
    tertiary: '#fff'
  },
  gradient: {
    main: 'linear-gradient(90deg,#fd1d1d 0%, #D70057 50%, #A41B8A 100%);'
    // main: 'linear-gradient(90deg, #fcb045 0%, #fd1d1d 50%, #833ab4 100%);'
  }
}

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: colors.primary.main,
        light: colors.primary.light
        // dark: '#b23a3c'
      },
      secondary: {
        // light: '#fa6169',
        main: colors.secondary.main
        // dark: will be calculated from palette.secondary.main,
        // contrastText: '#f9f9f8'
      },
      text: {
        primary: colors.text.primary
      },
      gradient: {
        main: colors.gradient.main
      }
    },
    typography: {
      fontFamily: ['Saira', 'Helvetica', 'Arial'].join(','),
      // h1: {
      //   fontSize: '4.375rem',
      //   fontFamily: 'Nulshock'
      //   //     fontWeight: 700,
      // }
      button: {
        fontSize: 16
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            ':disabled': {
              background: 'rgba(0, 0, 0, 0.12)'
            }
          },
          containedPrimary: {
            color: '#fff',
            fontWeight: '500',
            borderRadius: 4,
            background: colors.gradient.main,
            transition: 'all 0.2s ease-in-out',
            border: 'none',
            '&:hover': {
              border: 'none',
              color: colors.secondary.main,
              boxShadow: '0 5px 10px 0px #00000060'
            }
          },
          outlinedPrimary: {
            fontWeight: '700',
            border: 'solid 2px transparent',
            borderRadius: 4,
            position: 'relative',
            background: `linear-gradient(#fff, #fff) padding-box, border-box ${colors.gradient.main}`,
            '&:hover': {
              background: `linear-gradient(#fff, #fff) padding-box, border-box ${colors.gradient.main}`,
              border: 'solid 2px transparent',
              color: colors.primary.main,
              boxShadow: '0 5px 10px 0px #00000060'
            }
          }
        }
      }
      // MuiCssBaseline: {
      //   styleOverrides: `
      //     @font-face {
      //       font-family: 'Saira';
      //       font-weight: 200;
      //       src: local('Saira'), url(/fonts/saira/Saira-ExtraLight.ttf) format('truetype');
      //     }
      //     @font-face {
      //       font-family: 'Saira';
      //       font-weight: 300;
      //       src: local('Saira'), url(/fonts/saira/Saira-Light.ttf) format('truetype');
      //     }
      //     @font-face {
      //       font-family: 'Saira';
      //       font-weight: 400;
      //       src: local('Saira'), url(/fonts/saira/Saira-Regular.ttf) format('truetype');
      //     }
      //     @font-face {
      //       font-family: 'Saira';
      //       font-weight: 500;
      //       src: local('Saira'), url(/fonts/saira/Saira-Medium.ttf) format('truetype');
      //     }
      //     @font-face {
      //       font-family: 'Saira';
      //       font-weight: 600;
      //       src: local('Saira'), url(/fonts/saira/Saira-SemiBold.ttf) format('truetype');
      //     }
      //     @font-face {
      //       font-family: 'Saira';
      //       font-weight: 700;
      //       src: local('Saira'), url(/fonts/saira/Saira-Bold.ttf) format('truetype');
      //     }
      //     @font-face {
      //       font-family: 'Saira';
      //       font-weight: 800;
      //       src: local('Saira'), url(/fonts/saira/Saira-ExtraBold.ttf) format('truetype');
      //     }
      //     @font-face {
      //       font-family: 'Saira';
      //       font-weight: 900;
      //       src: local('Saira'), url(/fonts/saira/Saira-Black.ttf) format('truetype');
      //     }
      //   `
      // }
    }
  })
)

export default theme
