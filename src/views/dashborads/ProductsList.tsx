import CustomDialog from '@/components/CustomDialog'
import FancyInput from '@/components/CustomInput'
import Tables, { TableHeadItem } from '@/components/Tables'
import { apiEditProduct, apiGetProducts } from '@/services/services'
import { Delete, Edit } from '@mui/icons-material'
import { Avatar, Button, CircularProgress, IconButton, Stack, TableCell, TableRow, Typography, styled } from '@mui/material'
import { enqueueSnackbar } from 'notistack'
import React, { ChangeEvent, useEffect, useState } from 'react'

const dialogEditDataInit = {
  name: '',
  brand: '',
  price: '',
  description: '',
  quantities: ''
}

const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  width: 30,
  height: 30,
  background: theme.palette.primary.main,
  '&:hover': {
    background: theme.palette.primary.main
  },
  marginRight: theme.spacing(1),
  '& .MuiSvgIcon-root': {
    color: theme.palette.common.white,
    fontSize: 18
  },
  '&.deleteIcon': {
    background: theme.palette.error.main
  }
}))

const ProductsList = () => {
  const [productsList, setProductsList] = useState([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [paginationData, setPaginationData] = useState<any>([])
  const [btnSort, setBtnSort] = useState<string>('')
  const [sortAsc, setSortAsc] = useState(true)
  const [disabledInputs, setdisabledInputs] = useState(false)
  const [dialogEditOpen, setdialogEditOpen] = useState(false)
  const [dialogEditData, setDialogEditData] = useState(dialogEditDataInit)

  const getAllProducts = async () => {
    const getApiUsers = await apiGetProducts()
    if (getApiUsers.status === 200) {
      setProductsList(getApiUsers.body)
      setPaginationData(getApiUsers.body)
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

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaginationData([])
    setRowsPerPage(Number(event.target.value))
    setPage(0)
    setPaginationData(productsList.slice(0, Number(event.target.value)))
  }

  const handleChangePagination = (event: unknown, newPage: number) => {
    setPage(newPage)
    if (newPage !== 0) {
      setPaginationData(productsList.slice(newPage * rowsPerPage, newPage * rowsPerPage + rowsPerPage))
    } else {
      setPaginationData(productsList.slice(0, rowsPerPage))
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
  const editProduct = (idx: number) => {
    const data = paginationData.find((item: any) => item.id_user === idx)
    console.log(data)
    setDialogEditData(data)
    setdialogEditOpen(true)
  }

  const handleInput = async (event: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target
    setDialogEditData({
      ...dialogEditData,
      [name]: value
    })
  }

  const setProduct = async () => {
    setdisabledInputs(true)
    const editProduct = await apiEditProduct(dialogEditData)
    if (editProduct.status === 200) {
      enqueueSnackbar('Producto editado exitosamente', { variant: 'success' })
      getAllProducts()
    }
    setdisabledInputs(false)
    setdialogEditOpen(false)
  }

  return (
    <>
      <Typography variant="h5" color="initial" mb={2}>
        Grilla de productos
      </Typography>
      <Tables
        count={productsList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePagination}
        onRowsPerPageChange={handleChangeRowsPerPage}
        pagination
        actions
        rowHead={[
          { name: 'Imagen', key: 'Image' },
          { name: 'Nombre', key: 'name' },
          { name: 'Marca', key: 'brand' },
          { name: 'Precio', key: 'price' },
          { name: 'Existencia', key: 'quantities' }
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
            <TableCell sx={{ textTransform: 'capitalize' }}>{item.name}</TableCell>
            <TableCell>{item.brand}</TableCell>
            <TableCell>${item.price}</TableCell>
            <TableCell align="center">{item.quantities}</TableCell>
            <TableCell align="right" sx={{ minWidth: 110 }}>
              <>
                <IconButtonStyled onClick={() => editProduct(item.id_user)}>
                  <Edit />
                </IconButtonStyled>
                <IconButtonStyled className="deleteIcon">
                  <Delete />
                </IconButtonStyled>
              </>
            </TableCell>
          </TableRow>
        ))}
      </Tables>
      <CustomDialog fullMobile open={dialogEditOpen} onClose={() => setdialogEditOpen(false)} title={'Editar producto'}>
        <Stack pt={1}>
          <FancyInput
            disabled={disabledInputs}
            required
            label="Nomre del producto"
            name="name"
            value={dialogEditData.name}
            onChange={handleInput}
          />
          <FancyInput
            disabled={disabledInputs}
            required
            label="Marca del producto"
            name="brand"
            value={dialogEditData.brand}
            onChange={handleInput}
          />
          <FancyInput
            disabled={disabledInputs}
            required
            type="number"
            label="Precio"
            name="price"
            value={dialogEditData.price}
            onChange={handleInput}
          />
          <FancyInput
            disabled={disabledInputs}
            required
            type="number"
            label="Existencia"
            name="quantities"
            value={dialogEditData.quantities}
            onChange={handleInput}
          />
          <FancyInput
            disabled={disabledInputs}
            required
            multiline
            rows={4}
            label="Descripción"
            name="description"
            value={dialogEditData.description}
            onChange={handleInput}
          />
        </Stack>
        {disabledInputs ? (
          <Stack direction={'row'} justifyContent={'center'}>
            <CircularProgress size={32} />
          </Stack>
        ) : (
          <Stack direction={'row'} justifyContent={'flex-end'}>
            <Button
              variant="text"
              color="primary"
              onClick={() => {
                setdialogEditOpen(false)
                setDialogEditData(dialogEditDataInit)
              }}
            >
              Cancelar
            </Button>
            <Button variant="contained" color="primary" onClick={setProduct} sx={{ ml: 3 }}>
              Guardar
            </Button>
          </Stack>
        )}
      </CustomDialog>
    </>
  )
}

export default ProductsList
