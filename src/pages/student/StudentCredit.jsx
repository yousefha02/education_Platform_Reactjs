import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import StudentLayout from '../../components/student/StudentLayout'
import { useTranslation } from 'react-i18next';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

export default function StudentCredit() {
    const {t} = useTranslation()
    return (
        <StudentLayout>
            <Paper sx={{padding:"20px"}}>
                <Typography sx={{fontSize:"24px",marginTop:"12px",fontWeight:"600",marginBottom:"30px"}}>{t('credit')}</Typography>
                <Box sx={{backgroundColor:"#0cbc87",borderRadius:"16px",padding:"20px",width:"200px",
                display:"flex",columnGap:"12px",color:"white"}}>
                    <MonetizationOnOutlinedIcon/>
                    <Box>
                        <Typography sx={{fontSize:"14px"}}>{t('credit')}</Typography>
                        <Typography sx={{fontWeight:"700",fontSize:"18px"}}>13.3 USD</Typography>
                    </Box>
                </Box>
            </Paper>
        </StudentLayout>
    )
}
