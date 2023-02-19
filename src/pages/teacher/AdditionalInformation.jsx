import React from 'react'
import TeacherLayout from '../../components/teacher/TeacherLayout'
import { useForm, Controller } from "react-hook-form";
import {Box, FormControlLabel, InputLabel, Radio, RadioGroup, Typography} from '@mui/material'
import StepperButtons from '../../components/reusableUi/StepperButtons'
import CheckBoxLevels from '../../components/teacher/CheckBoxLevels';
import CheckBoxCurriculum from '../../components/teacher/CheckBoxCurriculum';
import Navbar from '../../components/Navbar';

export default function AdditionalInformation() {
    const { register,control, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            certificates:"",
            experience:"",
            yearsOfExperience:"",
            gender:'',
            hours_per_week:""
        }
    });

    const onSubmit = data => console.log(data);

    return (
        <Navbar>
        <TeacherLayout title="Additional Information" active={2}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{marginBottom:"26px"}}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>Do you have certificates in teaching or training ?</InputLabel>
                <Controller
                name="certificates"
                control={control}
                render={({ field }) =>
                <RadioGroup >
                    <FormControlLabel value="yes" control={<Radio size="2px"/>} label="Yes"/>
                    <FormControlLabel value="no" control={<Radio size="2px"/>} label="No" />
                </RadioGroup>}
                {...register("certificates", { required: "certificates Address is required" })}
                />
                {errors.certificates?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
            </Box>
            <Box sx={{marginBottom:"26px"}}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>Do you have experience in teaching or training ?</InputLabel>
                <Controller
                name="certificates"
                control={control}
                render={({ field }) =>
                <RadioGroup >
                    <FormControlLabel value="yes" control={<Radio size="2px"/>} label="Yes"/>
                    <FormControlLabel value="no" control={<Radio size="2px"/>} label="No" />
                </RadioGroup>}
                {...register("experience", { required: "experience Address is required" })}
                />
                {errors.experience?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
            </Box>
            <Box sx={{marginBottom:"26px"}}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>How many years of experience do you have in teaching or training?</InputLabel>
                <Controller
                name="yearsOfExperience"
                control={control}
                render={({ field }) =>
                <RadioGroup >
                    <FormControlLabel value="0" control={<Radio size="2px"/>} label="0"/>
                    <FormControlLabel value="1" control={<Radio size="2px"/>} label="1" />
                    <FormControlLabel value="2-4" control={<Radio size="2px"/>} label="2-4" />
                    <FormControlLabel value="5-10" control={<Radio size="2px"/>} label="5-10" />
                    <FormControlLabel value="+10" control={<Radio size="2px"/>} label="+10" />
                </RadioGroup>}
                {...register("yearsOfExperience", { required: "yearsOfExperience Address is required" })}
                />
                {errors.yearsOfExperience?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
            </Box>
            <Box sx={{marginBottom:"26px"}}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>What type of gender do you prefer to teach or train?</InputLabel>
                <Controller
                name="gender"
                control={control}
                render={({ field }) =>
                <RadioGroup >
                    <FormControlLabel value="male" control={<Radio size="2px"/>} label="male"/>
                    <FormControlLabel value="female" control={<Radio size="2px"/>} label="female" />
                    <FormControlLabel value="both" control={<Radio size="2px"/>} label="both" />
                </RadioGroup>}
                {...register("gender", { required: "gender Address is required" })}
                />
                {errors.yearsOfExperience?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
            </Box>
            <Box sx={{marginBottom:"26px"}}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>How many hours per week do you plan to teach or train with Modarby?</InputLabel>
                <Controller
                name="gender"
                control={control}
                render={({ field }) =>
                <RadioGroup >
                    <FormControlLabel value="1-5" control={<Radio size="2px"/>} label="1-5"/>
                    <FormControlLabel value="6-10" control={<Radio size="2px"/>} label="6-10" />
                    <FormControlLabel value="11-20" control={<Radio size="2px"/>} label="11-20" />
                    <FormControlLabel value="21-35" control={<Radio size="2px"/>} label="21-35" />
                    <FormControlLabel value="+35" control={<Radio size="2px"/>} label="+35" />
                </RadioGroup>}
                {...register("hours_per_week", { required: "hours_per_week Address is required" })}
                />
                {errors.hours_per_week?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
            </Box>
            <CheckBoxLevels/>
            <CheckBoxCurriculum/>
            <StepperButtons/>
            </form>
        </TeacherLayout>
        </Navbar>
    )
}