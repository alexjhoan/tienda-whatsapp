import { containerWidth } from '@/utils/const'
import { Stack } from '@mui/material'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const DashboardMain = ({ item, setItem }: any) => {
  return (
    <>
      <Typography variant="h5" color="initial">
        Dashboard
      </Typography>
      <Stack direction={'row'} spacing={2} mt={4}>
        <Button variant="outlined" color="primary" onClick={() => setItem(1)}>
          productos en lista
        </Button>
        <Button variant="outlined" color="primary" onClick={() => setItem(2)}>
          productos en grilla
        </Button>
      </Stack>
    </>
  )
}

export default DashboardMain
