import { Box, Button, InputLabel, Paper, TextField, Typography } from '@mui/material'
import React, { useRef } from 'react'
import StudentLayout from '../../components/student/StudentLayout'
import ReactCodeInput from "react-code-input";

export default function StudentSettings() {
    const input1 = useRef();
    const input2 = useRef();

    return (
            <StudentLayout>
                <Paper sx={{padding:"40px 20px"}}>
                    <Typography sx={{marginBottom:"30px"}}>Change Your Password</Typography>
                        <Box sx={{display:"flex",marginBottom:"32px",flexDirection:"column",alignItems:"start"}}>
                            <InputLabel sx={{marginBottom:"12px",fontSize:"13px"}}>Old Password</InputLabel>
                            <ReactCodeInput fields={4} ref={input1}/>
                        </Box>
                        <Box sx={{display:"flex",marginBottom:"24px",flexDirection:"column",alignItems:"start"}}>
                            <InputLabel sx={{marginBottom:"12px",fontSize:"13px"}}>New Password</InputLabel>
                            <ReactCodeInput fields={4} ref={input2}/>
                        </Box>
                        <Button type="submit" sx={{marginTop:"30px"}}
                        variant="contained" color="secondary">Change Password</Button>
                </Paper>
            </StudentLayout>
    )
}