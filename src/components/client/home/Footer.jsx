import React from 'react'
import {Box, Container,styled, Typography} from '@mui/material'
import logo from '../../../images/logo.png'
import { useTranslation } from 'react-i18next';

const Image = styled('img')({})

export default function Footer() {
    const {t} = useTranslation()
    return (
        <Box>
            <Container sx={{marginY:"30px",display:"flex",justifyContent:{xs:"center",sm:"space-between"},
            alignItems:"center",flexDirection:{xs:"column",sm:"row"},gap:"12px"}}>
                <Image src={logo}/>
                <Typography sx={{color:"#6D6D6D",fontSize:"15px"}}>
                    {t('privacy')}      
                </Typography>
            </Container>
        </Box>
    )
}
