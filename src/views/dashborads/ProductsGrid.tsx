import { apiGetProducts } from '@/services/services'
import { Box, Card, CardContent, CardMedia, Typography, styled } from '@mui/material'
import { useEffect, useState } from 'react'

const ConstainerGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)'
  }
}))

const ProductsGrid = () => {
  const [productsList, setProductsList] = useState([])
  const getAllProducts = async () => {
    const getApiUsers = await apiGetProducts()
    if (getApiUsers.status === 200) {
      setProductsList(getApiUsers.body)
    }
  }

  useEffect(() => {
    let mount = true
    const asyncFn = async () => {
      if (mount) {
        getAllProducts()
      }
    }
    asyncFn()
    return () => {
      mount = false
    }
  }, [])
  return (
    <>
      <Typography variant="h5" color="initial" mb={2}>
        Grilla de productos
      </Typography>
      <ConstainerGrid>
        {productsList.map((item: any, i: number) => (
          <Card sx={{ maxWidth: 345, m: 1 }} key={i}>
            <CardMedia sx={{ height: 200 }} image={item.image} title="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ textTransform: 'capitalize' }}>
                {item.name}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Marca: {item.brand}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={1}>
                Precio: ${item.price}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={1}>
                Existencia: {item.quantities}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Descripción: {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </ConstainerGrid>
    </>
  )
}

export default ProductsGrid
