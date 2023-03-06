import { Typography,Button, Box, InputLabel, FormControl, Select, MenuItem } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { useTranslation } from 'react-i18next';
import {useLevels} from '../../hooks/useLevels'
import {useCurriculums} from '../../hooks/useCurriculums'
import {useSnackbar} from 'notistack'
import { useSelector } from 'react-redux';

export default function InsertCurriculums() {
    const [level, setLevel] = useState();
    const [curriculum,setCurriculum] = useState()
    const {token} = useSelector((state)=>state.admin)
    const {t} = useTranslation()
    const {closeSnackbar,enqueueSnackbar} = useSnackbar()

    const levels = useLevels()
    const curriculums = useCurriculums()

    async function insertLevel()
    {
        closeSnackbar()
        try{
            if(!level||!curriculum)
            {
                enqueueSnackbar('empty field',{variant:"error",autoHideDuration:8000})
                throw new Error('failed occured')
            }
            const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/admin/curriculumLevel`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":token
                },
                body:JSON.stringify({levelId:level,curriculumId:curriculum})
            })
            const resData = await response.json()
            if(response.status!==200&&response.status!==201)
            {
                enqueueSnackbar(resData.message,{variant:"error",autoHideDuration:8000})
                throw new Error('failed occured')
            }
            enqueueSnackbar(resData.msg,{variant:"success",autoHideDuration:8000})
        }
        catch(err)
        {
            console.log(err)
        }
    }
    
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
                        {
                            !levels.isLoading&&
                            levels.data.data.map((item,index)=>
                            {
                                return <MenuItem value={item.id} key={index+'m1o'}>{item.titleAR}</MenuItem>
                            })
                        }
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
                        {
                            !curriculums.isLoading&&
                            curriculums.data.data.map((item,index)=>
                            {
                                return <MenuItem value={item.id} key={index+'m1o'}>{item.titleAR}</MenuItem>
                            })
                        }
                    </Select>
                </FormControl>
            </Box>
            <Button sx={{marginTop:"20px"}} variant="contained" onClick={insertLevel}>{t('save')}</Button>
            </Box>
        </AdminLayout>
    )
}