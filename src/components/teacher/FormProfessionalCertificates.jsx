import { InputLabel, TextField,Grid, Button } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function FormProfessionalCertificates({item,handleChangeCertificates}) {
    const {t} = useTranslation()
    return (
        <>
            <Grid item xs={3}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('InstitutionName')}</InputLabel>
                <TextField defaultValue={item.institution} fullWidth 
                onChange={(e)=>handleChangeCertificates(e,item.id)} name="institution"/>
            </Grid>
            <Grid item xs={2}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('from')}</InputLabel>
                <TextField type="number" defaultValue={item.from} fullWidth
                onChange={(e)=>handleChangeCertificates(e,item.id)} name="from"/>
            </Grid>
            <Grid item xs={2}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('to')}</InputLabel>
                <TextField type="number" defaultValue={item.to} fullWidth
                onChange={(e)=>handleChangeCertificates(e,item.id)} name="to"/>
            </Grid>
            <Grid item xs={2}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('subject')}</InputLabel>
                <TextField fullWidth defaultValue={item.subject}
                onChange={(e)=>handleChangeCertificates(e,item.id)} name="subject"/>
            </Grid>
            <Grid item xs={2}>
                <Button color="error">{t('delete')}</Button>
            </Grid>
        </>
    )
}
