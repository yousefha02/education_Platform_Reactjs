import { Avatar, Box, Button, Typography } from '@mui/material'
import React from 'react'

export default function ContactPerson() {
    return (
            <Box sx={{display:"flex",alignItems:"center",columnGap:"12px",marginBottom:"20px",
            cursor:"pointer"}}>
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" sx={{width:"45px",height:"45px"}}/>
                <Typography>Yousef H</Typography>
            </Box>
    )
}
