import React from 'react'
import Navbar from '../../components/Navbar'
import { useTranslation } from 'react-i18next';
import { Box, Container, Divider, Grid, Paper, Typography } from '@mui/material';
import ContactPerson from '../../components/reusableUi/ContactPerson';
import Conversaition from '../../components/student/Conversaition';

export default function TeacherMessages() {
    const {t} = useTranslation()
    return (
        <Navbar>
            <Container sx={{marginY:"50px",overflow:"hidden"}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={4}>
                        <Box>
                            <Paper sx={{paddingY:"20px"}}>
                                <Typography sx={{paddingX:"20px"}}>{t('messages')}</Typography>
                                <Divider sx={{marginY:"10px"}}/>
                                <Box sx={{paddingX:"20px"}}>
                                    {
                                        ["Yousef","Mohammed","Ali"].map((item,index)=>
                                        {
                                            return(
                                                <ContactPerson item={item} key={index+'k1'}/>
                                            )
                                        })
                                    }
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <Conversaition/>
                    </Grid>
                </Grid>
            </Container>
        </Navbar>
    )
}
