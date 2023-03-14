import React from 'react'
import Navbar from '../../components/Navbar'
import LinksFooter from '../../components/client/home/LinksFooter'
import Footer from '../../components/client/home/Footer'
import DownloadApp from '../../components/client/home/DownloadApp'
import { Paper, Typography,Container } from '@mui/material'

export default function Privacy() {
    return (
        <Navbar>
            <Container>
                <Paper sx={{padding:"20px",marginY:"60px"}}>
                    <Typography sx={{fontSize:"24px",marginBottom:"20px",fontWeight:"600"}}>سياسة الخصوصية</Typography>
                    <Typography sx={{marginBottom:"24px"}}>
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام «هنا يوجد محتوى نصي، هنا يوجد محتوى نصي» فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء.
                    </Typography>
                    <Typography sx={{marginBottom:"18px"}}>
                    تم إطلاق منصة مدربي في المملكة العربية السعودية والإمارات العربية المتحدة في يناير 2021، وقد نمت وتطورت المنصة بسرعة لتساهم في حجز أكثر من 3000 درس افتراضي شهريا. وتعتمد المنصة أكثر من 1500 مدرس معتمد من العرب والأجانب.
                    </Typography>
                </Paper>
            </Container>
            <DownloadApp/>
            <LinksFooter/>
            <Footer/>
        </Navbar>
    )
}
