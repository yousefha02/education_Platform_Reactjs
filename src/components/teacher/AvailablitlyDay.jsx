import { Box, Typography } from '@mui/material'
import React from 'react'

export default function AvailablitlyDay({day}) {
    return (
        <Box sx={{marginTop:"20px",marginBottom:"30px"}}>
            <Typography>{day}</Typography>
        </Box>
    )
}
