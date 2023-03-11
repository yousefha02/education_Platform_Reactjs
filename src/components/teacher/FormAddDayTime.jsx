import { InputLabel, TextField,Grid, Button } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function FormAddDayTime({time,handleChangeTime,handleDelete}) {
    const {t} = useTranslation()
    return (
        <Grid container sx={{marginY:"2px"}} spacing={3} alignItems="center">
            <Grid item xs={3}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('from')}</InputLabel>
                <TextField defaultValue={time.from} fullWidth type="time"
                onChange={(e)=>handleChangeTime(e,time)} name="from"/>
            </Grid>
            <Grid item xs={3}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('to')}</InputLabel>
                <TextField type="time" defaultValue={time.to} fullWidth
                onChange={(e)=>handleChangeTime(e,time)} name="to"/>
            </Grid>
            <Grid item xs={2}>
                <Button color="error" onClick={()=>handleDelete(time)}>{t('delete')}</Button>
            </Grid>
        </Grid>
    )
}
