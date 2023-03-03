import { Box, Button, Container, InputLabel, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm, Controller } from "react-hook-form";
import Navbar from '../../../components/Navbar';
import HeaderSteps from '../../../components/auth/HeaderSteps';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function StudentFirstStep() {
    const { register,control, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            fullName:'',
            email:'',
            place:''
        }
    });

    const {t} = useTranslation()

    const navigate = useNavigate()

    const onSubmit = data => {
        navigate('/studentregister/step2')
    };

    return (
        <Navbar>
            <Container>
                <Paper sx={{width:{md:"450px"},padding:"30px 50px",margin:"60px auto 60px"}}>
                    <HeaderSteps step={1} title={t('newAccount')} steps={4}/>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={{marginBottom:"30px"}}>
                        <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>Full Name</InputLabel>
                        <Controller
                        name="fullName"
                        control={control}
                        render={({ field }) => <TextField type="text" {...field} fullWidth/>}
                        {...register("fullName", { required: "fullName Address is required" })}
                        />
                        {errors.fullName?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                    </Box>
                    <Box sx={{marginBottom:"30px"}}>
                        <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('email')}</InputLabel>
                        <Controller
                        name="email"
                        control={control}
                        render={({ field }) => <TextField type="text" {...field} fullWidth/>}
                        {...register("email", { required: "email Address is required" })}
                        />
                        {errors.email?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                    </Box>
                    <Box sx={{marginBottom:"30px"}}>
                        <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('place')}</InputLabel>
                        <Controller
                        name="place"
                        control={control}
                        render={({ field }) => <TextField type="text" {...field} fullWidth/>}
                        {...register("place", { required: "place Address is required" })}
                        />
                        {errors.place?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                    </Box>
                    <Button variant='contained' color="secondary" fullWidth type='submit'
                    sx={{textTransform:"capitalize"}}>{t('register')}</Button>
                    </form>
                    <Typography sx={{marginTop:"20px",fontSize:"14px",textAlign:"center"
                    ,fontWeight:"700",marginBottom:"20px"}}>{t('haveanaccount')}</Typography>
                    <Button fullWidth variant="contained" onClick={()=>navigate('/login')}>{t('login')}</Button>
                </Paper>
            </Container>
        </Navbar>
    )
}
