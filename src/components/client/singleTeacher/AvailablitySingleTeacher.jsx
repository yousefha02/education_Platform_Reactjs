import { Box, Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

export default function AvailablitySingleTeacher() {
    return (
        <Paper sx={{padding:"32px 24px",marginY:"30px"}}>
            <Typography sx={{fontSize:"22px",marginBottom:"18px"}}>Availability</Typography>
            <Box sx={{backgroundColor:"#f9fdff",border:"1px solid #e5f5fe",padding:"20px",
            borderRadius:"8px"}}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Typography sx={{color:"#1a477e",fontWeight:"600"}}>Saturday</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography sx={{color:"#1a477e"}}>08:00 - 20:00</Typography>
                    </Grid>
                </Grid>
                <Divider sx={{backgroundColor:"#e5f5fe",marginY:"30px"}}/>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Typography sx={{color:"#1a477e",fontWeight:"600"}}>Saturday</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography sx={{color:"#1a477e"}}>08:00 - 20:00</Typography>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}
