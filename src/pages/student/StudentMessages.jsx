import { Box, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import ContactPerson from '../../components/reusableUi/ContactPerson'
import Conversaition from '../../components/student/Conversaition'
import StudentLayout from '../../components/student/StudentLayout'

export default function StudentMessages() {
    const [conversaition,setConversaition] = useState(null)
    return (
            <StudentLayout>
                <Stack direction={{md:"row",xs:"column"}} gap="10px">
                    <Box sx={{width:{xs:"100%",md:"70%"}}}>
                        <Conversaition/>
                    </Box>
                    <Box sx={{width:{xs:"100%",md:"30%"}}}>
                        <Paper sx={{paddingY:"20px"}}>
                            <Typography sx={{paddingX:"20px"}}>Messages</Typography>
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
                </Stack>
            </StudentLayout>
    )
}
