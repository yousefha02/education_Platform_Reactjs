import { InputLabel, TextField,Grid, Button } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function FormWorkExperience({item,handleChangeWorkExperience}) {
    const {t} = useTranslation()
    return (
        <>
            <Grid item xs={3}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('job')}</InputLabel>
                <TextField defaultValue={item.job} fullWidth 
                onChange={(e)=>handleChangeWorkExperience(e,item.id)} name="job"/>
            </Grid>
            <Grid item xs={2}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('from')}</InputLabel>
                <TextField type="number" defaultValue={item.from} fullWidth
                onChange={(e)=>handleChangeWorkExperience(e,item.id)} name="from"/>
            </Grid>
            <Grid item xs={2}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('to')}</InputLabel>
                <TextField type="number" defaultValue={item.to} fullWidth
                onChange={(e)=>handleChangeWorkExperience(e,item.id)} name="to"/>
            </Grid>
            <Grid item xs={2}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('company')}</InputLabel>
                <TextField fullWidth defaultValue={item.company}
                onChange={(e)=>handleChangeWorkExperience(e,item.id)} name="company"/>
            </Grid>
            <Grid item xs={2}>
                <Button color="error">{t('delete')}</Button>
            </Grid>
        </>
    )
}
