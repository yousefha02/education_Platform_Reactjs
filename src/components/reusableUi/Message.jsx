import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Message({you}) {
    return (
        <Box sx={{marginBottom:"16px",display:"flex",flexDirection:"column",alignItems:you?"end":"start"}}>
            <Typography sx={{fontSize:"15px",backgroundColor:you?"#3268ab":"#f5f8f9",width:"fit-content",color:you?"white":"#3268ab",padding:"6px 10px",
            borderRadius:"25px"}}>
                well done
            </Typography>
            <Typography sx={{fontSize:"11px",marginY:"5px"}}>06:55:52 PM</Typography>
        </Box>
    )
}
