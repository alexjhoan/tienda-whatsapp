import PublicLayout from '@/layouts/Public'
import { containerWidth } from '@/utils/const'
import { Box, Container, styled, useMediaQuery, useTheme, Typography } from '@mui/material'
import { NextPage } from 'next/types'
import { useState } from 'react'

const SwiperNavBtn = styled(Box)(({ theme }) => ({}))

const Index: NextPage = () => {
  const [getProjects, setGetProjects] = useState<any>([])
  const theme = useTheme()
  const isXs = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <PublicLayout>
      <Container maxWidth={containerWidth}>
        <Typography variant="h4" color="initial">
          sitio web
        </Typography>
      </Container>
    </PublicLayout>
  )
}

export default Index
