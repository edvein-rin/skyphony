import styled from 'styled-components/macro'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase'
import SearchIconMD from '@material-ui/icons/Search'

import logo from '../assets/logo.svg'

export default function Header() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Logo alt='Skyphony' src={logo} height={20} />
        <Title variant='h6'>Skyphony</Title>
        <Search>
          <SearchInput
            placeholder='Type a city name...'
            inputProps={{ 'aria-label': 'search' }}
          />
          <IconButton>
            <SearchIcon fontSize='small' />
          </IconButton>
        </Search>
      </Toolbar>
    </AppBar>
  )
}

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 250px;

  padding: 0 ${({ theme }) => theme.spacing(1)}px;

  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.secondary.constrastText};
`

export const SearchIcon = styled(SearchIconMD)`
  color: ${({ theme }) => theme.palette.secondary.contrastText};
`

export const SearchInput = styled(InputBase)`
  color: ${({ theme }) => theme.palette.secondary.contrastText};
  margin-right: ${({ theme }) => theme.spacing(1)}px;
  flex-grow: 1;
`

export const Logo = styled.img`
  margin-right: ${(props) => props.theme.spacing(2)}px;
`

export const Title = styled(Typography)`
  flex-grow: 1;
`
