import { Button,styled ,Box, InputLabel, TextField, Typography} from '@mui/material'
import React, { useEffect, useState } from 'react'
import TeacherLayout from '../../components/teacher/TeacherLayout'
import StepperButtons from '../../components/reusableUi/StepperButtons'
import Navbar from '../../components/Navbar'
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {useTeacher} from '../../hooks/useTeacher'

export default function TeacherVideo() {

    const {teacher,token} = useSelector((state)=>state.teacher)
    const [load,setLoad] = useState(false)
    const navigate = useNavigate()
    const {data} = useTeacher(teacher?.id)
    const {t} = useTranslation()

    const { register,control,reset ,formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            link: '',
        }
    });

    useEffect(()=>{
        if(data)
        {
            const user = data?.data;
            reset({
                link:user?.videoLink
            })
        }
    },[data])

    async function onSubmit(data)
    {
        try{
            setLoad(true)
            const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/teacher/videoLink/${teacher?.id}`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":token
                },
                body:JSON.stringify({videoLink:data.link})
            })
            const resData = await response.json()
            navigate('/teacher')
        }
        catch(err)
        {
            console.log(err)
        }
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
                <StepperButtons onSubmit={onSubmit} load={load}/>
            </form>
        </TeacherLayout>
        </Navbar>
    )
}
