import { Avatar, Box, Container, Divider, Grid, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import LinksFooter from '../client/home/LinksFooter'
import Footer from '../client/home/Footer'
import DownloadApp from '../client/home/DownloadApp'
import Navbar from '../Navbar'
import { useTranslation } from 'react-i18next';

export default function StudentLayout({children}) {
    const {t} = useTranslation()
    const topics = [{title:t('profile'),link:"/profile"},{title:t('profile_photo'),link:"/profile_photo"},{title:t('lessons'),link:"/lessons"},
    {title:t('settings'),link:'/settings'},{title:t('messages'),link:"/messages"},{title:t('credit'),link:"/credit"}]

    return (
        <Navbar>
            <Container sx={{marginTop:"50px"}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={3}>
                        <Paper sx={{padding:"20px"}}>
                            <Box sx={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                                <Avatar src={''} alt="Yousef Abohani" sx={{width:"95px",height:"95px"}}/>
                                <Typography sx={{marginTop:"16px",fontWeight:"700"}}>Yousef Abohani</Typography>
                            </Box>
                            <Divider sx={{marginY:"20px"}}/>
                            <List>
                                {
                                    topics.map((topic,index)=>
                                    {
                                        return(
                                            <Link to={`/student${topic.link}`}>
                                                <ListItem key={topic.title+index+'o'} disablePadding>
                                                    <ListItemButton>
                                                        <ListItemText primary={topic.title} 
                                                        sx={{textAlign:"start"}}/>
                                                    </ListItemButton>
                                                </ListItem>
                                            </Link>
                                        )
                                    })
                                }
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} lg={9} sx={{overflow:"hidden"}}>{children}</Grid>
                </Grid>
            </Container>
            <Box sx={{marginTop:"120px"}}>
                <DownloadApp/>
                <LinksFooter/>
                <Footer/>
            </Box>
        </Navbar>
    )
}
