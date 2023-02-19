import { InputLabel, TextField,Grid, Button } from '@mui/material'
import React from 'react'

export default function FormEducationDegrees({item,handleChangeDegrees}) {
    return (
        <>
            <Grid item xs={3}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>Institution Name</InputLabel>
                <TextField defaultValue={item.university} fullWidth 
                onChange={(e)=>handleChangeDegrees(e,item.id)} name="university"/>
            </Grid>
            <Grid item xs={2}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>From</InputLabel>
                <TextField type="number" defaultValue={item.from} fullWidth
                onChange={(e)=>handleChangeDegrees(e,item.id)} name="from"/>
            </Grid>
            <Grid item xs={2}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>To</InputLabel>
                <TextField type="number" defaultValue={item.to} fullWidth
                onChange={(e)=>handleChangeDegrees(e,item.id)} name="to"/>
            </Grid>
            <Grid item xs={2}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>Degrees</InputLabel>
                <TextField fullWidth defaultValue={item.degrees}
                onChange={(e)=>handleChangeDegrees(e,item.id)} name="degrees"/>
            </Grid>
            <Grid item xs={2}>
                <Button color="error">delete</Button>
            </Grid>
        </>
    )
}
