import { InputLabel, TextField,Grid, Button } from '@mui/material'
import React from 'react'

export default function FormWorkExperience({item,handleChangeWorkExperience}) {
    return (
        <>
            <Grid item xs={3}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>Job title</InputLabel>
                <TextField defaultValue={item.job} fullWidth 
                onChange={(e)=>handleChangeWorkExperience(e,item.id)} name="job"/>
            </Grid>
            <Grid item xs={2}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>From</InputLabel>
                <TextField type="number" defaultValue={item.from} fullWidth
                onChange={(e)=>handleChangeWorkExperience(e,item.id)} name="from"/>
            </Grid>
            <Grid item xs={2}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>To</InputLabel>
                <TextField type="number" defaultValue={item.to} fullWidth
                onChange={(e)=>handleChangeWorkExperience(e,item.id)} name="to"/>
            </Grid>
            <Grid item xs={2}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>Company Name</InputLabel>
                <TextField fullWidth defaultValue={item.company}
                onChange={(e)=>handleChangeWorkExperience(e,item.id)} name="company"/>
            </Grid>
            <Grid item xs={2}>
                <Button color="error">delete</Button>
            </Grid>
        </>
    )
}
