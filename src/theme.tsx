import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      secondary: {
        main: '#c1cdc0',
      },
      background: {
        default: '#c1cdc0',
      },
    },
  })
)

export default theme
