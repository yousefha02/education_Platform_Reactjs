import { InputLabel, TextField,Grid, Button } from '@mui/material'
import React from 'react'

export default function FormAddDayTime({time,handleChangeTime,handleDelete}) {
    return (
        <Grid container sx={{marginY:"2px"}} spacing={3} alignItems="center">
            <Grid item xs={3}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>From</InputLabel>
                <TextField defaultValue={time.from} fullWidth type="time"
                onChange={(e)=>handleChangeTime(e,time)} name="from"/>
            </Grid>
            <Grid item xs={3}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>To</InputLabel>
                <TextField type="time" defaultValue={time.to} fullWidth
                onChange={(e)=>handleChangeTime(e,time)} name="to"/>
            </Grid>
            <Grid item xs={2}>
                <Button color="error" onClick={()=>handleDelete(time)}>delete</Button>
            </Grid>
        </Grid>
    )
}
