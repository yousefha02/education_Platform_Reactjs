import { FormControl, Grid, InputLabel, MenuItem,styled, Paper, Select, Typography,Box, TextField, Button, FormControlLabel, RadioGroup, Radio } from '@mui/material'
import React from 'react'
import StudentLayout from '../../components/student/StudentLayout'
import { useForm, Controller } from "react-hook-form";
import AddLanguages from '../../components/reusableUi/AddLanguages'
import { useTranslation } from 'react-i18next';

const Image = styled('img')({
    width:"100%",
    height:"200px"
})

const Label = styled("label")({
    width:"100%",
    display:"block",
    padding:"6px 16px",
    cursor:"pointer"
})

export default function StudentProfile() {
    const {t} = useTranslation()

    const { register,control, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            gender:'',
            fullName:'',
            dateOfBirth:"",
            phone:'',
            city:"",
            level:"",
            class:"",
            curriculum:""
        }
    });

    const onSubmit = data => console.log(data);

    return (
            <StudentLayout>
                <Paper sx={{padding:"20px"}}>
                    <Typography sx={{fontSize:"24px",marginTop:"12px",fontWeight:"600",marginBottom:"30px"}}>
                        {t('personalInformation')}
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={6}>
                            <Grid item xs={12} md={7}>
                                <Box sx={{marginBottom:"26px"}}>
                                    <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('fullname')}</InputLabel>
                                    <Controller
                                    name="fullName"
                                    control={control}
                                    render={({ field }) => <TextField {...field} fullWidth/>}
                                    {...register("fullName", { required: "fullName Address is required" })}
                                    />
                                    {errors.fullName?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                                </Box>
                                <Box sx={{marginBottom:"26px"}}>
                                    <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('gender')}</InputLabel>
                                    <Controller
                                        name="gender"
                                        control={control}
                                        render={({ field }) =><FormControl fullWidth>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            {...register("gender", { required: "gender is required" })}
                                        >
                                            <MenuItem value={'male'}>{t('male')}</MenuItem>
                                            <MenuItem value={'female'}>{t('female')}</MenuItem>
                                        </Select>
                                        </FormControl>
                                        }
                                    />
                                    {errors.gender?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                                </Box>
                                <Box sx={{marginBottom:"26px"}}>
                                    <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('birth')}</InputLabel>
                                    <Controller
                                    name="dateOfBirth"
                                    control={control}
                                    render={({ field }) => <TextField {...field} fullWidth/>}
                                    {...register("dateOfBirth", { required: "dateOfBirth Address is required" })}
                                    />
                                    {errors.dateOfBirth?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                                </Box>
                                <Box sx={{marginBottom:"26px"}}>
                                    <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('phone')}</InputLabel>
                                    <Controller
                                    name="phone"
                                    control={control}
                                    render={({ field }) => <TextField {...field} fullWidth/>}
                                    {...register("phone", { required: "phone Address is required" })}
                                    />
                                    {errors.phone?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                                </Box>
                                <Box sx={{marginBottom:"26px"}}>
                                    <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('city')}</InputLabel>
                                    <Controller
                                    name="city"
                                    control={control}
                                    render={({ field }) => <TextField {...field} fullWidth/>}
                                    {...register("city", { required: "city Address is required" })}
                                    />
                                    {errors.city?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                                </Box>
                                <AddLanguages/>
                                <Box sx={{marginBottom:"26px"}}>
                                    <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>{t('studylevel')}</InputLabel>
                                    <Controller
                                    name="level"
                                    control={control}
                                    render={({ field }) =>
                                    <RadioGroup {...register("level", { required: "level Address is required" })}>
                                        <FormControlLabel value="1" control={<Radio size="2px"/>} label="Junior"/>
                                        <FormControlLabel value="2" control={<Radio size="2px"/>} label="Elementary" />
                                    </RadioGroup>}
                                    />
                                    {errors.level?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                                </Box>
                                <Box sx={{marginBottom:"26px"}}>
                                    <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>{t('studyYear')}</InputLabel>
                                    <Controller
                                    name="class"
                                    control={control}
                                    render={({ field }) =>
                                    <RadioGroup {...register("class", { required: "class Address is required" })}>
                                        <FormControlLabel value="1" control={<Radio size="2px"/>} label="First Year"/>
                                        <FormControlLabel value="2" control={<Radio size="2px"/>} label="Second Year" />
                                    </RadioGroup>}
                                    />
                                    {errors.level?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                                </Box>
                                <Box sx={{marginBottom:"26px"}}>
                                    <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>{t('studyCurriculum')}</InputLabel>
                                    <Controller
                                    name="curriculum"
                                    control={control}
                                    render={({ field }) =>
                                    <RadioGroup {...register("curriculum", { required: "curriculum Address is required" })}>
                                        <FormControlLabel value="1" control={<Radio size="2px"/>} label="British"/>
                                        <FormControlLabel value="2" control={<Radio size="2px"/>} label="American" />
                                    </RadioGroup>}
                                    />
                                    {errors.curriculum?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                            <Button variant='contained' sx={{textTransform:"capitalize",padding:0,marginBottom:"30px"}}>
                                <Label htmlFor='image'>{t('replace_photo')}</Label>
                            </Button>
                            <input id="image" hidden type="file"/>
                            <Image/>
                            </Grid>
                        </Grid>
                        <Button variant="contained" color="secondary" type="submit" sx={{marginY:"10px"}}>{t('save')}</Button>
                    </form>
                </Paper>
            </StudentLayout>
    )
}
