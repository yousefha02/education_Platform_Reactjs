import { Box  , styled, Typography} from '@mui/material'
import React from 'react'
import cover from '../../../images/Rectangle7.png'

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

const Span = styled("span")({color:"#ff5252"})

export default function HomeBanner() {
  return (
    <Wrapper sx={{backgroundImage:`url(${cover})`}} className="overlay">
        <Typography sx={{marginBottom:"8px",fontSize:{md:"32px", xs:"22px"} , position:"relative" , fontWeight:"bold"}} color="secondary">
            هل ترغب بالتدريس او التدريب اونلاين ؟ 
        </Typography>
        <Typography sx={{fontSize:{lg:"18px",md:"18px",xs:"14px"},fontWeight:"600" , position:"relative" , maxWidth:"480px" , paddingX:"10px"}}>
        هل ترغب ان تكون مدير نفسك وتتحكم بوقتك ودخلك؟ انضم لطاقم المدرسين وشارك مهاراتك وخبراتك لكسب مال اضافي عن طريق التدريس او التدريب. يعد موقع مدربي جزء من أكبر مجموعة تعليمية تدريبية في الشرق الأوسط للبحث عن دورات اللغة والتدريب المهني والبرامج الأكاديمية وحجزها.
        </Typography>
    </Wrapper>
  )
}
