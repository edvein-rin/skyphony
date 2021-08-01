import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider as StyledThemeProvider } from 'styled-components/macro'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles'

import theme from './theme'
import App from './components/App'

// import { Provider } from 'react-redux'
// import { store } from './app/store'

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <MaterialThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </StyledThemeProvider>
    </MaterialThemeProvider>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
)
