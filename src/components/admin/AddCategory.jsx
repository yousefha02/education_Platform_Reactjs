import { Box, Button, DialogActions, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm,Controller } from 'react-hook-form';

export default function AddStudyYear({handleClose}) {

    const { register,control, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            title_ar:"",
            title_en:"",
            subject:""
        }
    });
    
    function onSubmit(data)
    {
        console.log(data)
    }

    return (
        <>
            <DialogTitle>Add Category</DialogTitle>
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
                            <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>Title in arabic</InputLabel>
                            <Controller
                            name="title_en"
                            control={control}
                            render={({ field }) => <TextField {...field} fullWidth/>}
                            {...register("title_en", { required: "title Address is required" })}
                            />
                            {errors.title_en?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                        </Box>
                        <Box sx={{marginBottom:"26px"}}>
                            <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>Subject</InputLabel>
                            <Controller
                                name="level"
                                control={control}
                                render={({ field }) =><FormControl fullWidth>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    {...register("subject", { required: "level is required" })}
                                >
                                    <MenuItem disabled>select subject</MenuItem>
                                    <MenuItem value={'arabic'}>Arabic</MenuItem>
                                    <MenuItem value={'math'}>Math</MenuItem>
                                </Select>
                                </FormControl>
                                }
                            />
                            {errors.subject?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
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