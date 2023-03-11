import { Box, Container, Grid, Typography,styled } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';

const Number = styled(Box)({
    width:"45px",
    height:"45px",
    borderRadius:"12px",
    backgroundColor:"#D6D6D6",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",

})

export default function LandingReasons() {
    const {t} = useTranslation()
    const reasons = [
        {
            title:t('r1_title'),
            desc:t('r1_desc')
        },
        {
            title:t('r2_title'),
            desc:t('r2_desc')
        },
        {
            title:t('r3_title'),
            desc:t('r3_desc')
        },
        {
            title:t('r4_title'),
            desc:t('r4_desc')
        },
        {
            title:t('r5_title'),
            desc:t('r5_desc')
        },
        {
            title:t('r6_title'),
            desc:t('r6_desc')
        },
    ]

    return (
        <Container sx={{marginY:"40px",paddingY:"40px"}}>
            <Typography sx={{fontSize:{md:"26px",xs:"22px"},fontWeight:"700",color:"#151313",textAlign:"center",
            marginBottom:"20px"}}>{t('reasonTitle')}</Typography>
            <Typography sx={{color:"#6D6D6D",textAlign:"center"}}>
                {t('reasonDesc')}
            </Typography>
            <Grid container spacing={2} sx={{marginTop:"40px"}}>
                {
                    reasons.map((item,index)=>
                    {
                        return(
                            <Grid item xs={12} md={6} key={index+'vha'}>
                                <Box sx={{border:"1px solid #CACACA",padding:"10px",borderRadius:"8px",
                                minHeight:"120px",backgroundColor:"#d9d9d952"}}>
                                    <Box sx={{display:"flex",alignItems:"center",columnGap:"8px",marginBottom:"8px"}}>
                                        <Number>{index+1}</Number>
                                        <Typography sx={{fontSize:"16px",color:"#151313",fontWeight:"bold"}}>{item.title}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{color:"#6D6D6D",fontSize:"15px"}}>{item.desc}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>
    )
}
