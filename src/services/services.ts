import { authorizationLocal } from '@/utils/const'
import { enqueueSnackbar } from 'notistack'

// const apiLocal = process.env.NEXT_PUBLIC_API_LOCAL as string
// const apiLocal = 'http://localhost/subasta-apis'
const apiLocal = 'https://subasta.d4webs.com/subasta-apis'
// const apiLocal = 'https://subastadepropiedades.com/subasta-apis'

enum Method {
  POST = 'POST',
  GET = 'GET',
  DELETE = 'DELETE',
  PUT = 'PUT',
  PATCH = 'PATCH'
}

const bodyRequest = async (urlApi: string, method: Method, Authorization: string, data?: any, containImg: boolean = false) => {
  const HEADERS = {
    Authorization: Authorization,
    Accept: 'application/json, multipart/form-data'
    // 'Content-Type': 'multipart/form-data'
  }
  try {
    let getApi
    if (method !== 'GET') {
      getApi = await fetch(urlApi, {
        method: method,
        headers: HEADERS,
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

export const apiGetProjects = (limit: number = 10) => {
  return bodyRequest(`${apiLocal}/projects?limit=${limit}`, Method.GET, authorizationLocal)
}
export const apiGetProjectDetail = (id: string | string[] | undefined) => {
  return bodyRequest(`${apiLocal}/project-details?id=${id}`, Method.GET, authorizationLocal)
}
export const apiGetUserDetails = (id: string) => {
  return bodyRequest(`${apiLocal}/user-details?id=${id}`, Method.GET, authorizationLocal)
}
export const apiGetOfferByUser = (id: string) => {
  return bodyRequest(`${apiLocal}/offer-by-user?id=${id}`, Method.GET, authorizationLocal)
}
export const apiGetPurchasesByUser = (id: string) => {
  return bodyRequest(`${apiLocal}/purchases-by-user?id=${id}`, Method.GET, authorizationLocal)
}
export const apiGetFavoritesByUser = (ids: string) => {
  return bodyRequest(`${apiLocal}/favorites-by-user?id=${ids.slice(1, -1)}`, Method.GET, authorizationLocal)
}
export const apiGetSearch = (search: string | string[] | undefined) => {
  return bodyRequest(`${apiLocal}/searcher?search=${search}`, Method.GET, authorizationLocal)
}

// POSTs

export const apiRegisterUser = (data: any) => {
  return bodyRequest(`${apiLocal}/register-user`, Method.POST, authorizationLocal, data)
}
export const apiLoginUser = (data: any) => {
  return bodyRequest(`${apiLocal}/login-user`, Method.POST, authorizationLocal, data)
}
export const apiNewOffer = (data: any) => {
  return bodyRequest(`${apiLocal}/new-offer`, Method.POST, authorizationLocal, data)
}
export const apiPasswordRecovery = (data: any) => {
  return bodyRequest(`${apiLocal}/password-recovery`, Method.POST, authorizationLocal, data)
}
export const apiSendContactForm = (data: any) => {
  return bodyRequest(`${apiLocal}/contact-form`, Method.POST, authorizationLocal, data)
}
export const apiRegisterNewsLetter = (data: any) => {
  return bodyRequest(`${apiLocal}/register-news-letter`, Method.POST, authorizationLocal, data)
}

// PUTs

export const apiUpdateUser = (data: any) => {
  return bodyRequest(`${apiLocal}/update-user`, Method.PUT, authorizationLocal, data)
}
export const apiUpdateFavoritesUser = (data: any) => {
  return bodyRequest(`${apiLocal}/update-favorites-user`, Method.PUT, authorizationLocal, data)
}
export const apiGetNewPassword = (data: any) => {
  return bodyRequest(`${apiLocal}/get-new-password`, Method.PUT, authorizationLocal, data)
}
