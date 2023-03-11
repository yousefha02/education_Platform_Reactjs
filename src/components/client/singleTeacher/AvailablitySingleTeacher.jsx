import { Box, Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

export default function AvailablitySingleTeacher({teacher}) {
    console.log(teacher.timeZone)
    return (
        <Paper sx={{padding:"32px 24px",marginY:"30px"}}>
            <Typography sx={{fontSize:"22px",marginBottom:"18px"}}>Availability</Typography>
            <Box>
                <Typography>Tutor 's availability</Typography>
                <Typography>{}</Typography>
            </Box>
            <Box sx={{backgroundColor:"#f9fdff",border:"1px solid #e5f5fe",padding:"20px",
            borderRadius:"8px"}}>
                {
                    teacher.TeacherDays.length>0&&
                    teacher.TeacherDays.map((item,index)=>
                    {
                        return(
                            <>
                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <Typography sx={{color:"#1a477e",fontWeight:"600"}}>{item.DayId}</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography sx={{color:"#1a477e"}}>{item.from} - {item.to}</Typography>
                                    </Grid>
                                </Grid>
                                <Divider sx={{backgroundColor:"#e5f5fe",marginY:"30px"}}/>
                            </>
                        )
                    })
                }
            </Box>
        </Paper>
    )
}
