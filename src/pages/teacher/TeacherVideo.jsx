import { Button,styled ,Box, InputLabel, TextField, Typography} from '@mui/material'
import React, { useState } from 'react'
import TeacherLayout from '../../components/teacher/TeacherLayout'
import StepperButtons from '../../components/reusableUi/StepperButtons'
import Navbar from '../../components/Navbar'
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';

export default function TeacherVideo() {

    const {t} = useTranslation()

    const { register,control, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            link: '',
        }
    });

    function onSubmit(data)
    {
        console.log(data)
    }
    return (
        <Navbar>
        <TeacherLayout active={7} title={t('Videointroduction')}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{width:{md:"500px",xs:"100%"}}}>
                    <Box sx={{marginBottom:"26px"}}>
                        <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('YoutubeLink')}</InputLabel>
                        <Controller
                        name="link"
                        control={control}
                        render={({ field }) => <TextField type="url" {...field} fullWidth/>}
                        {...register("link", { required: "link Address is required" })}
                        />
                        {errors.link?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                    </Box>
                </Box>
                <StepperButtons/>
            </form>
        </TeacherLayout>
        </Navbar>
    )
}
