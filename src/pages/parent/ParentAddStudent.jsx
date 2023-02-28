import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import { Controller,useForm } from 'react-hook-form'
import Navbar from '../../components/Navbar'

export default function ParentAddStudent() {
    const { register,control, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            studentId:""
        }
    });
    const onSubmit = data => console.log(data);

    return (
        <Navbar>
            <Container sx={{marginTop:"60px"}}>
                <from onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={{marginBottom:"26px"}}>
                        <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>الطالب</InputLabel>
                        <Controller
                        name="studentId"
                        control={control}
                        render={({ field }) =><FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            {...register("studentId", { required: "studentId is required" })}
                            >
                            <MenuItem value={'male'}>يوسف أبوهاني</MenuItem>
                            <MenuItem value={'female'}>تثتثت</MenuItem>
                        </Select>
                        </FormControl>
                    }
                    />
                    {errors.studentId?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                    </Box>
                    <Button color="secondary" variant="contained" type='submit'>Save</Button>
                </from>
            </Container>
        </Navbar>
    )
}
