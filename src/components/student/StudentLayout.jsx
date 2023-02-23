import { Avatar, Box, Container, Divider, Grid, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const topics = [{title:"Profile",link:"/profile"},{title:"Lessons",link:"Llesson"},
{title:"Settings",link:'/settings'},{title:"Messages",link:"/messages"}]

export default function StudentLayout() {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={3}>
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
                                        <Link to={`/admin${topic.link}`}>
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
                <Grid item xs={9}>Profile</Grid>
            </Grid>
        </Container>
    )
}
