import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export default function HomeAbout() {
    return (
        <Box sx={{backgroundColor:"#d9d9d952",marginY:"60px"}}>
            <Container sx={{paddingY:"60px"}}>
                <Typography sx={{fontSize:{md:"26px",xs:"22px"},fontWeight:"700",color:"#151313",textAlign:"center",
                marginBottom:"30px"}}>ما هو موقع معلّمي؟</Typography>
                <Typography sx={{textAlign:"center",color:"#6D6D6D",fontSize:{md:"18px",xs:"15px"}}}>
                موقع معلّمي هو جزء من أكبر مجموعة تعليمية تدريبية في الشرق الأوسط للبحث عن دورات اللغة والتدريب المهني والبرامج الأكاديمية وحجزها. تضم المجموعة YesAtlas.com و Findcourse.com و Modarby.com. تفتخر المجموعة بشراكتها الواسعة مع أكثر من 350 مدرسة للغات، وأكثر من 1100 جامعة وأكثر من 2000 مدرب محترف منتشرين في 20 دولة. ومع توافد اكثر من 3000 زائر يوميا لموقع مدربي، ولدعمنا المستمر للزوار على الانترنت، نوفر لطلابنا خدماتنا المتعددة من الادوات والمعلومات التي يحتاجونها ليقوموا بالبحث بكفاءة وسهولة ولتسجيل الكورسات التي تعد الأنسب لهم. . للمزيد من المعلومات، قم بزيارة عن مدربي.كوم
                </Typography>
            </Container>
        </Box>
    )
}