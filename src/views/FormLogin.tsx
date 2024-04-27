import CustomDialog from '@/components/CustomDialog'
import FancyInput, { isValidEmail } from '@/components/CustomInput'
import UserContext from '@/context/UserContext'
import { loginFormInit } from '@/utils/const'
import { HighlightOffSharp } from '@mui/icons-material'
import { Box, Button, CircularProgress, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'

const FormLogin = () => {
  const [loadComponent, setLoadComponent] = useState(0)
  const [clickSubmit, setClickSubmit] = useState<number>(0)
  const [fieldsWithError, setFieldsWithError] = useState(0)
  const [validateInputs, setValidateInputs] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [apiResp, setApiResp] = useState<any>({})
  const [form, setForm] = useState(loginFormInit)
  const router = useRouter()
  const { login } = useContext(UserContext)

  useEffect(() => {
    if (loadComponent > 0 && clickSubmit > 0) {
      const getAll = document.querySelectorAll('.textField-required.Mui-error')
      setFieldsWithError(getAll.length)
      if (getAll.length === 0) {
        handleLogin()
      }
    }
    setLoadComponent(loadComponent + 1)
    // eslint-disable-next-line
  }, [clickSubmit])

  const handleChange = (event: any) => {
    let { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const validateForm = () => {
    setValidateInputs(true)
    setClickSubmit(clickSubmit + 1)
  }

  const handleLogin = async () => {
    setIsLoading(true)
    const apilogin = await login(form)
    console.log(apilogin)
    if (apilogin.status === 200) {
      router.push('/dashboard')
    } else {
      setOpenDialog(true)
      setApiResp(apilogin)
      setIsLoading(false)
    }
  }

  return (
    <Box>
      <FancyInput
        disabled={isLoading}
        required
        validateSubmit={validateInputs}
        label="Escribe tu email*"
        name="email"
        value={form.email}
        onChange={handleChange}
        validation={[
          {
            validate: () => isValidEmail(form.email),
            msg: 'Email invalido'
          }
        ]}
      />
      <FancyInput
        disabled={isLoading}
        type="password"
        required
        validateSubmit={validateInputs}
        label="Escribe tu contraseña*"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
      <Stack spacing={4} mt={2}>
        {/* <Typography variant="body1" color="initial" sx={{ textDecoration: 'underline' }} align="center">
          Olvidé la contraseña
        </Typography> */}
        <Button disabled={isLoading} onClick={() => router.push('/dashboard')} variant="contained" color="primary">
          {isLoading ? <CircularProgress size={30} /> : 'Entrar'}
        </Button>
      </Stack>
    </Box>
  )
}

export default FormLogin
