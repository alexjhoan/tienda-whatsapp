import { FormatListBulleted, Home, Menu, Window } from '@mui/icons-material'
import { Box, Button, MenuItem, useMediaQuery, useTheme } from '@mui/material'
import Divider from '@mui/material/Divider'
import MuiDrawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { CSSObject, Theme, styled } from '@mui/material/styles'
import { NextPage } from 'next'
import React, { useEffect, useLayoutEffect } from 'react'

const drawerWidth = 240

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `80px`
  }
})

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}))

const ContainerDrawer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    position: 'fixed',
    zIndex: 100
  },
  '.MuiPaper-elevation': {
    top: '80px'
  }
}))

const LinkContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  padding: theme.spacing(2, 2),
  transition: 'padding 150ms ease-in-out',
  '.linkContainer': {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme.palette.primary.main,
    padding: theme.spacing(0.5, 1),
    backgroundColor: '#F1F1F1',
    borderRadius: '10px',
    transition: 'background-color 150ms ease-in-out',
    height: 40,
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      minWidth: 40
    },
    '.link-text': {
      fontWeight: '700'
    },
    '&.active': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white
    }
  },
  '&.drawerClosed': {
    padding: theme.spacing(2, 1),
    justifyContent: 'center',
    '.linkContainer': {
      justifyContent: 'center',
      '.link-text': {
        display: 'none'
      }
    }
  }
}))

const Backdrop = styled(Box)(({ theme }) => ({
  display: 'none',
  zIndex: 90,
  [theme.breakpoints.down('lg')]: {
    display: 'block',
    position: 'fixed',
    background: '#00000080',
    left: '0',
    top: '0',
    height: '100vh',
    transition: 'opacity 200ms ease-in-out, width 10ms ease-in-out 200ms',
    '&.drawerClosed': {
      width: 0,
      opacity: 0
    },
    '&.drawerOpen': {
      transition: 'opacity ease-in-out 200ms',
      width: '100vw',
      opacity: 1
    }
  }
}))

const SideBar: NextPage = ({ item, setItem }: any) => {
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.down('lg'))
  const [open, setOpen] = React.useState(true)

  useEffect(() => {
    setOpen(!isMd)
  }, [])

  const handleDrawerOpen = () => {
    document.body.style.overflow = 'hidden'
    setOpen(true)
  }

  const handleDrawerClose = () => {
    document.body.removeAttribute('style')
    setOpen(false)
  }

  return (
    <ContainerDrawer>
      <Drawer variant="permanent" open={open}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            borderRadius: '0',
            margin: '0',
            ...(open && { display: 'none' })
          }}
        >
          <Menu />
        </IconButton>
        <Box
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            display: open ? 'flex' : 'none'
          }}
        >
          <Typography sx={{ color: '#666666' }} fontWeight={'bold'} marginLeft={2} variant="body1">
            Menu Options
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <Menu />
          </IconButton>
        </Box>
        <Divider />
        <LinkContainer className={open ? '' : 'drawerClosed'}>
          <Button
            className={`linkContainer ${item === 0 ? 'active' : ''}`}
            onClick={() => {
              setItem(0)
              handleDrawerClose()
            }}
          >
            <Home />
            <MenuItem className="link-text">Dashboard</MenuItem>
          </Button>
          <Button
            className={`linkContainer ${item === 1 ? 'active' : ''}`}
            onClick={() => {
              setItem(1)
              handleDrawerClose()
            }}
          >
            <FormatListBulleted />
            <MenuItem className="link-text">Productos en lista</MenuItem>
          </Button>
          <Button
            className={`linkContainer ${item === 2 ? 'active' : ''}`}
            onClick={() => {
              setItem(2)
              handleDrawerClose()
            }}
          >
            <Window />
            <MenuItem className="link-text">Productos en grilla</MenuItem>
          </Button>
        </LinkContainer>
      </Drawer>
      <Backdrop onClick={handleDrawerClose} className={open ? 'drawerOpen' : 'drawerClosed'} />
    </ContainerDrawer>
  )
}

export default SideBar
