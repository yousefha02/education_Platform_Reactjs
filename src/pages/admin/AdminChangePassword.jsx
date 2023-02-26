import { Box, Button, InputLabel, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm, Controller } from "react-hook-form";
import AdminLayout from '../../components/admin/AdminLayout'

export default function AdminChangePassword() {
    const { register,control, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            oldPassword:"",
            newPassword:"",
            confirmNewPassword:""
        }
    });

    const onSubmit = data => console.log(data);

    return (
            <AdminLayout>
                <Paper sx={{padding:"20px",marginTop:"40px"}}>
                    <Typography>Change Your Password</Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box sx={{width:{md:"450px",xs:"100%"}}}>
                            <Box sx={{marginTop:"32px"}}>
                                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>Old Password</InputLabel>
                                <Controller
                                name="oldPassword"
                                control={control}
                                render={({ field }) => <TextField {...field} fullWidth/>}
                                {...register("oldPassword", { required: "oldPassword Address is required" })}
                                />
                                {errors.oldPassword?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                            </Box>
                            <Box sx={{marginTop:"32px"}}>
                                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>New Password</InputLabel>
                                <Controller
                                name="newPassword"
                                control={control}
                                render={({ field }) => <TextField {...field} fullWidth/>}
                                {...register("newPassword", { required: "newPassword Address is required" })}
                                />
                                {errors.newPassword?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                            </Box>
                            <Box sx={{marginTop:"32px"}}>
                                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>Confirm New Password</InputLabel>
                                <Controller
                                name="confirmNewPassword"
                                control={control}
                                render={({ field }) => <TextField {...field} fullWidth/>}
                                {...register("confirmNewPassword", { required: "confirmNewPassword Address is required" })}
                                />
                                {errors.confirmNewPassword?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                            </Box>
                            <Button type="submit" sx={{marginTop:"30px"}}
                            variant="contained" color="secondary">Change Password</Button>
                        </Box>
                    </form>
                </Paper>
            </AdminLayout>
    )
}