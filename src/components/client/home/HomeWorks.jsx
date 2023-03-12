import { Box, Container, Typography,styled, Grid, Button } from '@mui/material'
import React from 'react'
import image1 from '../../../images/work1.png'
import image2 from '../../../images/work2.jpeg'
import image3 from '../../../images/work3.jpeg'
import image4 from '../../../images/work4.png'
import { useTranslation } from 'react-i18next';
import {useNavigate} from 'react-router-dom'

const Image = styled("img")({
    width:"100%",
    borderRadius:"15px"
})

export default function HomeWorks() {

    const navigate = useNavigate()
    const {t} = useTranslation()
    const data = [
        {
            image:image1,
            title:t('work1_title'),
            description:t('work1_desc')
        },
        {
            image:image2,
            title:t('work2_title'),
            description:t('work2_desc')
        },
        {
            image:image3,
            title:t('work3_title'),
            description:t('work3_desc')
        },
        {
            image:image4,
            title:t('work4_title'),
            description:t('work4_desc')
        },
    ]
    return (
        <Box sx={{marginY:"60px"}}>
            <Container>
                <Typography sx={{fontSize:{md:"26px",xs:"22px"},fontWeight:"700",color:"#151313",textAlign:"center",
                marginBottom:"50px"}}>{t('websiteWork')}</Typography>
                {
                    data.map((item,index)=>
                    {
                        return(
                            <Grid container spacing={2} key={index+'m1'} sx={{marginBottom:{md:"12px",xs:"30px"}}}>
                                <Grid item xs={10} sm={6} md={4} lg={3} sx={{margin:"auto"}}><Image src={item.image}/></Grid>
                                <Grid item xs={12} md={8} lg={9} sx={{textAlign:{xs:"center",md:"start"}}}>
                                    <Typography sx={{fontSize:"28px",color:"#005B8E",fontWeight:"700"}}>0{index+1}</Typography>
                                    <Typography sx={{color:"#151313",fontWeight:"500",marginBottom:"10px"}}>{item.title}</Typography>
                                    <Typography sx={{fontSize:"14px",color:"#6D6D6D",width:{md:"80%",xs:"100%"}}}>{item.description}</Typography>
                                </Grid>
                            </Grid>
                        )
                    })
                }
                <Box sx={{display:"flex",justifyContent:"center"}}>
                    <Button variant="contained" onClick={()=>navigate('/teacherRegister/step1')}>{t('becometeacher')}</Button>
                </Box>
            </Container>
        </Box>
    )
}
