import { Autocomplete, Box, Button, Container, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useSnackbar } from 'notistack';
import React, { useState } from 'react'
import { Controller,useForm } from 'react-hook-form'
import { useSelector } from 'react-redux';
import { useStudents } from '../../hooks/useStudents';
import Navbar from '../Navbar'
export default function ParentAddStudent() {
    const { register,control, formState: { errors }, handleSubmit , reset } = useForm({
        defaultValues: {
            studentId:""
        }
    });

    const {closeSnackbar,enqueueSnackbar} = useSnackbar();
    const {parent , token} = useSelector(s => s.parent);
    const [isLoad , setIsLoad] = useState(false);

    const {data : students , isLoading} = useStudents();


    const onSubmit = async (e) => {
        e.preventDefault();
        closeSnackbar();
        setIsLoad(true);
        try{
            const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/parent/add`,{
                method:"POST",
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization" : token
                },     
                body:JSON.stringify({StudentId:value ,ParentId:parent.id})
            })
            const resData = await response.json()
            setIsLoad(false);
            reset({studentId:""})
            setValue(null);
            if(response.status!==200&&response.status!==201)
            {
                enqueueSnackbar(resData.message,{variant:"error",autoHideDuration:2000})
                throw new Error('failed occured')
            }
            enqueueSnackbar('success',{variant:"success",autoHideDuration:2000})
        }
        catch(err)
        {
            setIsLoad(false);
            console.log(err)
        }
    };

      const [value, setValue] = useState(null);


    return (
        <Navbar>
            <>
                {
                    !isLoading&&
                    <form onSubmit={e=>onSubmit(e)}>
                    <Box sx={{marginBottom:"26px"}}>
                        {/* <Controller
                        name="studentId"
                        control={control}
                        render={({ field }) =>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            {...field}
                            fullWidth
                            >
                                {
                                    students?.data.map(st =>{
                                        return <MenuItem value={st.id} key={st.id+"dmkenj"}>{st.name}</MenuItem>
                                    })
                                }
                        </Select>
                    } */}
                    <Autocomplete
                        onChange={(event, newValue) => {
                            setValue(newValue?.id || null)
                        }}
                        id="size-small-standard-multi"
                        size="small"
                        options={students.data}
                        getOptionLabel={(option) => option.name}
                        renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                        />
                        )}
                    />
                    {/* {...register("studentId", { required: "studentId is required" })} */}
                    {/* {errors.studentId?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>} */}
                    </Box>
                    {
                        isLoad
                        ?
                        <Button color="secondary" variant="contained" sx={{opacity:0.7}}>Save...</Button>
                        :
                        value && <Button color="secondary" variant="contained" type="submit">Save</Button>
                    }
                </form>
                }
            </>
        </Navbar>
    )
}
