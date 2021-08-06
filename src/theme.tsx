import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#fff',
        contrastText: '#48484a',
      },
      secondary: {
        main: '#c1cdc0',
      },
      background: {
        default: '#48484a',
      },
    },
  })
)

export default theme
