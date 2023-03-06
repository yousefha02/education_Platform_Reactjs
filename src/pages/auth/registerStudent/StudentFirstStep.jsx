import { Box, Button, Container, InputLabel, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm, Controller } from "react-hook-form";
import Navbar from '../../../components/Navbar';
import HeaderSteps from '../../../components/auth/HeaderSteps';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {useSnackbar} from 'notistack'

export default function StudentFirstStep() {
    const { register,control, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            fullName:'',
            email:'',
            place:''
        }
    });

    const {t} = useTranslation()
    const {closeSnackbar,enqueueSnackbar} = useSnackbar()
    const navigate = useNavigate()

    async function onSubmit(data)
    {
        closeSnackbar()
        try{
            const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/student/signup`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({email:data.email,name:data.fullName,location:data.place})
            })
            const resData = await response.json()
            if(response.status!==200&&response.status!==201)
            {
                enqueueSnackbar(resData.message,{variant:"error",autoHideDuration:"8000"})
                throw new Error('failed occured')
            }
            localStorage.setItem('studentEmail',data.email)
            navigate('/studentregister/step2')
        }
        catch(err)
        {
            console.log(err)
        }
    }

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
