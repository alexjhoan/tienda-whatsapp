import { accordionFaqTypes, contactUsTypes, cookiesTypes, loginFormTypes, registerFormTypes, updateUserFormTypes } from '@/types/types'

export const containerWidth = 'xl'

export const authorizationLocal =
  'Bearer Y29kZSBiYXNlNjQgZGUgU3ViQHNUQCBkMyAmbmYwQ2FTQHMgQXVUMFJpWkB0STBuIENvTjNYVGkwTiBAUGkgREBUQSAwTmx5IExvQ0Fs'

export const cookiesName = 'bkBtM0NvMGsmMw'
export const cookieRecoveryPassword = 'Y29va2llUmVjb3ZlcnlQYXNzd29yZA'

export const loginFormInit: loginFormTypes = {
  email: '',
  password: ''
}
export const registerFormInit: registerFormTypes = {
  firstName: '',
  lastName: '',
  idCard: '',
  phone: '',
  email: '',
  password: '',
  password_confirm: '',
  accept_policies: false
}
export const updateUserFormInit: updateUserFormTypes = {
  first_name: '',
  last_name: '',
  id_card: '',
  phone: '',
  email: '',
  password: '',
  password_confirm: '',
  address: '',
  department: '',
  city: '',
  postal_code: '',
  country: ''
}

export const contactUsInit: contactUsTypes = {
  full_name: '',
  email: '',
  subject: '',
  phone: '',
  message:''
}

export const offers = [
  {
    name: 'USD 1.000',
    value: 1000
  },
  {
    name: 'USD 2.000',
    value: 2000
  },
  {
    name: 'USD 3.000',
    value: 3000
  },
  {
    name: 'USD 5.000',
    value: 5000
  }
]

export const accordionFaq: accordionFaqTypes[] = [
  {
    title: 'Pregunta 1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta corporis officiis sed, at reprehenderit quibusdam labore velit, nulla atque ratione, sint sapiente aliquid rem libero magnam doloribus dolore aliquam expedita!'
  },
  {
    title: 'Pregunta 2',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta corporis officiis sed, at reprehenderit quibusdam labore velit, nulla atque ratione, sint sapiente aliquid rem libero magnam doloribus dolore aliquam expedita!'
  },
  {
    title: 'Pregunta 3',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta corporis officiis sed, at reprehenderit quibusdam labore velit, nulla atque ratione, sint sapiente aliquid rem libero magnam doloribus dolore aliquam expedita!'
  },
  {
    title: 'Pregunta 4',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta corporis officiis sed, at reprehenderit quibusdam labore velit, nulla atque ratione, sint sapiente aliquid rem libero magnam doloribus dolore aliquam expedita!'
  },
  {
    title: 'Pregunta 5',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta corporis officiis sed, at reprehenderit quibusdam labore velit'
  },
  {
    title: 'Pregunta 6',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta corporis officiis sed, at reprehenderit quibusdam labore velit, nulla atque ratione, sint sapiente aliquid rem libero magnam doloribus dolore aliquam expedita!'
  },
  {
    title: 'Pregunta 7',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta corporis officiis sed, at reprehenderit quibusdam labore velit, nulla atque ratione, sint sapiente aliquid rem libero magnam doloribus dolore aliquam expedita!'
  },

]
