import { Box, Button, Container, Grid,styled, Typography } from '@mui/material'
import React from 'react'
import group from '../../../images/Group 69965.png'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Image = styled("img")({
    width:"100%"
})

export default function LandingJoin() {
    const {t} = useTranslation()
    const navigate = useNavigate()
    return (
        <Box sx={{backgroundColor:"#d9d9d952"}}>
            <Container sx={{paddingY:"40px"}}>
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} sm={8} md={3} lg={4} sx={{margin:"auto"}}>
                        <Image src={group}/>
                    </Grid>
                    <Grid item xs={12} md={9} lg={8}>
                        <Typography sx={{fontSize:{md:"26px",xs:"18px"},fontWeight:"700",color:"#151313",
                        marginBottom:"20px"}}>{t('join_title')}</Typography>
                        <Typography sx={{color:"#6D6D6D",fontSize:{xs:"15px",md:"18px"}}}>
                            {t('join_desc')}
                        </Typography>
                        <Button variant="contained" sx={{marginTop:"16px"}}
                        onClick={()=>navigate('/login')}>{t('becometeacher')}</Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
