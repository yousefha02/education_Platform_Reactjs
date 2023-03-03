import { Box, Button, DialogActions, DialogTitle, InputLabel, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm,Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export default function AddStudyCurriculums({handleClose}) {
    const {t} = useTranslation()
    const { register,control, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            title_ar:"",
            title_en:"",
        }
    });
    
    function onSubmit(data)
    {
        console.log(data)
    }

    return (
        <>
            <DialogTitle>{t('addstudycurriculum')}</DialogTitle>
            <Box sx={{display:"flex",justifyContent:"center",padding:"20px"}}>
                <Box sx={{width:"500px",maxWidth:"100%"}}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box sx={{marginBottom:"18px"}}>
                            <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>{t('titleAr')}</InputLabel>
                            <Controller
                            name="title_ar"
                            control={control}
                            render={({ field }) => <TextField {...field} fullWidth/>}
                            {...register("title_ar", { required: "title Address is required" })}
                            />
                            {errors.title_ar?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                        </Box>
                        <Box sx={{marginBottom:"18px"}}>
                            <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>{t('titleEn')}</InputLabel>
                            <Controller
                            name="title_en"
                            control={control}
                            render={({ field }) => <TextField {...field} fullWidth/>}
                            {...register("title_en", { required: "title Address is required" })}
                            />
                            {errors.title_en?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                        </Box>
                        <DialogActions>
                            <Button variant="contained" type="submit" sx={{ml:"6px",mr:"6px"}}>{t('save')}</Button>
                            <Button onClick={handleClose} color="error">{t('cancel')}</Button>
                        </DialogActions>
                    </form>
                </Box>
            </Box>
        </>
    )
}