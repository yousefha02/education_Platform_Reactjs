import { Button, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import AboutSingleTeacher from '../../components/client/singleTeacher/AboutSingleTeacher'
import AvailablitySingleTeacher from '../../components/client/singleTeacher/AvailablitySingleTeacher'
import HeaderSingleTeacher from '../../components/client/singleTeacher/HeaderSingleTeacher'
import ResumeSingleTeacher from '../../components/client/singleTeacher/ResumeSingleTeacher'
import StdeuntsTypeSingleTeacher from '../../components/client/singleTeacher/StdeuntsTypeSingleTeacher'
import Navbar from '../../components/Navbar'
export default function SingleTeacher() {
    return (
        <Navbar>
            <Container sx={{marginBottom:"40px",marginTop:"20p"}}>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <HeaderSingleTeacher/>
                        <AboutSingleTeacher/>
                        <StdeuntsTypeSingleTeacher/>
                        <AvailablitySingleTeacher/>
                        <ResumeSingleTeacher/>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper sx={{padding:"24px 12px",marginY:"30px"}}>
                            <Button variant="contained" color="secondary" fullWidth
                            sx={{textTransform:"capitalize",marginBottom:"16px"}}>Request to book</Button>
                            <Button variant="outlined" fullWidth
                            sx={{textTransform:"capitalize"}}>Contact the teacher</Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Navbar>
    )
}
