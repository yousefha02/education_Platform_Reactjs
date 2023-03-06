import { Box, Button, Grid, Paper,styled, Typography } from '@mui/material'
import React from 'react'
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import ShieldIcon from '@mui/icons-material/Shield';
import { Link } from 'react-router-dom';

const Image = styled("img")({
    width:"100%",height:"180px"
})

const MatLink = styled("Link")({})

export default function TeacherSearchBox() {
    return (
        <Paper sx={{padding:"32px 24px",marginY:"20px"}}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Image src={'https://mui.com/static/images/avatar/2.jpg'}/>
                </Grid>
                <Grid item xs={6}>
                    <Link to="/teacher/1">
                        <Typography sx={{fontSize:"20px",marginBottom:"8px",fontWeight:"700"}}>Yousef A.</Typography>
                    </Link>
                    <Typography sx={{fontSize:"15px",fontWeight:"600",marginBottom:"10px"}}>Simple and clear style up to the highest levels</Typography>
                    <Box sx={{display:"flex",columnGap:"4px",alignItems:"center",marginBottom:"8px"}}>
                        <SpeakerNotesIcon sx={{fontSize:"16px",color:"#d5d5d5"}}/>
                        <Typography sx={{color:"#4f4f51",fontSize:"14px",fontWeight:"bold"}}>Speaks: </Typography>
                        <Typography sx={{color:"#616161",fontSize:"14px"}}>English</Typography>
                    </Box>
                    <Box sx={{display:"flex",columnGap:"4px",alignItems:"center",marginBottom:"8px"}}>
                        <ShieldIcon sx={{fontSize:"16px",color:"#d5d5d5"}}/>
                        <Typography sx={{color:"#4f4f51",fontSize:"14px",fontWeight:"bold"}}>Certified teacher: </Typography>
                        <Typography sx={{color:"#616161",fontSize:"14px"}}>5-10 Total years of experience</Typography>
                    </Box>
                    <Typography sx={{fontSize:"13px",width:"90%"}}>
                    Chemistry, physics and mathematics teacher, long experience in school education for all educational stages of the ...
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
