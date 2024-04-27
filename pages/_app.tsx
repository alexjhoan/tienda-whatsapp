import { CssBaseline, IconButton } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import Head from 'next/head'
import { CookiesProvider } from 'react-cookie'
import theme from '../theme/theme'
import { UserProvider } from '@/context/UserContext'
import { SnackbarProvider, closeSnackbar } from 'notistack'
import { Close } from '@mui/icons-material'

export default function App({ Component, pageProps }: any) {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <CookiesProvider>
          <SnackbarProvider
            autoHideDuration={3000}
            action={(snackbarId) => (
              <IconButton aria-label="" onClick={() => closeSnackbar(snackbarId)}>
                <Close sx={{ color: '#fff' }} />
              </IconButton>
            )}
          >
            <CssBaseline />
            <Head>
              <title>Tienda whatsapp</title>
            </Head>
            <Component {...pageProps} />
          </SnackbarProvider>
        </CookiesProvider>
      </ThemeProvider>
    </UserProvider>
  )
}
