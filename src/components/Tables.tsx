import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import {
  Box,
  Paper,
  Stack,
  StackProps,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material'

const TableHeadStyled = styled(TableHead)(({ theme }) => ({
  '& th': {
    fontWeight: 700,
    fontSize: 16
  }
}))

const TableBodyStyled = styled(TableBody)(({ theme }) => ({
  '& tr:hover': {
    backgroundColor: '#e7e7e7!important'
  }
}))

interface TablesTypes {
  rowHead: any
  count: number
  actions?: boolean
  pagination?: boolean
  rowsPerPage: number
  page: number
  onPageChange: any
  onRowsPerPageChange: any
  children: any
}

const Tables = ({
  rowHead,
  children,
  actions,
  pagination,
  count,
  rowsPerPage,
  page,
  onPageChange,
  onRowsPerPageChange
}: TablesTypes) => {
  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer>
          <Table stickyHeader sx={{ minWidth: 700, padding: '0 20px ' }} aria-label="simple table">
            <TableHeadStyled>
              <TableRow>
                {rowHead}
                {actions && (
                  <TableCell align="right" sx={{ pr: 4 }}>
                    Actions
                  </TableCell>
                )}
              </TableRow>
            </TableHeadStyled>
            <TableBodyStyled>{children}</TableBodyStyled>
          </Table>
        </TableContainer>
      </Paper>
      {pagination && (
        <TablePagination
          labelRowsPerPage={'Filas por páginas'}
          rowsPerPageOptions={[5, 10, 15, 20]}
          component="div"
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
          labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
        />
      )}
    </>
  )
}

export const SimpleTable = ({
  rowHead,
  children,
  actions,
  count,
  pagination,
  rowsPerPage,
  page,
  onPageChange,
  onRowsPerPageChange
}: TablesTypes) => {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 'calc(100vh - 270px)' }}>
        <Table stickyHeader sx={{ minWidth: 700, padding: '0 20px ' }} aria-label="simple table">
          <TableHeadStyled>
            <TableRow>
              {rowHead}
              {actions && (
                <TableCell align="right" sx={{ pr: 4 }}>
                  Actions
                </TableCell>
              )}
            </TableRow>
          </TableHeadStyled>
          <TableBodyStyled>{children}</TableBodyStyled>
        </Table>
      </TableContainer>
      {pagination && (
        <TablePagination
          labelRowsPerPage={'Filas por páginas'}
          rowsPerPageOptions={[5, 10, 15, 20]}
          component="div"
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
          labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
        />
      )}
    </Paper>
  )
}

interface TableHeadItemTypes extends StackProps {
  name: any
  arrowsHidden: any
  modeSort: any
  onClick?: any
}

export const TableHeadItem = ({ name, arrowsHidden, modeSort, onClick, ...rest }: TableHeadItemTypes) => {
  return (
    <TableCell>
      <Stack direction={'row'} width={'fit-content'} onClick={onClick} {...rest}>
        {name}
        <Box component={'span'} hidden={arrowsHidden} sx={{ lineHeight: 0 }}>
          {modeSort ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
        </Box>
      </Stack>
    </TableCell>
  )
}

export default Tables
