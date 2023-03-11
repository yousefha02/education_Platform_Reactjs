import React from 'react'
import Navbar from '../../components/Navbar'
import TeacherLayout from '../../components/teacher/TeacherLayout'
import { Controller, useForm } from "react-hook-form";
import {Box, InputLabel, TextField, Typography} from '@mui/material'
import StepperButtons from '../../components/reusableUi/StepperButtons';
import { useTranslation } from 'react-i18next';
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import {useTeacher} from '../../hooks/useTeacher'
import { useEffect } from 'react';

export default function TeacherDescription() {
    const {teacher,token} = useSelector((state)=>state.teacher)
    const {data} = useTeacher(teacher?.id)
    const [load,setLoad] = useState(false)
    const navigate = useNavigate()
    const { register,control,reset, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            headline_ar: '',
            headline_en:'',
            description_ar:'',
            description_en:'',
        }
    });

    useEffect(()=>{
        if(data)
        {
            const user = data?.data;
            reset({
                headline_ar:user?.shortHeadlineAr,
                headline_en:user?.shortHeadlineEn,
                description_ar:user?.descriptionAr,
                description_en:user?.descriptionEn,
            })
        }
    },[data])

    async function onSubmit(data)
    {
        try{
            setLoad(true)
            const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/teacher/description/${teacher.id}`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":token
                },
                body:JSON.stringify({shortHeadlineAr:data.headline_ar,shortHeadlineEn:data.headline_en,
                descriptionAr:data.description_ar,descriptionEn:data.description_en})
            })
            const resData = await response.json()
            navigate('/teacher/video')
        }
        catch(err)
        {
            console.log(err)
        }
    }

    const {t} = useTranslation()

    return (
        <Navbar>
            <TeacherLayout active={6} title={t('Description')}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{width:{md:"500px",xs:"100%"}}}>
                    <Box sx={{marginBottom:"26px"}}>
                        <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('headAr')}</InputLabel>
                        <Controller
                        name="headline_ar"
                        control={control}
                        render={({ field }) => <TextField {...field} fullWidth/>}
                        {...register("headline_ar", { required: "headline_ar Address is required" })}
                        />
                        {errors.headline_ar?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                    </Box>
                    <Box sx={{marginBottom:"26px"}}>
                        <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('descAr')}</InputLabel>
                        <Controller
                        name="description_ar"
                        control={control}
                        render={({ field }) => <TextField {...field} fullWidth multiline rows={3}/>}
                        {...register("description_ar", { required: "description_ar Address is required" })}
                        />
                        {errors.description_ar?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                    </Box>
                    <Box sx={{marginBottom:"26px"}}>
                        <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('headEn')}</InputLabel>
                        <Controller
                        name="headline_en"
                        control={control}
                        render={({ field }) => <TextField {...field} fullWidth/>}
                        {...register("headline_en", { required: "headline_en Address is required" })}
                        />
                        {errors.headline_en?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                    </Box>
                    <Box sx={{marginBottom:"26px"}}>
                        <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('descEn')}</InputLabel>
                        <Controller
                        name="description_en"
                        control={control}
                        render={({ field }) => <TextField {...field} fullWidth multiline rows={3}/>}
                        {...register("description_en", { required: "description_ar Address is required" })}
                        />
                        {errors.description_en?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                    </Box>
                    <StepperButtons skipLink="video" load={load}/>
                </Box>
            </form>
            </TeacherLayout>
        </Navbar>
    )
}
