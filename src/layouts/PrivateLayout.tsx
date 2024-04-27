import { Box, Container, Stack, Typography, styled, useMediaQuery, useTheme } from '@mui/material'
import { ReactNode } from 'react'
import FooterUser from './private/FooterUser'
import SideBar from './private/Sidebar'
import TopBar from './private/Topbar'

const ContainerLayout = styled(Box)(({ theme }) => ({
  '.innerContent': {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: 'calc(100vh - 80px)'
  },
  '.titleSection': {
    background: theme.palette.secondary.main,
    color: theme.palette.common.white
  }
}))

const PrivateLayout = ({ title, children }: { title?: string; children: ReactNode }) => {
  const theme = useTheme()
  const isLg = useMediaQuery(theme.breakpoints.down('xl'))

  return (
    <ContainerLayout>
      <TopBar />
      <Stack direction={'row'}>
        <SideBar />
        <Box className={'innerContent'}>
          {/* <Typography className="titleSection" variant="h4" align="center">
            Welcome
          </Typography> */}
          <Container maxWidth="lg" sx={{ ml: isLg ? 'auto' : 1 }}>
            <Box mb={10} pt={3}>
              {title && (
                <Typography variant="h5" color="initial" mb={2}>
                  {title}
                </Typography>
              )}
              {children}
            </Box>
          </Container>
          {/* <FooterUser /> */}
        </Box>
      </Stack>
    </ContainerLayout>
  )
}

export default PrivateLayout
