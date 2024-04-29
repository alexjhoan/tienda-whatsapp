import SideBar from '@/layouts/private/Sidebar'
import TopBar from '@/layouts/private/Topbar'
import DashboardMain from '@/views/dashborads/DashboardMain'
import ProductsGrid from '@/views/dashborads/ProductsGrid'
import ProductsList from '@/views/dashborads/ProductsList'
import { Box, Container, Stack, styled, useMediaQuery, useTheme } from '@mui/material'
import { useState } from 'react'

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

const Dashboard = () => {
  const [item, setItem] = useState<any>(0)
  const theme = useTheme()
  const isLg = useMediaQuery(theme.breakpoints.down('xl'))

  return (
    <ContainerLayout>
      <TopBar />
      <Stack direction={'row'}>
        {/* @ts-ignore */}
        <SideBar item={item} setItem={setItem} />
        <Box className={'innerContent'}>
          <Container maxWidth="lg" sx={{ ml: isLg ? 'auto' : 1, mt: 10 }}>
            <Box mb={10} pt={3}>
              {item === 0 && <DashboardMain item={item} setItem={setItem} />}
              {item === 1 && <ProductsList />}
              {item === 2 && <ProductsGrid />}
            </Box>
          </Container>
          {/* <FooterUser /> */}
        </Box>
      </Stack>
    </ContainerLayout>
  )
}

export default Dashboard
