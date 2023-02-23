import { Box, Button, Grid, InputLabel, Paper, TextField, Typography } from '@mui/material'
import React, { useRef } from 'react'
import Navbar from '../../components/Navbar'
import { useForm, Controller } from "react-hook-form";
import ReactCodeInput from "react-code-input";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const { register,control, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            email:'',
            password:''
        }
    });

    const onSubmit = data => console.log(data);

    const input1 = useRef();
    const navigate = useNavigate()

    return (
        <Navbar>
            <Paper sx={{width:{md:"450px"},padding:"30px 50px",margin:"45px auto 60px"}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Typography sx={{fontSize:"28px",fontWeight:"600",marginBottom:"16px"}}>Login by Email</Typography>
                <Typography sx={{marginBottom:"24px"}}>
                    Use Email for login
                </Typography>
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
                    <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>Pin Code</InputLabel>
                    <ReactCodeInput type='number' fields={4} ref={input1}/>
                </Box>
                <Button variant='contained' color="secondary" fullWidth type='submit'
                sx={{textTransform:"capitalize"}}>Login</Button>
                <Typography sx={{marginTop:"40px",fontSize:"15px",textAlign:"center"
                ,fontWeight:"700",marginBottom:"20px"}}>Don't have an account?</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Button sx={{textTransform:"capitalize"}} variant='outlined'
                        fullWidth onClick={()=>navigate('/studentregister/step1')}>Student</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button sx={{textTransform:"capitalize"}} variant='outlined'
                        fullWidth onClick={()=>navigate('/teacherRegister/step1')}>Teacher</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button sx={{textTransform:"capitalize"}} variant='outlined'
                        fullWidth>Parent</Button>
                    </Grid>
                </Grid>
                </form>
            </Paper>
        </Navbar>
    )
}
