import { Box, CircularProgress } from '@mui/material'
import React from 'react'

export default function Loading() {
    return (
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"70vh"}}>
            <CircularProgress size={80}/>
        </Box>
    )
}