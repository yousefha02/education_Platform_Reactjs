import { Box, Button, InputLabel, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm, Controller } from "react-hook-form";
import Navbar from '../../../components/Navbar';
import HeaderSteps from '../../../components/auth/HeaderSteps';
import { useNavigate } from 'react-router-dom';

export default function TeacherFirstStep() {
    const { register,control, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            email:'',
        }
    });

    const navigate = useNavigate()

    const onSubmit = data => {
        navigate('/teacherRegister/step2')
    };

    return (
        <Navbar>
            <Paper sx={{width:{md:"450px"},padding:"30px 50px",margin:"45px auto 60px"}}>
                <HeaderSteps step={1} title="New Teacher account" steps={3}/>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{marginBottom:"30px"}}>
                    <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>Email</InputLabel>
                    <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <TextField type="text" {...field} fullWidth/>}
                    {...register("email", { required: "email Address is required" })}
                    />
                    {errors.email?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                </Box>
                <Button variant='contained' color="secondary" fullWidth type='submit'
                sx={{textTransform:"capitalize"}}>Regsiter Now</Button>
                </form>
                <Typography sx={{marginTop:"20px",fontSize:"14px",textAlign:"center"
                ,fontWeight:"700",marginBottom:"20px"}}>Already have an account?</Typography>
                <Button fullWidth variant="contained" onClick={()=>navigate('/login')}>Login</Button>
            </Paper>
        </Navbar>
    )
}