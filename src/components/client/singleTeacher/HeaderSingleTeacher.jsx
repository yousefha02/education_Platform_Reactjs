import { Box, Paper,styled, Typography } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player'
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
const Image = styled("img")({
    width:"141px",
    height:"141px",
    borderRadius:"8px"
})

export default function HeaderSingleTeacher({teacher}) {
    return (
        <Paper sx={{padding:"24px",marginY:"30px"}}>
            <ReactPlayer url={teacher.videoLink} width="100%"/>
            <Box sx={{marginTop:"30px",display:"flex",columnGap:"20px"}}>
                <Image src={"https://mui.com/static/images/avatar/1.jpg"}/>
                <Box>
                    <Typography sx={{fontSize:"20px",marginBottom:"8px",fontWeight:"700"}}>{teacher.firstName + " "+teacher.lastName[0]}</Typography>
                    <Box sx={{display:"flex",columnGap:"4px",alignItems:"center",marginBottom:"8px"}}>
                        <SpeakerNotesIcon sx={{fontSize:"16px",color:"#d5d5d5"}}/>
                        <Typography sx={{color:"#4f4f51",fontSize:"14px",fontWeight:"bold"}}>Speaks: </Typography>
                        <Typography sx={{color:"#616161",fontSize:"14px"}}>English</Typography>
                    </Box>
                    <Box sx={{display:"flex",columnGap:"4px",alignItems:"center",marginBottom:"8px"}}>
                        <SpeakerNotesIcon sx={{fontSize:"16px",color:"#d5d5d5"}}/>
                        <Typography sx={{color:"#4f4f51",fontSize:"14px",fontWeight:"bold"}}>Certified teacher: </Typography>
                        <Typography sx={{color:"#616161",fontSize:"14px"}}>5-10 Total years of experience</Typography>
                    </Box>
                    <Box sx={{display:"flex",columnGap:"4px",alignItems:"center",marginBottom:"8px"}}>
                        <LocationOnIcon sx={{fontSize:"16px",color:"#d5d5d5"}}/>
                        <Typography sx={{color:"#4f4f51",fontSize:"14px",fontWeight:"bold"}}>Location: </Typography>
                        <Typography sx={{color:"#616161",fontSize:"14px"}}>Gaza, Palestine</Typography>
                    </Box>
                    <Box sx={{display:"flex",columnGap:"4px",alignItems:"center",marginBottom:"8px"}}>
                        <SchoolIcon sx={{fontSize:"16px",color:"#d5d5d5"}}/>
                        <Typography sx={{color:"#4f4f51",fontSize:"14px",fontWeight:"bold"}}>Subjects: </Typography>
                        <Typography sx={{color:"#616161",fontSize:"14px"}}>Biology, Chemistry, Combined science</Typography>
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}
