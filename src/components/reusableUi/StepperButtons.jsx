import { Box, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

export default function StepperButtons({ onSubmit , load , skipLink}) {
    const {t} = useTranslation();
    const navigate = useNavigate();
    return (
        <Box sx={{display:"flex",columnGap:"12px",marginTop:"40px"}}>
            <Button sx={{textTransform:"capitalize"}} variant="outlined" onClick={()=>navigate(-1)}>{t('back')}</Button>
            {
                load?
                <Button sx={{textTransform:"capitalize" , opacity:0.7}} variant="contained" type='submit'
                >{t('next')}...</Button>
                :
                <Button sx={{textTransform:"capitalize"}} variant="contained" type='submit'
                onClick={onSubmit}>{t('next')}</Button>
            }
            <Button sx={{textTransform:"capitalize"}} variant="outlined" 
            onClick={()=>navigate(`/teacher/${skipLink}`)}>{t('skip')}</Button>
        </Box>
    )
}
