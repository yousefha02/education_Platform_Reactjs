import { Box, Button, DialogActions, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm,Controller } from 'react-hook-form';
import {useLevels} from '../../hooks/useLevels'
import {useSnackbar} from 'notistack'
import { useTranslation } from 'react-i18next';

export default function AddStudyYear({handleClose}) {

    const {t} = useTranslation()
    const {closeSnackbar,enqueueSnackbar} = useSnackbar()
    const { register,control, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            titleAR:"",
            titleEN:"",
            levelId:""
        }
    });
    
    async function onSubmit(data)
    {
        closeSnackbar()
        try{
            const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/admin/class`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            })
            if(response.status!==200&&response.status!==201)
            {
                throw new Error('failed occured')
            }
            const resData = await response.json()
            enqueueSnackbar(resData.message,{variant:"success",autoHideDuration:8000})
            handleClose()
        }
        catch(err)
        {
            console.log(err)
        }
    }
    
    const {data,isLoading} = useLevels()

    return (
        <>
            <DialogTitle>{t('addstudyyear')}</DialogTitle>
            <Box sx={{display:"flex",justifyContent:"center",padding:"20px"}}>
                <Box sx={{width:"500px",maxWidth:"100%"}}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box sx={{marginBottom:"18px"}}>
                            <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>{t('titleAr')}</InputLabel>
                            <Controller
                            name="titleAR"
                            control={control}
                            render={({ field }) => <TextField {...field} fullWidth/>}
                            {...register("titleAR", { required: "title Address is required" })}
                            />
                            {errors.titleAR?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                        </Box>
                        <Box sx={{marginBottom:"18px"}}>
                            <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>{t('titleEn')}</InputLabel>
                            <Controller
                            name="title_en"
                            control={control}
                            render={({ field }) => <TextField {...field} fullWidth/>}
                            {...register("titleEN", { required: "titleEN Address is required" })}
                            />
                            {errors.titleEN?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                        </Box>
                        <Box sx={{marginBottom:"26px"}}>
                            <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('studylevel')}</InputLabel>
                            <Controller
                                name="levelId"
                                control={control}
                                render={({ field }) =><FormControl fullWidth>
                                {!isLoading&&
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    {...register("levelId", { required: "levelId is required" })}
                                >
                                    {
                                        data.data.length>0&&
                                        data.data.map((level,index)=>
                                        {
                                            return <MenuItem key={index+'i1'} value={level.id}>{level.titleEN}</MenuItem>
                                        })
                                    }
                                </Select>}
                                </FormControl>
                                }
                            />
                            {errors.levelId?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
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