import { Box, Button, Container, Grid } from '@mui/material'
import React from 'react'
import FilterSearch from '../../components/client/searchList/FilterSearch'
import HeaderSearchList from '../../components/client/searchList/HeaderSearchList'
import TeacherSearchBox from '../../components/client/searchList/TeacherSearchBox'
import Navbar from '../../components/Navbar'
import {useLocation} from 'react-router-dom'
export default function SearchTeachers() {
    const {state} = useLocation()
    return (
        <Navbar>
            <Container sx={{marginBottom:"40px",marginTop:"60px"}}>
                <Grid container spacing={3}>
                    <Grid item xs={9}>
                        <Box sx={{marginBottom:"20px"}}><HeaderSearchList/></Box>
                        <TeacherSearchBox/>
                        <TeacherSearchBox/>
                        <TeacherSearchBox/>
                        <Button variant="contained" fullWidth>Load More</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <FilterSearch/>
                    </Grid>
                </Grid>
            </Container>
        </Navbar>
    )
}