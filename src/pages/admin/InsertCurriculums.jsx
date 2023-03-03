import { Typography,Button, Box, InputLabel, FormControl, Select, MenuItem } from '@mui/material'
import React from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { useTranslation } from 'react-i18next';

export default function InsertCurriculums() {
    const [level, setLevel] = useState();
    const [curriculum,setCurriculum] = useState()
    const {t} = useTranslation()
    
    return (
        <AdminLayout>
            <Box sx={{marginBottom:"60px",width:"450px",maxWidth:"100%",marginTop:"40px"}}>
            <Typography sx={{fontSize:"24px",fontWeight:"600",color:"#424242",marginBottom:"15px"}}>{t('curriculumstoLevel')}</Typography>
            <Box sx={{marginTop:"40px"}}>
                <InputLabel sx={{marginBottom:"8px",fontSize:"13px"}}>{t('studylevel')}</InputLabel>
                <FormControl fullWidth>
                    <Select
                    onChange={(e)=>setLevel(e.target.value)}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    >
                        <MenuItem value={'british'}>Beginner</MenuItem>
                        <MenuItem value={'american'}>Elemnatry</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{marginTop:"40px"}}>
                <InputLabel sx={{marginBottom:"8px",fontSize:"13px"}}>{t('studyCurriculum')}</InputLabel>
                <FormControl fullWidth>
                    <Select
                    onChange={(e)=>setCurriculum(e.target.value)}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    >
                        <MenuItem value={'british'}>British</MenuItem>
                        <MenuItem value={'american'}>American</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Button sx={{marginTop:"20px"}} variant="contained">{t('save')}</Button>
            </Box>
        </AdminLayout>
    )
}