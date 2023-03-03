import { Box  , styled, Typography} from '@mui/material'
import React from 'react'
import cover from '../../../images/Rectangle7.png'
import { useTranslation } from 'react-i18next';

const Wrapper = styled(Box)({
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    color:"white",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    height:"80vh"
})

export default function HomeBanner() {
  const {t} = useTranslation()
  return (
    <Wrapper sx={{backgroundImage:`url(${cover})`}} className="overlay">
        <Typography sx={{marginBottom:"8px",fontSize:{md:"32px", xs:"22px"} , position:"relative" , fontWeight:"bold"}} color="secondary">
            {t('bannerTitle')}
        </Typography>
        <Typography sx={{fontSize:{lg:"18px",md:"18px",xs:"14px"},fontWeight:"600" , position:"relative" , maxWidth:"480px" , paddingX:"10px"}}>
        We are part of the largest educational group in the Middle East when it comes to searching schools, universities, and professional courses. Now, we can help you use your knowledge, skills, hobbies, or experience to earn money by teaching or training. Be your own boss, control your time and income.
        </Typography>
    </Wrapper>
  )
}
