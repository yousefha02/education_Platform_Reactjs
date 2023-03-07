import { InputLabel, TextField,Grid, Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from "react-hook-form";


export default function FormWorkExperience({item,handleChangeWorkExperience,handleDeleteExperiecnce , onSave , index}) {
    const {t} = useTranslation()
    const { register,control, formState: { errors }, handleSubmit , watch , reset} = useForm({
        defaultValues: {
            jobTitle:item.jobTitle,
            from : item.from,
            to: item.to,
            companyName : item.companyName
        }
    });

    // useEffect(()=>{
    //     reset({
    //         jobTitle:item.jobTitle,
    //         from : item.from,
    //         to: item.to,
    //         companyName : item.companyName
    //     })
    // },[item])

    return (
        <>
            <Grid item xs={3}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('job')}</InputLabel>
                <Controller
                    name="jobTitle"
                    control={control}
                    render={({ field }) => <TextField type="text" {...field} fullWidth/>}
                    {...register("jobTitle", { required: "email Address is required" })}
                />
                {/* <TextField defaultValue={item.jobTitle} fullWidth 
                onChange={(e)=>handleChangeWorkExperience(e,item)} name="jobTitle"/> */}
            </Grid>
            <Grid item xs={2}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('from')}</InputLabel>
                <Controller
                    name="from"
                    control={control}
                    render={({ field }) => <TextField inputProps={{type:"number"}} {...field} fullWidth/>}
                    {...register("from", { required: "email Address is required" })}
                />
                {/* <TextField type="number" defaultValue={item.from} fullWidth
                onChange={(e)=>handleChangeWorkExperience(e,item)} name="from"/> */}
            </Grid>
            <Grid item xs={2}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('to')}</InputLabel>
                <Controller
                    name="to"
                    control={control}
                    render={({ field }) => <TextField inputProps={{type:"number"}} {...field} fullWidth/>}
                    {...register("to", { required: "email Address is required" })}
                />
                {/* <TextField type="number" defaultValue={item.to} fullWidth
                onChange={(e)=>handleChangeWorkExperience(e,item)} name="to"/> */}
            </Grid>
            <Grid item xs={2}>
                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('company')}</InputLabel>
                <Controller
                    name="companyName"
                    control={control}
                    render={({ field }) => <TextField inputProps={{type:"text"}} {...field} fullWidth/>}
                    {...register("companyName", { required: "email Address is required" })}
                />
                {/* <TextField fullWidth defaultValue={item.companyName}
                onChange={(e)=>handleChangeWorkExperience(e,item)} name="companyName"/> */}
            </Grid>
            <Grid item xs={2}>
                <Button color="error" onClick={()=>handleDeleteExperiecnce(index)}>{t('delete')}</Button>
                <Button color="success" onClick={()=>onSave(index,{
                    jobTitle:watch('jobTitle') , from:watch('from') , companyName : watch('companyName') , to:watch('to')
                    })}>
                    Save
                </Button>
            </Grid>
        </>
    )
}
