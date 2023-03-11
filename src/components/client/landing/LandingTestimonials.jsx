import { Box, Container, Typography,styled } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useTranslation } from 'react-i18next';

const Image = styled('img')({
    width:"100%",
    height:"226px",
    borderRadius:"12px"
})

export default function LandingTestimonials() {
    const {t} = useTranslation()
    return (
        <Box sx={{marginY:"50px",paddingY:"40px",backgroundColor:"#d9d9d952"}}>
            <Container>
                <Typography sx={{fontSize:{md:"26px",xs:"22px"},fontWeight:"700",color:"#151313",textAlign:"center",
                marginBottom:"20px"}}>{t('tsmTitle')}</Typography>
                <Typography sx={{color:"#6D6D6D",textAlign:"center"}}>
                    {t('tsmDesc')}
                </Typography>
                <Box sx={{marginY:"40px"}}>
                <Swiper
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                breakpoints={{
                        640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        },
                        768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        },
                        1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        },
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image 
                    src={'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                    src={'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                    src={'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                    src={'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                    src={'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'}/>
                </SwiperSlide>
                </Swiper>
                </Box>
            </Container>
        </Box>
    )
}
