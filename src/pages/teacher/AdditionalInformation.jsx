import React, { useEffect, useState } from 'react'
import TeacherLayout from '../../components/teacher/TeacherLayout'
import { useForm, Controller } from "react-hook-form";
import {Box, FormControlLabel, InputLabel, Radio, RadioGroup, Typography} from '@mui/material'
import StepperButtons from '../../components/reusableUi/StepperButtons'
import CheckBoxLevels from '../../components/teacher/CheckBoxLevels';
import CheckBoxCurriculum from '../../components/teacher/CheckBoxCurriculum';
import Navbar from '../../components/Navbar';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTeacher } from '../../hooks/useTeacher';

export default function AdditionalInformation() {
    const {t} = useTranslation();
    const [checked, setChecked] = React.useState([]);
    const [checked_2, setChecked_2] = React.useState([]);
    const {teacher , token} = useSelector((state)=>state.teacher);
    const {data,} = useTeacher(teacher.id)
    const [load,setLoad] = useState(false);
    const navigate = useNavigate();
    const { register,control, formState: { errors }, handleSubmit , reset} = useForm({
        defaultValues: {
            certificates:"",
            experience:"",
            yearsOfExperience:"",
            gender:'',
            hours_per_week:"",
            // research:""
        }
    });

    useEffect(()=>{
        if(data)
        {
            const user = data?.data;
            console.log(user);
            setChecked_2(user?.CurriculumTeachers.map(c => {
                return {CurriculumId :c.CurriculumId , TeacherId : c.TeacherId}
            }));
            setChecked(user?.TeacherLevels.map(l =>{
                return {LevelId : l.LevelId , TeacherId : l.TeacherId}
            }));
            console.log(user);
            reset({
                certificates:user?.haveCertificates ? "yes" :"no",
                experience :user?.haveExperience ? "yes" : "no",
                yearsOfExperience : user?.experienceYears,
                hours_per_week : user?.favHours,
                gender : user?.favStdGender
            })
        }
    },[data])


    const onSubmit = async data => {
        setLoad(true);
        try{
            const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/teacher/additionalInfo/${teacher.id}`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":token
                },
                body:JSON.stringify({
                    curriculums:checked_2 ,
                    levels:checked , 
                    haveCertificates:data.certificates=="no" ? false : true, 
                    haveExperience : data.experience=="no" ? false : true ,
                    favHours : data.hours_per_week,
                    favStdGender : data.gender,
                    experienceYears : data.yearsOfExperience
                })
            });
            setLoad(false);
            const resData = await response.json();
            if(resData.status !== 200 && resData.status!==201){
                throw new Error('');
            }
            navigate('/teacher/subjects')
        }
        catch(err){
            console.log(err);
        }
    }


    return (
        <Navbar>
        <TeacherLayout title={t('additionalInformation')} active={2}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{marginBottom:"26px"}}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>{t('certificates')}</InputLabel>
                <Controller
                name="certificates"
                control={control}
                render={({ field }) =>
                <RadioGroup {...field}>
                    <FormControlLabel value="yes" control={<Radio size="2px"/>} label={t('yes')}/>
                    <FormControlLabel value="no" control={<Radio size="2px"/>} label={t('no')}/>
                </RadioGroup>}
                {...register("certificates", { required: "certificates Address is required" })}
                />
                {errors.certificates?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
            </Box>
            <Box sx={{marginBottom:"26px"}}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>{t('experience')}</InputLabel>
                <Controller
                name="experience"
                control={control}
                render={({ field }) =>
                <RadioGroup {...field}>
                    <FormControlLabel value="yes" control={<Radio size="2px"/>} label={t('yes')}/>
                    <FormControlLabel value="no" control={<Radio size="2px"/>} label={t('no')}/>
                </RadioGroup>}
                {...register("experience", { required: "experience Address is required" })}
                />
                {errors.experience?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
            </Box>
            <Box sx={{marginBottom:"26px"}}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>{t('yearsExp')}</InputLabel>
                <Controller
                name="yearsOfExperience"
                control={control}
                render={({ field }) =>
                <RadioGroup {...field}>
                    <FormControlLabel value="0" control={<Radio size="2px"/>} label="0"/>
                    <FormControlLabel value="1" control={<Radio size="2px"/>} label="1" />
                    <FormControlLabel value="2-4" control={<Radio size="2px"/>} label="2-4" />
                    <FormControlLabel value="5-10" control={<Radio size="2px"/>} label="5-10" />
                    <FormControlLabel value="+10" control={<Radio size="2px"/>} label="+10" />
                </RadioGroup>}
                {...register("yearsOfExperience", { required: "yearsOfExperience Address is required" })}
                />
                {errors.yearsOfExperience?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
            </Box>
            <Box sx={{marginBottom:"26px"}}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>{t('genderType')}</InputLabel>
                <Controller
                name="gender"
                control={control}
                render={({ field }) =>
                <RadioGroup {...field}>
                    <FormControlLabel value="male" control={<Radio size="2px"/>} label={t('male')}/>
                    <FormControlLabel value="female" control={<Radio size="2px"/>} label={t('female')} />
                    <FormControlLabel value="both" control={<Radio size="2px"/>} label={t('both')} />
                </RadioGroup>}
                {...register("gender", { required: "gender Address is required" })}
                />
                {errors.yearsOfExperience?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
            </Box>
            <Box sx={{marginBottom:"26px"}}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>{t('hoursPerWeek')}</InputLabel>
                <Controller
                name="gender"
                control={control}
                render={({ field }) =>
                <RadioGroup {...field}>
                    <FormControlLabel value="1-5" control={<Radio size="2px"/>} label="1-5"/>
                    <FormControlLabel value="6-10" control={<Radio size="2px"/>} label="6-10" />
                    <FormControlLabel value="11-20" control={<Radio size="2px"/>} label="11-20" />
                    <FormControlLabel value="21-35" control={<Radio size="2px"/>} label="21-35" />
                    <FormControlLabel value="+35" control={<Radio size="2px"/>} label="+35" />
                </RadioGroup>}
                {...register("hours_per_week", { required: "hours_per_week Address is required" })}
                />
                {errors.hours_per_week?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
            </Box>
            {/* <Box sx={{marginBottom:"26px"}}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>{t('reserch')}</InputLabel>
                <Controller
                name="research"
                control={control}
                render={({ field }) =>
                <RadioGroup {...field}>
                    <FormControlLabel value="yes" control={<Radio size="2px"/>} label="Yes"/>
                    <FormControlLabel value="no" control={<Radio size="2px"/>} label="No" />
                </RadioGroup>}
                {...register("research", { required: "research Address is required" })}
                />
                {errors.research?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
            </Box> */}
            <CheckBoxLevels setChecked={setChecked} checked={checked}/>
            <CheckBoxCurriculum checked={checked_2} setChecked={setChecked_2}/>
            <StepperButtons load={load} skipLink="subjects"/>
            </form>
        </TeacherLayout>
        </Navbar>
    )
}