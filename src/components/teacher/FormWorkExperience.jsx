import { InputLabel, TextField,Grid, Button } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function FormWorkExperience({item,handleChangeWorkExperience,handleDeleteExperiecnce}) {
    const {t} = useTranslation()
    return (
        <>
            <Grid item xs={3}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('job')}</InputLabel>
                <TextField defaultValue={item.jobTitle} fullWidth 
                onChange={(e)=>handleChangeWorkExperience(e,item)} name="jobTitle"/>
            </Grid>
            <Grid item xs={2}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('from')}</InputLabel>
                <TextField type="number" defaultValue={item.from} fullWidth
                onChange={(e)=>handleChangeWorkExperience(e,item)} name="from"/>
            </Grid>
            <Grid item xs={2}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('to')}</InputLabel>
                <TextField type="number" defaultValue={item.to} fullWidth
                onChange={(e)=>handleChangeWorkExperience(e,item)} name="to"/>
            </Grid>
            <Grid item xs={2}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('company')}</InputLabel>
                <TextField fullWidth defaultValue={item.companyName}
                onChange={(e)=>handleChangeWorkExperience(e,item)} name="companyName"/>
            </Grid>
            <Grid item xs={2}>
                <Button color="error" onClick={()=>handleDeleteExperiecnce(item)}>{t('delete')}</Button>
            </Grid>
        </>
    )
}
