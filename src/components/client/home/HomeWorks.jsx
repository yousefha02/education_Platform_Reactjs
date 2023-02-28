import { Box, Container, Typography,styled, Grid, Button } from '@mui/material'
import React from 'react'
import image1 from '../../../images/work1.png'
import image2 from '../../../images/work2.jpeg'
import image3 from '../../../images/work3.jpeg'
import image4 from '../../../images/work4.png'

const data = [
    {
        image:image1,
        title:"انشاء ملف شخصي",
        description:"عرف عن نفسك وما هي المواضيع التي ترغب بتدريسها مع وصف لخبراتك ومواهبك الخاصة وطرق التدريس او التدريب التي تتبعها لهذه المواضيع. حدد طريقة التدريس (عن بعد او وجها لوجه) الأوقات المتاحة لديك وتكلفة ساعة التدريس"
    },
    {
        image:image2,
        title:"تواصل مع طلاب من حول العالم",
        description:"سوف يقوم الموقع بمساعدة الطلاب في البحث عن مدرسين ومدربين في مجالات مختلفة مثل: اللغات، المناهج المدرسية و الجامعية، الرياضة، الفن، التجميل، الطبخ وغيرها. حيث سنعرض قائمة المدربين/المدرسين بحسب موضوع البحث، الوقت المتاح للتدريس، المكان والتكلفة"
    },
    {
        image:image3,
        title:"طلبات الحجز عبر الموقع",
        description:"ستتم الحجوزات عن طريق الموقع بحسب الوقت المناسب للطالب والمتاح للمدرس، كما يستطيع الطالب حجز الدرس لمدة تتراوح بين ساعة الى 3 ساعات بحسب مايراه مناسباً لاحتياجاته"
    },
    {
        image:image4,
        title:"تقاضي الأجر مقابل الدروس",
        description:"يقوم الطالب بالدفع مقدما للموقع عند القيام بالحجز، ليضمن الموقع سداد أجور المدربين/المدرسين بشكل اسبوعي او شهري عن طريق تحويل باي بال أو تحويل بنكي"
    }
]

const Image = styled("img")({
    width:"100%",
    borderRadius:"15px"
})

export default function HomeWorks() {
    return (
        <Box sx={{marginY:"60px"}}>
            <Container>
                <Typography sx={{fontSize:{md:"26px",xs:"22px"},fontWeight:"700",color:"#151313",textAlign:"center",
                marginBottom:"50px"}}>كيف يعمل موقعنا ؟</Typography>
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
                    <Button variant="contained">تقديم طلب مجاناً</Button>
                </Box>
            </Container>
        </Box>
    )
}
