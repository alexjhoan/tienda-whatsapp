import PrivateLayout from '@/layouts/PrivateLayout'
import { Box, Grid, styled, Container, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const exampleData = [
  {
    id: '1',
    name: 'Toyota Oil Filter',
    brand: 'Toyota',
    price: '10.99',
    image: 'https://picsum.photos/200/300?random=1'
  },
  {
    id: '2',
    name: 'Toyota Spark Plug',
    brand: 'Toyota',
    price: '5.99',
    image: 'https://picsum.photos/200/300?random=2'
  },
  {
    id: '3',
    name: 'Toyota Air Filter',
    brand: 'Toyota',
    price: '15.99',
    image: 'https://picsum.photos/200/300?random=3'
  },
  {
    id: '4',
    name: 'Toyota Brake Pads',
    brand: 'Toyota',
    price: '39.99',
    image: 'https://picsum.photos/200/300?random=4'
  },
  {
    id: '5',
    name: 'Toyota Cabin Air Filter',
    brand: 'Toyota',
    price: '12.99',
    image: 'https://picsum.photos/200/300?random=5'
  },
  {
    id: '6',
    name: 'Toyota Engine Air Filter',
    brand: 'Toyota',
    price: '17.99',
    image: 'https://picsum.photos/200/300?random=6'
  },
  {
    id: '7',
    name: 'Toyota Wiper Blades',
    brand: 'Toyota',
    price: '22.99',
    image: 'https://picsum.photos/200/300?random=7'
  },
  {
    id: '8',
    name: 'Toyota Radiator',
    brand: 'Toyota',
    price: '119.99',
    image: 'https://picsum.photos/200/300?random=8'
  },
  {
    id: '9',
    name: 'Toyota Alternator',
    brand: 'Toyota',
    price: '199.99',
    image: 'https://picsum.photos/200/300?random=9'
  },
  {
    id: '10',
    name: 'Toyota Starter Motor',
    brand: 'Toyota',
    price: '179.99',
    image: ''
  }
]

const ConstainerGrid = styled(Box)(({ theme }) => ({}))

const ProductsGrid = () => {
  return (
    <PrivateLayout title="Products Grid">
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ rowGap: 2 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia component="img" height="140" image="https://picsum.photos/200/300?random=1" alt="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sed blanditiis fugiat culpa cum, deleniti
                    nobis nihil ipsam doloremque reprehenderit. Maxime, corrupti. Omnis numquam esse facilis iure iusto, ipsam
                    explicabo?
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia component="img" height="140" image="https://picsum.photos/200/300?random=1" alt="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sed blanditiis fugiat culpa cum, deleniti
                    nobis nihil ipsam doloremque reprehenderit. Maxime, corrupti. Omnis numquam esse facilis iure iusto, ipsam
                    explicabo?
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia component="img" height="140" image="https://picsum.photos/200/300?random=1" alt="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sed blanditiis fugiat culpa cum, deleniti
                    nobis nihil ipsam doloremque reprehenderit. Maxime, corrupti. Omnis numquam esse facilis iure iusto, ipsam
                    explicabo?
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia component="img" height="140" image="https://picsum.photos/200/300?random=1" alt="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sed blanditiis fugiat culpa cum, deleniti
                    nobis nihil ipsam doloremque reprehenderit. Maxime, corrupti. Omnis numquam esse facilis iure iusto, ipsam
                    explicabo?
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia component="img" height="140" image="https://picsum.photos/200/300?random=1" alt="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sed blanditiis fugiat culpa cum, deleniti
                    nobis nihil ipsam doloremque reprehenderit. Maxime, corrupti. Omnis numquam esse facilis iure iusto, ipsam
                    explicabo?
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia component="img" height="140" image="https://picsum.photos/200/300?random=1" alt="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sed blanditiis fugiat culpa cum, deleniti
                    nobis nihil ipsam doloremque reprehenderit. Maxime, corrupti. Omnis numquam esse facilis iure iusto, ipsam
                    explicabo?
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </PrivateLayout>
  )
}

export default ProductsGrid
