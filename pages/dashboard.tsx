import PrivateLayout from '@/layouts/PrivateLayout'
import { containerWidth } from '@/utils/const'
import { Stack } from '@mui/material'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import router from 'next/router'

const Dashboard = () => {
  return (
    <PrivateLayout>
      <Container maxWidth={containerWidth}>
        <Typography variant="h5" color="initial">
          Dashboard Privado
        </Typography>
        <Stack direction={'row'} spacing={2} mt={4}>
          <Button variant="outlined" color="primary" onClick={() => router.push('/dashboards/products-list')}>
            productos en lista
          </Button>
          <Button variant="outlined" color="primary" onClick={() => router.push('/dashboards/products-grid')}>
            productos en grilla
          </Button>
        </Stack>
      </Container>
    </PrivateLayout>
  )
}

export default Dashboard
