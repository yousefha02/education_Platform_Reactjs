import React from 'react'
import {Box, Container, Typography,styled} from '@mui/material'
import image1 from '../../../images/app1.svg'
import image2 from '../../../images/app2.svg'
import image3 from '../../../images/app3.svg'
import { useTranslation } from 'react-i18next';

const Image = styled("img")({
    width:"194px",
    height:"56px"
})

export default function DownloadApp() {
    const {t} = useTranslation()
    return (
        <Box sx={{backgroundColor:"#5bc0f80d"}}>
            <Container sx={{paddingY:"40px"}}>
                <Typography sx={{fontSize:{md:"26px",xs:"22px"},fontWeight:"700",color:"#151313",textAlign:"center",
                marginBottom:"20px"}}>{t('downloadApp')}</Typography>
                <Typography sx={{color:"#6D6D6D",textAlign:"center"}}>
                    {t('downloadDesc')}
                </Typography>
                <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",
                marginTop:"40px",flexDirection:{md:"row",xs:"column"},gap:"6px"}}>
                    <Image src={image1}/>
                    <Image src={image2}/>
                    <Image src={image3}/>
                </Box>
            </Container>
        </Box>
    )
}
