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
      <Typography variant="body1" color="initial">
        Por favor victor cuando hagas el footer no me dejes componente de footer_old, solo lo deje para que te puedas guiar de lo
        que necesites, pero solo extrae lo necesario no copies y pegues todo
      </Typography>
    </Container>
  )
}

export default Footer
