import { Button, Container, Grid, Paper } from '@mui/material'
import React from 'react'
import AboutSingleTeacher from '../../components/client/singleTeacher/AboutSingleTeacher'
import AvailablitySingleTeacher from '../../components/client/singleTeacher/AvailablitySingleTeacher'
import HeaderSingleTeacher from '../../components/client/singleTeacher/HeaderSingleTeacher'
import ResumeSingleTeacher from '../../components/client/singleTeacher/ResumeSingleTeacher'
import StdeuntsTypeSingleTeacher from '../../components/client/singleTeacher/StdeuntsTypeSingleTeacher'
import Navbar from '../../components/Navbar'
import {useTeacher} from '../../hooks/useTeacher'
import {useParams} from 'react-router-dom'
import Loading from '../../components/Loading'
export default function SingleTeacher() {
    const {id} = useParams()
    const {data,isLoading} = useTeacher(id)

    return (
        <Navbar>
            {
            !isLoading?
            <Container sx={{marginBottom:"40px",marginTop:"40px"}}>
                <Grid container spacing={3}>
                    <Grid item md={12} lg={8}>
                        <HeaderSingleTeacher teacher={data?.data}/>
                        <AboutSingleTeacher teacher={data?.data}/>
                        <StdeuntsTypeSingleTeacher teacher={data?.data}/>
                        <AvailablitySingleTeacher teacher={data?.data}/>
                        <ResumeSingleTeacher teacher={data?.data}/>
                    </Grid>
                    <Grid item md={12} lg={4}>
                        <Paper sx={{padding:"24px 12px",marginY:"30px"}}>
                            <Button variant="contained" color="secondary" fullWidth
                            sx={{textTransform:"capitalize",marginBottom:"16px"}}>Request to book</Button>
                            <Button variant="outlined" fullWidth
                            sx={{textTransform:"capitalize"}}>Contact the teacher</Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            :
            <Loading/>
            }
        </Navbar>
    )
}
