import { Paper,Box, Avatar, Typography, Divider, TextField, Button } from '@mui/material'
import React from 'react'
import Message from '../reusableUi/Message'
import { useForm, Controller } from "react-hook-form";

export default function Conversaition() {
    const { register,control, handleSubmit } = useForm({
        defaultValues: {
            message:'',
        }
    });
    return (
        <Paper sx={{width:"100%",paddingY:"20px"}}>
            <Box sx={{display:"flex",alignItems:"center",columnGap:"12px",paddingX:"20px"}}>
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" sx={{width:"45px",height:"45px"}}/>
                <Typography>Yousef H</Typography>
            </Box>
            <Divider sx={{marginY:"10px"}}/>
            <Box sx={{paddingX:"20px"}}>
                {
                    [true,false,false,true,true].map((msg,index)=>
                    {
                        return <Message you={msg} key={index+'pq1'}/>
                    })
                }
            </Box>
            <Box sx={{marginY:"10px",paddingX:"20px",display:"flex",alignItems:"center",columnGap:"8px"}}>
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <TextField {...field} fullWidth/>}
                    {...register("message", { required: "message Address is required" })}
                    />
                <Button variant="contained" color="secondary">Send</Button>
            </Box>
        </Paper>
    )
}
