import { Box ,Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from '@mui/material'
import React from 'react'
import { useForm, Controller } from "react-hook-form";
import Navbar from '../../components/Navbar';
import AddLanguages from '../../components/reusableUi/AddLanguages';
import TeacherLayout from '../../components/teacher/TeacherLayout';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function TeacherAbout() {
    const { register,control, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            firstName: '',
            lastName:'',
            gender:'',
            date:'',
            phone:'',
            country:"",
            city:''
        }
    });

    const onSubmit = data => console.log(data);
    const navigate = useNavigate()

    const {t} = useTranslation()

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
                            <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('birth')}</InputLabel>
                            <Controller
                            name="date"
                            control={control}
                            render={({ field }) => <TextField type="date" {...field} fullWidth/>}
                            {...register("date", { required: "date Address is required" })}
                            />
                            {errors.date?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
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
                            {...register("date", { required: "city is required" })}
                            />
                            {errors.city?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                    </Box>
                    <AddLanguages/>
                </Box>
                <Button variant="contained" type="submit" onClick={()=>navigate('/teacher/Photo')}>{t('next')}</Button>
            </form>
        </TeacherLayout>
        </Navbar>
    )
}