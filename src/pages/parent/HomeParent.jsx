import { Avatar, Button, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'

export default function HomeParent() {
    const navigate = useNavigate()
    return (
        <Navbar>
            <Container>
                <Typography sx={{color:"#000000",fontWeight:"700",fontSize:"24px",marginBottom:"8px"}}>اهلا بك في اكاديمتنا</Typography>
                <Typography sx={{color:"#000000",fontWeight:"500",fontSize:"18px",marginBottom:"32px"}}>يسعدنا تسهيل عملية متابعة دراسة ابنائك من خلال اكاديميتنا </Typography> 
                <Grid container>
                    <Grid item xs={12} md={4} lg={3} sx={{width:"100%"}}>
                        <Paper sx={{padding:"8px 6px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <Avatar alt={'Yousef'} src={`${process.env.REACT_APP_API}/images/`} 
                            sx={{width:"105px",height:"105px",fontSize:"42px"}}/>
                            <Typography sx={{fontWeight:"500",marginY:"10px",fontSize:"18px",minHeight:"50px",textAlign:"center"}}>الطالب : Yousef Abohani </Typography>
                            <Button onClick={()=>navigate(`/parent-dash/student/1`)}>مشاهدة</Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Navbar>
    )
}
