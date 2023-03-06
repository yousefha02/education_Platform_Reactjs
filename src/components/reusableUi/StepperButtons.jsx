import { Box, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

export default function StepperButtons({link , onSubmit}) {
    const {t} = useTranslation()
    return (
        <Box sx={{display:"flex",columnGap:"12px",marginTop:"40px"}}>
            <Button sx={{textTransform:"capitalize"}} variant="outlined">{t('back')}</Button>
            <Button sx={{textTransform:"capitalize"}} variant="contained" type='submit'
            onClick={onSubmit}>{t('next')}</Button>
            <Button sx={{textTransform:"capitalize"}} variant="outlined">{t('skip')}</Button>
        </Box>
    )
}
