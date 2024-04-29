import CustomDialog from '@/components/CustomDialog'
import { containerWidth } from '@/utils/const'
import FormLogin from '@/views/FormLogin'
import { Container, Typography, Button, Box, styled } from '@mui/material'
import React, { useState } from 'react'

const NavContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2)
}))

const Header = () => {
  const [loginDialog, setLoginDialog] = useState(false)
  return (
    <Box sx={{ borderBottom: 'solid 2px #0003' }}>
      <NavContainer maxWidth={containerWidth}>
        <Typography variant="h3" color="initial">
          Logo
        </Typography>
        <Button variant="outlined" color="primary" onClick={() => setLoginDialog(true)}>
          Login
        </Button>
        <CustomDialog open={loginDialog} onClose={() => setLoginDialog(false)} maxWidth={'xs'}>
          <FormLogin />
        </CustomDialog>
      </NavContainer>
    </Box>
  )
}

export default Header
