import CustomDialog from '@/components/CustomDialog'
import { containerWidth } from '@/utils/const'
import FormLogin from '@/views/FormLogin'
import { AccountCircle, BorderColor, Cancel, Logout, Person } from '@mui/icons-material'
import { Container, Typography, Button, Box, styled, IconButton, MenuItem, Stack } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const BoxContainer = styled(Box)(({ theme }) => ({
  borderBottom: 'solid 2px #0003',
  position: 'fixed',
  width: '100%',
  zIndex: 200,
  height: 80,
  backgroundColor: theme.palette.common.white
}))

const NavContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2)
}))

const LinkContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  textDecoration: 'none',
  color: theme.palette.primary.main,
  padding: theme.spacing(1.5, 2),
  backgroundColor: '#F1F1F1',
  borderRadius: '10px',
  transition: 'all 150ms ease-in-out',
  cursor: 'pointer',
  border: `solid 1px transparent`,
  '.link-text': {
    fontWeight: '700',
    marginLeft: theme.spacing(1.5)
  },
  '&:hover': {
    border: `solid 1px ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.common.white
  }
}))

const TopBar = () => {
  const [optionsDialog, setOptionsDialog] = useState(false)
  const router = useRouter()
  return (
    <BoxContainer>
      <NavContainer maxWidth={containerWidth}>
        <Link href={'/'} style={{ textDecoration: 'none' }}>
          <Typography variant="h4" color="initial">
            Logo
          </Typography>
        </Link>
        <IconButton onClick={() => setOptionsDialog(true)}>
          <AccountCircle fontSize="large" />
        </IconButton>
        <CustomDialog open={optionsDialog} onClose={() => setOptionsDialog(false)} maxWidth={'xs'} title="User Options">
          <Stack spacing={1}>
            <LinkContainer>
              <Person />
              <Typography variant="body1" color="initial" className="link-text">
                User
              </Typography>
            </LinkContainer>
            <LinkContainer onClick={() => router.push('/')}>
              <Logout />
              <Typography variant="body1" color="initial" className="link-text">
                Logout
              </Typography>
            </LinkContainer>
          </Stack>
        </CustomDialog>
      </NavContainer>
    </BoxContainer>
  )
}

export default TopBar
