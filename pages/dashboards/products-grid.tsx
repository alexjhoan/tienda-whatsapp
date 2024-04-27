import PrivateLayout from '@/layouts/PrivateLayout'
import { Box, styled } from '@mui/material'
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

const ConstainerGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)'
}))

const ProductsGrid = () => {
  return (
    <PrivateLayout title="Products Grid">
      <ConstainerGrid>
        <div>ProductsGrid</div>
        <div>ProductsGrid</div>
        <div>ProductsGrid</div>
        <div>ProductsGrid</div>
        <div>ProductsGrid</div>
        <div>ProductsGrid</div>
        <div>ProductsGrid</div>
      </ConstainerGrid>
    </PrivateLayout>
  )
}

export default ProductsGrid
