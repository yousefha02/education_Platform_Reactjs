import { Box, Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import TimezoneSelect from 'react-timezone-select'
import Cookies from 'js-cookie';

export default function AvailablitySingleTeacher({teacher}) {
    const lang = Cookies.get("i18next") || "en";
    return (
        <Paper sx={{padding:"32px 24px",marginY:"30px"}}>
            <Typography sx={{fontSize:"22px",marginBottom:"18px"}}>Availability</Typography>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"24px"}}>
                <Typography>Tutor 's availability</Typography>
                <TimezoneSelect value={teacher.timeZone}/>
            </Box>
            <Box sx={{backgroundColor:"#f9fdff",border:"1px solid #e5f5fe",padding:"20px",
            borderRadius:"8px"}}>
                {
                    teacher?.TeacherDays.length>0&&
                    teacher.TeacherDays.map((item,index)=>
                    {
                        return(
                            <>
                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <Typography sx={{color:"#1a477e",fontWeight:"600"}}>{lang==="ar"?item.Day.titleAR:item.Day.titleEN}</Typography>
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
