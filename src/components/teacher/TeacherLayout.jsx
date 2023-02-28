import { Container, Paper, Typography } from '@mui/material'
import React from 'react'
import TeacherStepper from './TeacherStepper'

export default function TeacherLayout({active,title,children}) {
    return (
        <Container sx={{marginY:"60px"}}>
            <TeacherStepper active={active}/>
            <Paper sx={{marginY:"50px",paddingY:"40px",paddingX:"30px"}}>
                <Typography sx={{fontSize:"24px",fontWeight:"600",marginBottom:"30px"}}>{title}</Typography>
                {children}
            </Paper>
        </Container>
    )
}
