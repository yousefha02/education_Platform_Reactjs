import { Box, Button, Container, Grid,styled, Typography } from '@mui/material'
import React from 'react'
import group from '../../../images/Group 69965.png'
import { useNavigate } from 'react-router-dom'

const Image = styled("img")({
    width:"100%"
})

export default function LandingJoin() {
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
                        marginBottom:"20px"}}>هل لديك الرغبة بأن تصبح مدرّس او مدرّب من خلال الانترنت ؟</Typography>
                        <Typography sx={{color:"#6D6D6D",fontSize:{xs:"15px",md:"18px"}}}>
                        إنضم لطاقم المدربين وشارك مهاراتك وخبراتك لكسب مال اضافي عن طريق التدريس او التدريب عبر الانترنت او وجها لوجه في منطقتك. نحن المجوعة الأضخم في الشرق الأوسط للبحث والحجز المباشر لكورسات اللغة ودورات التدريب والتقديم على الجامعات حول العالم. تشمل مجوعتنا Yesatlas.com, Findcourse.com, Modarby.com.
                        </Typography>
                        <Button variant="contained" sx={{marginTop:"16px"}}
                        onClick={()=>navigate('/login')}>انضم لطاقم المدربّين</Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
