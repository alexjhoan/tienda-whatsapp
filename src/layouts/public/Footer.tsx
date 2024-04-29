import React from 'react'
import Container from '@mui/material/Container'
import { containerWidth } from '@/utils/const'
import Typography from '@mui/material/Typography'

const Footer = () => {
  return (
    <Container maxWidth={containerWidth}>
      <Typography variant="h3" color="initial">
        Footer
      </Typography>
    </Container>
  )
}

export default Footer
