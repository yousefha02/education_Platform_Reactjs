import { Box, Button, Grid, InputLabel,Container, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import {useSnackbar} from 'notistack'
import {adminLogin} from '../../redux/adminSlice'
import { useDispatch } from 'react-redux';

export default function AdminLogin() {

    const dispatch = useDispatch()
    const {closeSnackbar,enqueueSnackbar} = useSnackbar()

    const { register,control, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            email:'',
            password:''
        }
    });

    const navigate = useNavigate()

    async function onSubmit(data)
    {
        closeSnackbar()
        try{
            const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/admin/login`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },     
                body:JSON.stringify({email:data.email,password:data.password})
            })
            const resData = await response.json()
            if(response.status!==200&&response.status!==201)
            {
                enqueueSnackbar(resData.message,{variant:"error",autoHideDuration:"8000"})
                throw new Error('failed occured')
            }
            localStorage.clear()
            dispatch(adminLogin({admin:resData.data,token:resData.token}))
            navigate('/admin')
            enqueueSnackbar('success',{variant:"success",autoHideDuration:"8000"})
        }
        catch(err)
        {
            console.log(err)
        }
    }

    return (
        <Container>
            <Paper sx={{width:{md:"450px"},padding:"30px 50px",margin:"60px auto"}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Typography sx={{fontSize:"28px",fontWeight:"600",marginBottom:"22px",textAlign:"center"}}>Login</Typography>
                <Box sx={{marginBottom:"30px"}}>
                    <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>Email</InputLabel>
                    <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <TextField type="email" {...field} fullWidth/>}
                    {...register("email", { required: "email Address is required" })}
                    />
                    {errors.email?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                </Box>
                <Box sx={{marginBottom:"30px"}}>
                    <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>Password</InputLabel>
                    <Controller
                    name="password"
                    control={control}
                    render={({ field }) => <TextField type="password" {...field} fullWidth/>}
                    {...register("password", { required: "password Address is required" })}
                    />
                    {errors.password?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                </Box>
                <Button variant='contained' fullWidth type='submit'
                sx={{textTransform:"capitalize"}}>Login</Button>
                </form>
            </Paper>
        </Container>
    )
}