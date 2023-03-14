import { Avatar, Box, Button, Grid, Paper,styled, Typography } from '@mui/material'
import React from 'react'
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import ShieldIcon from '@mui/icons-material/Shield';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Image = styled("img")({
    width:"100%",height:"180px"
})

const MatLink = styled(Link)({})

export default function TeacherSearchBox({teacher}) {
    const lang = Cookies.get("i18next") || "en";
    return (
        <Paper sx={{padding:"32px 24px",marginY:"20px"}}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Avatar src={`${process.env.REACT_APP_API_KEY}images/${teacher.image}`} 
                    variant="square" sx={{width:"100%" , height:"100%",fontSize:"30px"}} alt={teacher.firstName}/>
                </Grid>
                <Grid item xs={6}>
                    <Link to="/teacher/1">
                        <Typography sx={{fontSize:"20px",marginBottom:"8px",fontWeight:"700"}}>{teacher.firstName} {teacher.lastName}</Typography>
                    </Link>
                    <Typography sx={{fontSize:"15px",fontWeight:"600",marginBottom:"10px"}}>
                        {lang==="en"?teacher.shortHeadlineEn:teacher.shortHeadlineAr}
                    </Typography>
                    <Box sx={{display:"flex",columnGap:"4px",alignItems:"center",marginBottom:"8px"}}>
                        <SpeakerNotesIcon sx={{fontSize:"16px",color:"#d5d5d5"}}/>
                        <Typography sx={{color:"#4f4f51",fontSize:"14px",fontWeight:"bold"}}>Speaks: </Typography>
                        <Typography sx={{color:"#616161",fontSize:"14px"}}>English</Typography>
                    </Box>
                    <Box sx={{display:"flex",columnGap:"4px",alignItems:"center",marginBottom:"8px"}}>
                        <ShieldIcon sx={{fontSize:"16px",color:"#d5d5d5"}}/>
                        <Typography sx={{color:"#4f4f51",fontSize:"14px",fontWeight:"bold"}}>Certified teacher: </Typography>
                        <Typography sx={{color:"#616161",fontSize:"14px"}}>{teacher.experienceYears} years of experience</Typography>
                    </Box>
                    <Typography sx={{fontSize:"13px",width:"90%"}}>
                    {lang==="en"?teacher.descriptionEn:teacher.descriptionAr}
                    <MatLink to="" 
                    sx={{marginRight:"4px",display:"inline-block",color:"#1a477e",fontSize:"13px"}}>Read more
                    </MatLink>
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography sx={{fontWeight:"bold",fontSize:"14px",marginBottom:"12px"}}>4.05 KWD/Hour</Typography>
                    <Button variant="contained" fullWidth>طلب حجز الآن</Button>
                    <Button variant="outlined" fullWidth sx={{marginTop:"16px"}}>تواصل مع المعلم</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}
