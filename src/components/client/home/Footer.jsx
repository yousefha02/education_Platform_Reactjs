import React from 'react'
import {Box, Container,styled, Typography} from '@mui/material'
import logo from '../../../images/logo.png'

const Image = styled('img')({

})

export default function Footer() {
    return (
        <Box>
            <Container sx={{marginY:"30px",display:"flex",justifyContent:{xs:"center",sm:"space-between"},
            alignItems:"center",flexDirection:{xs:"column",sm:"row"},gap:"12px"}}>
                <Image src={logo}/>
                <Typography sx={{color:"#6D6D6D",fontSize:"15px"}}>
                    حقوق الطبع والنشر محفوظة       
                </Typography>
            </Container>
        </Box>
    )
}
