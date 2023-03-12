import { FormControl, Grid, InputLabel, MenuItem,styled, Paper, Select, Typography,Box, TextField, Button, FormControlLabel, RadioGroup, Radio } from '@mui/material'
import React, { useEffect, useState } from 'react'
import StudentLayout from '../../components/student/StudentLayout'
import { useForm, Controller } from "react-hook-form";
import AddLanguages from '../../components/reusableUi/AddLanguages'
import { useTranslation } from 'react-i18next';
import TimezoneSelect from 'react-timezone-select'
import { useSelector } from 'react-redux';
import { useLevels } from '../../hooks/useLevels';


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
    const {t} = useTranslation();
    const {student , token} = useSelector(s => s.student);
    const [chosenlanguages,setChosenLanguages] = useState([])

    const { register,control, formState: { errors }, handleSubmit , watch , reset} = useForm({
        defaultValues: {
            gender:student.gender,
            fullName:student.name,
            dateOfBirth:student.dateOfBirth,
            phone:student.phoneNumber,
            city:student.city,
            level:student.LevelId,
            class:student.ClassId,
            curriculum:student.CurriculumId,
            regionTime:student.regionTime || "",
            location:student.location,
            nationality:student.nationality
        }
    });
    console.log("class:",watch('class') , "level:",watch('level') , "curriculum:",watch('curriculum'));

    const [load , setLoad] = useState(false);
    const [image , setImage] = useState(null);

    const onSubmit =async data => {
        console.log(data);
        // setLoad(true);
        // const formData = new FormData();
        // formData.append("name" , data.fullName);
        // formData.append("gender" , data.gender);
        // formData.append("dateOfBirth" , data.dateOfBirth);
        // formData.append("phoneNumber" , data.phone);
        // formData.append("city" , data.city);
        // formData.append("nationality" , data.nationality);
        // formData.append("location" , data.location);
        // formData.append("regionTime" , data.regionTime);
        // formData.append("LevelId" , data.level);
        // formData.append("ClassId" , data.class);
        // formData.append("CurriculumId" , data.curriculum);
        // formData.append("languages" , []);
        // formData.append("image" , image);
        // try{
        //     const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/student/editAbout/${student.id}`,{
        //         method:"POST",
        //         headers:{
        //             "Authorization":token
        //         },
        //         body:formData
        //     })
        //     const resData = await response.json()
        //     console.log(resData)
        //     if(response.status!==200&&response.status!==201)
        //     {
        //         setLoad(false)
        //         throw new Error('failed occured')
        //     }
        //     setLoad(false)
        // }
        // catch(err)
        // {
        //     console.log(err)
        // }
    };

    const levels = useLevels()
    const [level , setLevel] = useState(null);

    useEffect(()=>
    {
        async function getLevel()
        {
            const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/admin/level/${watch('level')}`)
            const data = await response.json();
            setLevel(data.data)
            console.log(data);
        }
        getLevel()
    },[watch('level')]);

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
                                    {...register("fullName", { required: "fullName Address is required" })}
                                    render={({ field }) => <TextField {...field} fullWidth/>}
                                    />
                                    {errors.fullName?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                                </Box>
                                <Box sx={{marginBottom:"26px"}}>
                                    <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('gender')}</InputLabel>
                                    <Controller
                                        name="gender"
                                        control={control}
                                        {...register("gender", { required: "gender is required" })}
                                        render={({ field }) =><FormControl fullWidth>
                                        <Select
                                        {...field}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
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
                                    <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>Time Zone</InputLabel>
                                    <TimezoneSelect
                                    onChange={e=>reset({regionTime:e})}
                                    value={watch('regionTime')}
                                    />
                                    {errors.regionTime?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                                </Box>
                                <Box sx={{marginBottom:"26px"}}>
                                    <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('birth')}</InputLabel>
                                    <Controller
                                    name="dateOfBirth"
                                    control={control}
                                    {...register("dateOfBirth", { required: "dateOfBirth Address is required" })}
                                    render={({ field }) => <TextField {...field} fullWidth type={"date"}/>}
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
                                <Box sx={{marginBottom:"26px"}}>
                                    <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>Location</InputLabel>
                                    <Controller
                                    name="location"
                                    control={control}
                                    render={({ field }) => <TextField {...field} fullWidth/>}
                                    {...register("location", { required: "location Address is required" })}
                                    />
                                    {errors.location?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                                </Box>
                                <Box sx={{marginBottom:"26px"}}>
                                    <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>Nationality</InputLabel>
                                    <Controller
                                    name="nationality"
                                    control={control}
                                    render={({ field }) => <TextField {...field} fullWidth/>}
                                    {...register("nationality", { required: "nationality Address is required" })}
                                    />
                                    {errors.nationality?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                                </Box>
                                <AddLanguages chosenlanguages={chosenlanguages} setChosenLanguages={setChosenLanguages}/>
                                <Box sx={{marginBottom:"26px"}}>
                                <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>{t('studylevel')}</InputLabel>
                                <Controller
                                {...register("level", { required: "nationality Address is required" })}
                                name="level"
                                control={control}
                                render={({ field }) =>
                                <RadioGroup {...field}>
                                    {
                                        !levels.isLoading&&
                                        levels?.data?.data.map((item,index)=>
                                        {
                                            return <FormControlLabel
                                            key={index+'mnz'} value={item.id} control={<Radio size="2px"/>} label={item.titleAR}/>
                                        })
                                    }
                                </RadioGroup>}
                                />
                                {errors.level?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                                </Box>
                                <Box sx={{marginBottom:"26px"}}>
                                    <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>{t('studyYear')}</InputLabel>
                                    <Controller
                                    name="class"
                                    {...register("class", { required: "class is required" })}
                                    control={control}
                                    render={({ field }) =>
                                    <RadioGroup {...field}>
                                        {
                                            level?.Classes?.length>0
                                            &&level.Classes.map((item,index)=>
                                            {
                                                return <FormControlLabel value={item.id} label={item.titleAR} key={index+'ma'} 
                                                control={<Radio size="2px"/>}/>
                                            })
                                        }
                                    </RadioGroup>}
                                    />
                                    {errors.class?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                                </Box>
                                <Box sx={{marginBottom:"26px"}}>
                                    <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>{t('studyCurriculum')}</InputLabel>
                                    <Controller
                                    name="curriculum"
                                    control={control}
                                    {...register("curriculum", { required: "curriculum is required" })}
                                    render={({ field }) =>
                                    <RadioGroup {...field}>
                                        {
                                                level?.CurriculumLevels?.length>0
                                                &&level.CurriculumLevels.map((item,index)=>
                                                {
                                                    return <FormControlLabel value={item.CurriculumId} label={item.CurriculumId} key={index+'ma'} 
                                                    control={<Radio size="2px"/>}/>
                                                })
                                            }
                                    </RadioGroup>}
                                    />
                                    {errors.curriculum?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                            <Button variant='contained' sx={{textTransform:"capitalize",padding:0,marginBottom:"30px"}}>
                                <Label htmlFor='image'>{t('replace_photo')}</Label>
                            </Button>
                            <input id="image" hidden type="file" onChange={e=>setImage(e.target.files[0])}/>
                            <Image/>
                            </Grid>
                        </Grid>
                        {
                            load 
                            ?
                            <Button variant="contained" color="secondary" sx={{marginY:"10px" , opacity:0.7}}>{t('save')}...</Button>
                            :
                            <Button variant="contained" color="secondary" type="submit" sx={{marginY:"10px"}}>{t('save')}</Button>
                        }
                    </form>
                </Paper>
            </StudentLayout>
    )
}
