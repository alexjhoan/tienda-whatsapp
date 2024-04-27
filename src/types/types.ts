export interface accordionFaqTypes {
  title: string
  text: string
}

export interface cookiesTypes {
  name: string
}

export interface loginFormTypes {
  email: string
  password: string
}
export interface registerFormTypes {
  firstName: string
  lastName: string
  idCard: string
  phone: string
  email: string
  password: string
  password_confirm: string
  accept_policies: boolean
}
export interface updateUserFormTypes {
  first_name: string
  last_name: string
  id_card: string
  phone: string
  email: string
  password: string
  password_confirm: string
  address: string
  department: string
  city: string
  postal_code: string
  country: string
}

export interface contactUsTypes {
  full_name: string
  email: string
  subject: string
  phone: string
  message: string
}
