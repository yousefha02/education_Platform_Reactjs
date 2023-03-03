import { Grid, InputLabel, TextField } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function TeachingWayDetailsForm() {
    const {t} = useTranslation()
    return (
        <Grid container sx={{marginY:"2px",paddingX:"30px"}} spacing={3} alignItems="center">
            <Grid item xs={6}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('rateperhour')}</InputLabel>
                <TextField fullWidth type="number" name="rate"/>
            </Grid>
            <Grid item xs={6}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('Currency')}</InputLabel>
                <TextField fullWidth name="currency"/>
            </Grid>
        </Grid>
    )
}
