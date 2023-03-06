import { Box, Button, DialogActions, DialogTitle, InputLabel, TextField, Typography,styled } from '@mui/material'
import React, { useState } from 'react'
import { useForm,Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';

const Label = styled("label")({
    width:"100%",
    display:"block",
    padding:"6px 16px",
    cursor:"pointer"
})

const Image = styled('img')({
    width:"300px"
})

export default function AddSubject({handleClose,setSubjects}) {
    const {closeSnackbar,enqueueSnackbar} = useSnackbar()
    const {token} = useSelector((state)=>state.admin)
    const {t} = useTranslation()

    const { register,control, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            title_ar:"",
            title_en:"",
        }
    });

    const [image,setImage] = useState(null)
    
    async function onSubmit(data)
    {
        closeSnackbar()
        const formData = new FormData()
        formData.append('image',image)
        formData.append('titleAR',data.title_ar)
        formData.append('titleEN',data.title_en)
        try{
            if(!image)
            {
                enqueueSnackbar('image is required filed',{variant:"error",autoHideDuration:8000})
                throw new Error('failed occured')
            }
            const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/admin/subjectCategory`,{
                method:"POST",
                headers:{
                    "Authorization":token
                },
                body:formData
            })
            if(response.status!==200&&response.status!==201)
            {
                throw new Error('failed occured')
            }
            const resData = await response.json()
            handleClose()
            enqueueSnackbar(resData.msg,{variant:"success",autoHideDuration:8000})
            setSubjects(back=>[{...resData.data,TeacherSubjectCategories:[]},...back])
        }
        catch(err)
        {
            console.log(err)
        }
    }

    return (
        <>
            <DialogTitle>Add Subject</DialogTitle>
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
                            {errors.title_en?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                        </Box>
                        <input type="file" id="image" hidden onChange={(e)=>setImage(e.target.files[0])}/>
                        <Button variant='contained' color="secondary" sx={{textTransform:"capitalize",padding:0,marginBottom:"20px"}}>
                            <Label htmlFor='image'>{t('addphoto')}</Label>
                        </Button>
                        <Box>
                        {
                            image&&
                            <Image src={URL.createObjectURL(image)}/>
                        }
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