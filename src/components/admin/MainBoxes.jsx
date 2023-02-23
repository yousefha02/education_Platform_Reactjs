import React from 'react'
import {Card, Grid, Typography,styled,Box} from '@mui/material'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
const details = [
    {
        title:"Total Students",
        number:200,
        icon:PeopleAltOutlinedIcon,
        color:"#5e72e4"
    },
    {
        title:"Total Teachers",
        number:8,
        icon:SchoolOutlinedIcon,
        color:"#FFAA16"
    },
    {
        title:"Total Subjects",
        number:34,
        icon:SubjectOutlinedIcon,
        color:"#673BB7"
    },
    {
        title:"Registered Lessons",
        number:20,
        icon:CastForEducationOutlinedIcon,
        color:"#FF1616"
    }
]

const IconWrapper = styled(Box)({
    borderRadius:"50%",
    padding:"12px 10px",
    backgroundColor:"#F5F7FB",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    color:"#464a53",
    width:"60px",
    height:"60px"
})

const CardBox = styled(Card)({
    padding:"30px 12px",
    display:"flex",
    width:"100%",
    columnGap:"20px"
})

export default function Statistics() {
    return (
        <Grid container spacing={4}>
            {
                details.map((item,index)=>
                {
                    return(
                        <Grid item xs={12} sm={6} lg={3} key={index+'q1'}>
                            <CardBox sx={{backgroundColor:item.color}}>
                                <IconWrapper><item.icon sx={{fontSize:"25px"}}/></IconWrapper>
                                <Box>
                                    <Typography sx={{fontSize:"16px",fontWeight:"500",
                                    color:"white",textTransform:"uppercase"}}>{item.title}</Typography>
                                    <Typography sx={{fontWeight:"700",fontSize:"24px",
                                    color:"white"}}>{item.number}</Typography>
                                </Box>
                            </CardBox>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

