import { Paper, Typography } from '@mui/material'
import React from 'react'

export default function AboutSingleTeacher({teacher}) {
    return (
        <Paper sx={{padding:"32px 24px",marginY:"30px"}}>
            <Typography sx={{fontSize:"22px",marginBottom:"18px"}}>About the teacher</Typography>
            <Typography>
            {teacher.descriptionEn}
            </Typography>
        </Paper>
    )
}
