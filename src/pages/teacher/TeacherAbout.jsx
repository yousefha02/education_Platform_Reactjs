import { Box ,Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from '@mui/material'
import React from 'react'
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import Navbar from '../../components/Navbar';
import AddLanguages from '../../components/reusableUi/AddLanguages';
import TeacherLayout from '../../components/teacher/TeacherLayout';
import { useNavigate } from 'react-router-dom';

export default function TeacherAbout() {
    const { register,control, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            firstName: '',
            lastName:'',
            gender:'',
            date:'',
            email:'',
            phone:'',
            city:''
        }
    });

    const onSubmit = data => console.log(data);
    const navigate = useNavigate()

    return (
        <Navbar>
        <TeacherLayout active={0} title="About">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{width:{md:"500px",xs:"100%"}}}>
                    <Box sx={{marginBottom:"26px"}}>
                            <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>First Name</InputLabel>
                            <Controller
                            name="firstName"
                            control={control}
                            render={({ field }) => <TextField {...field} fullWidth/>}
                            {...register("firstName", { required: "firstName Address is required" })}
                            />
                            {errors.firstName?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                    </Box>
                    <Box sx={{marginBottom:"26px"}}>
                            <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>Last Name</InputLabel>
                            <Controller
                            name="lastName"
                            control={control}
                            render={({ field }) => <TextField {...field} fullWidth/>}
                            {...register("lastName", { required: "lastName Address is required" })}
                            />
                            {errors.lastName?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                    </Box>
                    <Box sx={{marginBottom:"26px"}}>
                            <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>Gender</InputLabel>
                            <Controller
                                name="gender"
                                control={control}
                                render={({ field }) =><FormControl fullWidth>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    {...register("gender", { required: "gender is required" })}
                                >
                                    <MenuItem selected disabled>select your gender</MenuItem>
                                    <MenuItem value={'male'}>Male</MenuItem>
                                    <MenuItem value={'female'}>Female</MenuItem>
                                </Select>
                                </FormControl>
                                }
                            />
                            {errors.gender?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                    </Box>
                    <Box sx={{marginBottom:"26px"}}>
                            <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>Date Of Birth</InputLabel>
                            <Controller
                            name="date"
                            control={control}
                            render={({ field }) => <TextField type="date" {...field} fullWidth/>}
                            {...register("date", { required: "date Address is required" })}
                            />
                            {errors.date?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                    </Box>
                    <Box sx={{marginBottom:"26px"}}>
                            <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>Email</InputLabel>
                            <Controller
                            name="email"
                            control={control}
                            render={({ field }) => <TextField type="email" {...field} fullWidth/>}
                            {...register("email", { required: "email Address is required" })}
                            />
                            {errors.email?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                    </Box>
                    <Box sx={{marginBottom:"26px"}}>
                            <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>Phone Number</InputLabel>
                            <Controller
                            name="email"
                            control={control}
                            render={({ field }) => <Box sx={{width:"100%"}}><PhoneInput  inputProps={{
                                name: 'phone',
                                required: true,
                                autoFocus: true
                            }} value="phone" {...field}/></Box>}
                            {...register("phone", { required: "email phone is required" })}
                            />
                            {errors.phone?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                    </Box>
                    <Box sx={{marginBottom:"26px"}}>
                            <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>City</InputLabel>
                            <Controller
                            name="city"
                            control={control}
                            render={({ field }) => <TextField {...field} fullWidth/>}
                            {...register("date", { required: "city is required" })}
                            />
                            {errors.city?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                    </Box>
                    <AddLanguages/>
                </Box>
                <Button variant="contained" type="submit" onClick={()=>navigate('/teacher/Photo')}>Next</Button>
            </form>
        </TeacherLayout>
        </Navbar>
    )
}