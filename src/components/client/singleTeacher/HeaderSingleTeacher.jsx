import { Avatar, Box, Paper, Typography } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player'
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import Cookies from 'js-cookie';

export default function HeaderSingleTeacher({teacher}) {
    const lang = Cookies.get("i18next") || "en";

    return (
        <Paper sx={{padding:"24px",marginY:"30px"}}>
            <ReactPlayer url={teacher?.videoLink} width="100%"/>
            <Box sx={{marginTop:"30px",display:"flex",columnGap:"20px"}}>
                <Avatar src={`${process.env.REACT_APP_API_KEY}images/${teacher.image}`} 
                sx={{width:"141px",height:"141px"}}/>
                <Box>
                    <Typography sx={{fontSize:"20px",marginBottom:"8px",fontWeight:"700"}}>{teacher?.firstName + " "+teacher?.lastName[0]}</Typography>
                    <Box sx={{display:"flex",columnGap:"4px",alignItems:"center",marginBottom:"8px"}}>
                        <SpeakerNotesIcon sx={{fontSize:"16px",color:"#d5d5d5"}}/>
                        <Typography sx={{color:"#4f4f51",fontSize:"14px",fontWeight:"bold"}}>Speaks: </Typography>
                        <Typography sx={{color:"#616161",fontSize:"14px"}}>
                            {
                                lang==="ar"?
                                teacher.LangTeachStds.map(item=>item.Language.titleAR+" ")
                                :
                                teacher.LangTeachStds.map(item=>item.Language.titleEN+" ")
                            }
                        </Typography>
                    </Box>
                    <Box sx={{display:"flex",columnGap:"4px",alignItems:"center",marginBottom:"8px"}}>
                        <SpeakerNotesIcon sx={{fontSize:"16px",color:"#d5d5d5"}}/>
                        <Typography sx={{color:"#4f4f51",fontSize:"14px",fontWeight:"bold"}}>Certified teacher: </Typography>
                        <Typography sx={{color:"#616161",fontSize:"14px"}}>{teacher?.experienceYears} Total years of experience</Typography>
                    </Box>
                    <Box sx={{display:"flex",columnGap:"4px",alignItems:"center",marginBottom:"8px"}}>
                        <LocationOnIcon sx={{fontSize:"16px",color:"#d5d5d5"}}/>
                        <Typography sx={{color:"#4f4f51",fontSize:"14px",fontWeight:"bold"}}>Location: </Typography>
                        <Typography sx={{color:"#616161",fontSize:"14px"}}>{teacher?.city + " , "+ teacher?.country}</Typography>
                    </Box>
                    <Box sx={{display:"flex",columnGap:"4px",alignItems:"center",marginBottom:"8px"}}>
                        <SchoolIcon sx={{fontSize:"16px",color:"#d5d5d5"}}/>
                        <Typography sx={{color:"#4f4f51",fontSize:"14px",fontWeight:"bold"}}>Subjects: </Typography>
                        <Typography sx={{color:"#616161",fontSize:"14px"}}>
                            {
                                lang==="ar"?
                                teacher.TeacherSubjects.map(item=>item.Subject.titleAR+" ")
                                :
                                teacher.TeacherSubjects.map(item=>item.Subject.titleEN+" ")
                            }
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}
