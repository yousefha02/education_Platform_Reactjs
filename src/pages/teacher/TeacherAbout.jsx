import { Box ,Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from '@mui/material'
import React from 'react'
import { useForm, Controller } from "react-hook-form";
import Navbar from '../../components/Navbar';
import AddLanguages from '../../components/reusableUi/AddLanguages';
import TeacherLayout from '../../components/teacher/TeacherLayout';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import {useTeacher} from '../../hooks/useTeacher'
import {useSelector} from 'react-redux'
import { useEffect } from 'react';

export default function TeacherAbout() {
    const {teacher,token} = useSelector((state)=>state.teacher)
    const [load,setLoad] = useState(false)
    const {data,isLoading} = useTeacher(teacher?.id)

    const navigate = useNavigate()
    const {t} = useTranslation()
    const [chosenlanguages,setChosenLanguages] = useState([])

    const { register,control, formState: { errors }, handleSubmit , reset} = useForm({
        defaultValues: {
            firstName:"",
            lastName:'',
            gender:'',
            dateOfBirth:'',
            phone:'',
            country:"",
            city:''
        }
    });

    useEffect(()=>{
        if(data)
        {
            const user = data?.data;
            setChosenLanguages(data?.data?.LangTeachStds)
            reset({
                firstName:user?.firstName,
                lastName:user?.lastName,
                gender:user?.gender,
                dateOfBirth:user?.dateOfBirth,
                phone:user?.phone,
                country:user?.country,
                city:user?.city,
            })
        }
    },[data])

    async function onSubmit(data)
    {
        setLoad(true)
        const languages = chosenlanguages.map(lang=>
        {
            return {LanguageLevelId:lang.LanguageLevelId,TeacherId:teacher?.id,LanguageId:lang.LanguageId}
        })
        const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/teacher/about/${teacher.id}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            },
            body:JSON.stringify({...data,languages:languages})
        })
        setLoad(false)
        navigate('/teacher/photo')
    }

    return (
        <Navbar>
        <TeacherLayout active={0} title={t('about')}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{width:{md:"500px",xs:"100%"}}}>
                    <Box sx={{marginBottom:"26px"}}>
                        <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('fname')}</InputLabel>
                        <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) => <TextField {...field} fullWidth/>}
                        {...register("firstName", { required: "firstName Address is required" })}
                        />
                        {errors.firstName?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                    </Box>
                    <Box sx={{marginBottom:"26px"}}>
                            <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('lname')}</InputLabel>
                            <Controller
                            name="lastName"
                            control={control}
                            render={({ field }) => <TextField {...field} fullWidth/>}
                            {...register("lastName", { required: "lastName Address is required" })}
                            />
                            {errors.lastName?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                    </Box>
                    <Box sx={{marginBottom:"26px"}}>
                            <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('gender')}</InputLabel>
                            <Controller
                                name="gender"
                                control={control}
                                render={({ field }) =><FormControl fullWidth>
                                <Select
                                    {...field}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    {...register("gender", { required: "gender is required" })}
                                >
                                    <MenuItem value={'male'}>{t('male')}</MenuItem>
                                    <MenuItem value={'female'}>{t('female')}</MenuItem>
                                </Select>
                                </FormControl>
                                }
                            />
                            {errors.gender?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                    </Box>
                    <Box sx={{marginBottom:"26px"}}>
                            <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('dateOfBirth')}</InputLabel>
                            <Controller
                            name="dateOfBirth"
                            control={control}
                            render={({ field }) => <TextField type="date" {...field} fullWidth/>}
                            {...register("dateOfBirth", { required: "dateOfBirth Address is required" })}
                            />
                            {errors.dateOfBirth?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                    </Box>
                    <Box sx={{marginBottom:"26px"}}>
                        <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('phone')}</InputLabel>
                        <Controller
                            name="phone"
                            control={control}
                            render={({ field }) => <TextField type="phone" {...field} fullWidth/>}
                            {...register("phone", { required: "phone Address is required" })}
                            />
                        {errors.phone?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                    </Box>
                    <Box sx={{marginBottom:"26px"}}>
                        <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('country')}</InputLabel>
                        <Controller
                        name="country"
                        control={control}
                        render={({ field }) => <TextField {...field} fullWidth/>}
                        {...register("country", { required: "country is required" })}
                        />
                        {errors.country?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                    </Box>
                    <Box sx={{marginBottom:"26px"}}>
                            <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('city')}</InputLabel>
                            <Controller
                            name="city"
                            control={control}
                            render={({ field }) => <TextField {...field} fullWidth/>}
                            {...register("city", { required: "city is required" })}
                            />
                            {errors.city?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                    </Box>
                    <AddLanguages chosenlanguages={chosenlanguages} setChosenLanguages={setChosenLanguages}/>
                </Box>
                {
                    !load?
                    <Button variant="contained" type="submit">{t('next')}</Button>
                    :
                    <Button variant="contained">{t('next')}...</Button>
                }
            </form>
        </TeacherLayout>
        </Navbar>
    )
}