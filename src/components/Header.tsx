import styled from 'styled-components/macro'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'

import logo from '../assets/logo.svg'

export default function Header() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Logo alt='Skyphony' src={logo} height={20} />
        <Title variant='h6'>Skyphony</Title>
        <IconButton edge='start'>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export const Logo = styled.img`
  margin-right: ${(props) => props.theme.spacing(2)}px;
`

export const Title = styled(Typography)`
  flex-grow: 1;
`
