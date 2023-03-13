import { Box, Paper, Typography,styled, Stack } from '@mui/material'
import React from 'react'
import TransgenderIcon from '@mui/icons-material/Transgender';
import BarChartIcon from '@mui/icons-material/BarChart';
import Cookies from 'js-cookie';

const IconWrapper = styled("Box")({
    backgroundColor:"#f2f2f2",
    borderRadius:"10px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"46px",
    height:"37px"
})

export default function StdeuntsTypeSingleTeacher({teacher}) {
    const lang = Cookies.get("i18next") || "en";

    return (
        <Paper sx={{padding:"32px 24px",marginY:"30px"}}>
            <Typography sx={{fontSize:"22px",marginBottom:"18px"}}>
                Which students want to teach and train?
            </Typography>
            <Box sx={{display:"flex",columnGap:"20px"}}>
                <Stack direction="row" spacing={2} columnGap="10px">
                    <IconWrapper><TransgenderIcon/></IconWrapper>
                    <Box>
                        <Typography sx={{fontSize:"18px",fontWeight:"600"}}>Student's gender he teach</Typography>
                        <Typography sx={{color:"#878787",fontSize:"14px"}}>{teacher?.favStdGender}</Typography>
                    </Box>
                </Stack>
                <Stack direction="row" columnGap="10px">
                    <IconWrapper><BarChartIcon/></IconWrapper>
                    <Box>
                        <Typography sx={{fontSize:"18px",fontWeight:"600"}}>Student's level he teach</Typography>
                        <Typography sx={{color:"#878787",fontSize:"14px"}}>
                            {
                                lang==="ar"?
                                teacher.TeacherLevels.map(item=>item.Level.titleAR+" ")
                                :
                                teacher.TeacherLevels.map(item=>item.Level.titleEN+" ")
                            }
                        </Typography>
                    </Box>
            </Stack>
            </Box>
        </Paper>
    )
}
