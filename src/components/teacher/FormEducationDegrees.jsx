import { InputLabel, TextField,Grid, Button } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function FormEducationDegrees({item,handleChangeDegrees,handleDeleteDegrees}) {
    const {t} = useTranslation()
    return (
        <>
            <Grid item xs={3}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('InstitutionName')}</InputLabel>
                <TextField defaultValue={item.UniversityName} fullWidth 
                onChange={(e)=>handleChangeDegrees(e,item)} name="UniversityName"/>
            </Grid>
            <Grid item xs={2}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('from')}</InputLabel>
                <TextField type="number" defaultValue={item.from} fullWidth
                onChange={(e)=>handleChangeDegrees(e,item)} name="from"/>
            </Grid>
            <Grid item xs={2}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('to')}</InputLabel>
                <TextField type="number" defaultValue={item.to} fullWidth
                onChange={(e)=>handleChangeDegrees(e,item)} name="to"/>
            </Grid>
            <Grid item xs={2}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('Degrees')}</InputLabel>
                <TextField fullWidth defaultValue={item.degree}
                onChange={(e)=>handleChangeDegrees(e,item)} name="degree"/>
            </Grid>
            <Grid item xs={2}>
                <Button color="error" onClick={()=>handleDeleteDegrees(item)}>{t('delete')}</Button>
            </Grid>
        </>
    )
}
