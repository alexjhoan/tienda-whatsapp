import * as React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

export default function CircularLoading({ size = 80 }: { size?: number }) {
  return (
    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', padding: '40px 0 80px' }}>
      <CircularProgress size={size} />
    </Box>
  )
}
