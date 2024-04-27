import Tables, { TableHeadItem } from '@/components/Tables'
import PrivateLayout from '@/layouts/PrivateLayout'
import { Avatar, TableCell, TableRow } from '@mui/material'
import React, { useState } from 'react'

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

const ProductsList = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(20)
  const [paginationData, setPaginationData] = useState<any>(exampleData)
  const [btnSort, setBtnSort] = useState<string>('')
  const [sortAsc, setSortAsc] = useState(true)

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
    setPaginationData(exampleData.slice(0, rowsPerPage))
  }

  const handleChangePagination = (event: unknown, newPage: number) => {
    setPage(newPage)
    if (newPage !== 0) {
      setPaginationData(exampleData.slice(newPage * rowsPerPage, newPage * rowsPerPage + rowsPerPage))
    } else {
      setPaginationData(exampleData.slice(0, rowsPerPage))
    }
  }
  const sortTable = async (allData: any, keyCol: string, order: boolean) => {
    setPaginationData([])
    setBtnSort(keyCol)
    if (keyCol === 'last_name') {
      const sortedData = await allData.sort((a: any, b: any) => {
        if (b.rider.last_name < a.rider.last_name) {
          return order ? 1 : -1
        }
        if (b.rider.last_name > a.rider.last_name) {
          return order ? -1 : 1
        }
        return 0
      })
      setSortAsc(order)
      setPaginationData(sortedData)
    } else {
      const sortedData = await allData.sort((a: any, b: any) => {
        if (b[keyCol] < a[keyCol]) {
          return order ? 1 : -1
        }
        if (b[keyCol] > a[keyCol]) {
          return order ? -1 : 1
        }
        return 0
      })
      setSortAsc(order)
      setPaginationData(sortedData)
    }
  }
  return (
    <PrivateLayout title="lista de productos">
      <Tables
        count={paginationData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePagination}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowHead={[
          { name: 'Imagen', key: 'Image' },
          { name: 'Nombre', key: 'name' },
          { name: 'Marca', key: 'brand' },
          { name: 'Precio', key: 'price' }
        ].map((item, i) => (
          <TableHeadItem
            key={i}
            sx={{
              pr: item.key === btnSort ? 0 : 3,
              cursor: 'pointer',
              userSelect: 'none'
            }}
            name={item.name}
            arrowsHidden={item.key !== btnSort}
            modeSort={sortAsc}
            onClick={() => sortTable(paginationData, item.key, btnSort === item.key ? !sortAsc : sortAsc)}
          />
        ))}
      >
        {paginationData.map((item: any, i: any) => (
          <TableRow hover tabIndex={-1} key={i}>
            {item.image ? (
              <TableCell padding="none">
                <Avatar src={item.image} sx={{ width: 60, height: 60, margin: '5px 15px' }} />
              </TableCell>
            ) : (
              <TableCell>sin imagen</TableCell>
            )}
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.brand}</TableCell>
            <TableCell>${item.price}</TableCell>
          </TableRow>
        ))}
      </Tables>
    </PrivateLayout>
  )
}

export default ProductsList
