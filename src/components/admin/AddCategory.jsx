import { Box, Button, DialogActions, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm,Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {useSubjects} from '../../hooks/useSubject'
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';

export default function AddStudyYear({handleClose}) {

    const {t} = useTranslation()
    const {closeSnackbar,enqueueSnackbar} = useSnackbar()
    const {token} = useSelector((state)=>state.admin)

    const { register,control, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            title_ar:"",
            title_en:"",
            subject:""
        }
    });

    const {data,isLoading} = useSubjects()

    async function onSubmit(data)
    {
        closeSnackbar()
        try{
            const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/admin/subject`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":token
                },
                body:JSON.stringify({titleAR:data.title_ar,titleEN:data.title_en,subjectCategoryId:data.subject})
            })
            if(response.status!==200&&response.status!==201)
            {
                throw new Error('failed occured')
            }
            const resData = await response.json()
            enqueueSnackbar(resData.msg,{variant:"success",autoHideDuration:8000})
        }
        catch(err)
        {
            console.log(err)
        }
    }

    return (
        <>
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
                            {errors.title_en?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                        </Box>
                        <Box sx={{marginBottom:"26px"}}>
                            <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('subject')}</InputLabel>
                            <Controller
                                name="level"
                                control={control}
                                render={({ field }) =><FormControl fullWidth>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    {...register("subject", { required: "level is required" })}
                                >
                                    {
                                        !isLoading&&
                                        data.data.map((item,index)=>
                                        {
                                            return <MenuItem key={index+'ds1'} value={item.id}>{item.titleAR}</MenuItem>
                                        })
                                    }
                                </Select>
                                </FormControl>
                                }
                            />
                            {errors.subject?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                        </Box>
                        <DialogActions>
                            <Button variant="contained" type="submit" sx={{ml:"6px",mr:"6px"}}>{t('save')}</Button>
                            <Button onClick={handleClose} color="error">{t('cancel')}</Button>
                        </DialogActions>
                    </form>
                </Box>
        </>
    )
}