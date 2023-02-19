import { InputLabel, TextField,Grid, Button } from '@mui/material'
import React from 'react'

export default function FormProfessionalCertificates({item,handleChangeCertificates}) {
    return (
        <>
            <Grid item xs={3}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>Institution Name</InputLabel>
                <TextField defaultValue={item.institution} fullWidth 
                onChange={(e)=>handleChangeCertificates(e,item.id)} name="institution"/>
            </Grid>
            <Grid item xs={2}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>From</InputLabel>
                <TextField type="number" defaultValue={item.from} fullWidth
                onChange={(e)=>handleChangeCertificates(e,item.id)} name="from"/>
            </Grid>
            <Grid item xs={2}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>To</InputLabel>
                <TextField type="number" defaultValue={item.to} fullWidth
                onChange={(e)=>handleChangeCertificates(e,item.id)} name="to"/>
            </Grid>
            <Grid item xs={2}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>Subject</InputLabel>
                <TextField fullWidth defaultValue={item.subject}
                onChange={(e)=>handleChangeCertificates(e,item.id)} name="subject"/>
            </Grid>
            <Grid item xs={2}>
                <Button color="error">delete</Button>
            </Grid>
        </>
    )
}
