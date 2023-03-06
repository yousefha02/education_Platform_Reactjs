import { Box, Container, Grid, Typography,styled } from '@mui/material'
import React from 'react'

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
    const reasons = [
        {
            title:"إن لم يكن مدرسك مناسب، درسك مجاني",
            desc:"نضمن لك إيجاد المدرس المناسب. إن لم تكن راضيا فيمكنك طلب استرداد 100% من الرسوم بعد انتهاء درسك الأول مع أي مدرس"
        },
        {
            title:"مدرسين ومدراء خبراء",
            desc:"لدينا ما يزيد عن ٢٠٠٠ مدرس ومدرب ذو خبرة على الاستعداد لمساعدتك"
        },
        {
            title:"موقع عالمي من شركة معتمدة",
            desc:"تعد المجموعة التعليمية و التدريبية الأكبر في الشرق الاوسط وتشمل ايضا موقع yesatlas.com, Findcourse.com"
        },
        {
            title:"مواضيع أكتر",
            desc:"لدينا أكثر من ١٥٠ تخصص و مهارة تغطي جميع جوانب اهتمامك ودراستك"
        },
        {
            title:"خدمة محلية",
            desc:"لدينا عدة مكاتب و فريق مجهز لخدمة العملاء من السعودية، الامارات، الكويت والأردن"
        },
        {
            title:"أفضل منصّة من نوعها في الوطن العربي ",
            desc:"صممت المنصة خصيصا لتناسب المهارات المطلوبة في سوق العمل العربي ونظام التدريس في الشرق الاوسط"
        }
    ]

    return (
        <Container sx={{marginY:"40px",paddingY:"40px"}}>
            <Typography sx={{fontSize:{md:"26px",xs:"22px"},fontWeight:"700",color:"#151313",textAlign:"center",
            marginBottom:"20px"}}>ما هي الأسباب اللتي تجعلك تحجز معنا في معلّمي ؟</Typography>
            <Typography sx={{color:"#6D6D6D",textAlign:"center"}}>
            ضمان عالمي . شهرة , التنوع في التخصصات , خدمات وتقنيات عالية
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
