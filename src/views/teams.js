import { Box, Typography } from '@mui/material'
import React from 'react'
import SideNav from '../components/sideNav'

function Teams() {
  return (
    <Box sx={{ display: "flex" }}>
    <SideNav />

    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Typography>Teams</Typography>
    </Box>
  </Box>
  )
}

export default Teams