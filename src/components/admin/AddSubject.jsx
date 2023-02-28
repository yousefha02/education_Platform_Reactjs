import { Box, Button, DialogActions, DialogTitle, InputLabel, TextField, Typography,styled } from '@mui/material'
import React, { useState } from 'react'
import { useForm,Controller } from 'react-hook-form';

const Label = styled("label")({
    width:"100%",
    display:"block",
    padding:"6px 16px",
    cursor:"pointer"
})

const Image = styled('img')({
    width:"300px"
})

export default function AddSubject({handleClose}) {

    const { register,control, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            title_ar:"",
            title_en:"",
        }
    });

    const [image,setImage] = useState(null)
    
    function onSubmit(data)
    {
        console.log(data)
    }

    return (
        <>
            <DialogTitle>Add Subject</DialogTitle>
            <Box sx={{display:"flex",justifyContent:"center",padding:"20px"}}>
                <Box sx={{width:"500px",maxWidth:"100%"}}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box sx={{marginBottom:"18px"}}>
                            <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>Title in arabic</InputLabel>
                            <Controller
                            name="title_ar"
                            control={control}
                            render={({ field }) => <TextField {...field} fullWidth/>}
                            {...register("title_ar", { required: "title Address is required" })}
                            />
                            {errors.title_ar?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                        </Box>
                        <Box sx={{marginBottom:"18px"}}>
                            <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>Title in english</InputLabel>
                            <Controller
                            name="title_en"
                            control={control}
                            render={({ field }) => <TextField {...field} fullWidth/>}
                            {...register("title_en", { required: "title Address is required" })}
                            />
                            {errors.title_en?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                        </Box>
                        <input type="file" id="image" hidden onChange={(e)=>setImage(e.target.files[0])}/>
                        <Button variant='contained' color="secondary" sx={{textTransform:"capitalize",padding:0,marginBottom:"20px"}}>
                            <Label htmlFor='image'>Add Photo</Label>
                        </Button>
                        <Box>
                        {
                            image&&
                            <Image src={URL.createObjectURL(image)}/>
                        }
                        </Box>
                        <DialogActions>
                            <Button variant="contained" type="submit" sx={{ml:"6px",mr:"6px"}}>Create</Button>
                            <Button onClick={handleClose} color="error">Cancel</Button>
                        </DialogActions>
                    </form>
                </Box>
            </Box>
        </>
    )
}