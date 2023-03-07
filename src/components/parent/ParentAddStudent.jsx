import { Box, Button, Container, FormControl, MenuItem, Select, Typography } from '@mui/material'
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

    const {data : students} = useStudents();


    const onSubmit = async ( data) => {
        closeSnackbar();
        setIsLoad(true);
        try{
            const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/parent/add`,{
                method:"POST",
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization" : token
                },     
                body:JSON.stringify({StudentId:data.studentId ,ParentId:parent.id})
            })
            const resData = await response.json()
            setIsLoad(false);
            reset({studentId:""})
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

    return (
        <Navbar>
            <>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={{marginBottom:"26px"}}>
                        <Controller
                        name="studentId"
                        control={control}
                        render={({ field }) =><Select
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
                    }
                    {...register("studentId", { required: "studentId is required" })}
                    />
                    {errors.studentId?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                    </Box>
                    {
                        isLoad
                        ?
                        <Button color="secondary" variant="contained" sx={{opacity:0.7}}>Save...</Button>
                        :
                        <Button color="secondary" variant="contained" type="submit">Save</Button>
                    }
                </form>
            </>
        </Navbar>
    )
}
