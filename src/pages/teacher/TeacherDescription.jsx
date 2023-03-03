import React from 'react'
import Navbar from '../../components/Navbar'
import TeacherLayout from '../../components/teacher/TeacherLayout'
import { Controller, useForm } from "react-hook-form";
import {Box, InputLabel, TextField, Typography} from '@mui/material'
import StepperButtons from '../../components/reusableUi/StepperButtons';
import { useTranslation } from 'react-i18next';

export default function TeacherDescription() {
    const { register,control, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            headline_ar: '',
            headline_en:'',
            description_ar:'',
            description_en:'',
        }
    });

    function onSubmit(data)
    {
        console.log(data)
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
                    <StepperButtons link="video"/>
                </Box>
            </form>
            </TeacherLayout>
        </Navbar>
    )
}
