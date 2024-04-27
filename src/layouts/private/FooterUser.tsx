import { styled } from '@mui/material/styles'
import { Box, Container, Grid, Stack, Typography, useTheme } from '@mui/material'
import { NextPage } from 'next'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

const FooterBox = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: 'auto',
  '.contact': {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    color: theme.palette.common.white,
    '.contact-title': {
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    }
  },
  '.location': {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  }
}))

const FooterUser: NextPage = () => {
  const theme = useTheme()
  return (
    <FooterBox bgcolor={theme.palette.primary.main} p={2} alignSelf={'flex-end'}>
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid className="location contact" item xs={12} md={6} lg={6}>
            <Typography className="contact-title" variant="h6">
              LOCATION
            </Typography>
            <Stack flexDirection={'row'} alignItems={'center'} gap={1}>
              <PlaceOutlinedIcon fontSize="small" />
              <Typography variant="body1">2255 Glades Rd, Suite 324A. Boca Raton, FL.33431.</Typography>
            </Stack>
          </Grid>

          <Grid
            className="contact"
            sx={{ display: 'flex', flexDirection: 'column', gap: '15px', color: '#fff' }}
            item
            xs={12}
            md={6}
            lg={6}
          >
            <Typography className="contact-title" variant="h6">
              CONTACT US
            </Typography>
            <Stack
              sx={{
                [theme.breakpoints.down('md')]: {
                  justifyContent: 'center',
                  flexDirection: 'row'
                },
                [theme.breakpoints.down('sm')]: {
                  justifyContent: 'center',
                  flexDirection: 'column'
                }
              }}
              flexDirection={'row'}
              alignItems={'center'}
              gap={4}
            >
              <Stack flexDirection={'row'} alignItems={'center'} gap={1}>
                <LocalPhoneOutlinedIcon fontSize="small" />
                <Typography variant="body1">(888) 778-2404</Typography>
              </Stack>
              <Stack flexDirection={'row'} alignItems={'center'} gap={1}>
                <EmailOutlinedIcon fontSize="small" />
                <Typography variant="body1">info@bluewayisbetter.com</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </FooterBox>
  )
}

export default FooterUser
