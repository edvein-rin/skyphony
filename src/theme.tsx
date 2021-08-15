import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#fff',
        contrastText: '#48484a',
      },
      secondary: {
        main: '#ea6e4b',
        contrastText: '#fff',
      },
      background: {
        default: '#48484a',
      },
    },
    shape: {
      borderRadius: 4,
    },
  })
)

export default theme
