import { authorizationLocal } from '@/utils/const'
import { enqueueSnackbar } from 'notistack'

// const apiLocal = process.env.NEXT_PUBLIC_API_LOCAL as string
// const apiLocal = 'http://localhost/subasta-apis'
const apiLocal = 'https://market.d4webs.com/market-whatsapp-apis'

enum Method {
  POST = 'POST',
  GET = 'GET',
  DELETE = 'DELETE',
  PUT = 'PUT',
  PATCH = 'PATCH'
}

const bodyRequest = async (urlApi: string, method: Method, Authorization: string, data?: any, containImg: boolean = false) => {
  const HEADERS = {
    // Authorization: Authorization,
    Accept: 'application/json, multipart/form-data'
    // 'Content-Type': 'application/json'
  }
  try {
    let getApi
    if (method !== 'GET') {
      getApi = await fetch(urlApi, {
        method: method,
        // headers: HEADERS,
        body: containImg ? data : JSON.stringify(data)
      })
    } else {
      getApi = await fetch(urlApi, {
        method: method,
        headers: HEADERS
      })
    }
    const body = await getApi.json()
    if (urlApi.includes(apiLocal)) {
      return body
    } else {
      return { status: getApi.status, statusText: getApi.statusText, body }
    }
  } catch (error: any) {
    console.log(error)
    enqueueSnackbar('Error de conexion', { variant: 'error' })
    return { body: new Error(error.message), statusText: 'Error de conexion' }
  }
}

// GETs

export const apiGetProducts = () => {
  return bodyRequest(`${apiLocal}/get-all-products`, Method.GET, authorizationLocal)
}

// POSTs

export const apiLoginUser = (data: any) => {
  return bodyRequest(`${apiLocal}/login-user`, Method.POST, authorizationLocal, data)
}

// PATCH
export const apiEditProduct = (data: any) => {
  return bodyRequest(`${apiLocal}/edit-product`, Method.PATCH, authorizationLocal, data)
}

// PUTs

export const apiUpdateUser = (data: any) => {
  return bodyRequest(`${apiLocal}/update-user`, Method.PUT, authorizationLocal, data)
}
