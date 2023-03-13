import { FormControl, Grid, InputLabel, MenuItem, Paper, Select, Typography,Box, TextField, Button, FormControlLabel, RadioGroup, Radio } from '@mui/material'
import React, { useEffect, useState } from 'react'
import StudentLayout from '../../components/student/StudentLayout'
import { useForm, Controller } from "react-hook-form";
import AddLanguages from '../../components/reusableUi/AddLanguages'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useLevels } from '../../hooks/useLevels';
import { useClasses } from '../../hooks/useClasses';
import { useCurriculums } from '../../hooks/useCurriculums';
import {useStudent} from '../../hooks/useStudent'
import SelectTimeZone from '../../components/reusableUi/SelectTimeZone';

export default function StudentProfile() {
    const {t} = useTranslation();
    const {student , token} = useSelector(s => s.student);
    const {data,isLoading} = useStudent(student?.id)
    const [chosenlanguages,setChosenLanguages] = useState([])

    const { register,control, formState: { errors }, handleSubmit , watch , reset} = useForm({
        defaultValues: {
            gender:"",
            fullName:"",
            dateOfBirth:"",
            phone:"",
            city:"",
            level:"",
            class:"",
            curriculum:"",
            regionTime:"",
            location:"",
            nationality:"",
        }
    });

    useEffect(()=>{
        if(data)
        {
            const user = data?.data;
            console.log(user)
            setChosenLanguages(data?.data?.LangTeachStds)
            setRegionTime(user?.regionTime)
            reset({
                fullName:user?.name,
                gender:user?.gender,
                dateOfBirth:user?.dateOfBirth,
                phone:user?.phoneNumber,
                level:user?.LevelId,
                city:user?.city,
                class:user?.ClassId,
                curriculum:user?.CurriculumId,
                regionTime:user?.regionTime,
                location:user?.location,
                nationality:user?.nationality,
            })
        }
    },[data])

    const [load , setLoad] = useState(false);
    const [regionTime,setRegionTime] = useState(null)

    const onSubmit = async data => {
        setLoad(true);
        const languages = chosenlanguages.map(lang=>
        {
            return {LanguageLevelId:lang.LanguageLevelId,StudentId:student?.id,LanguageId:lang.LanguageId}
        })
        try{
            const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/student/editAbout/${student.id}`,{
                method:"POST",
                headers:{
                    "Authorization":token,
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({name:data.fullName,gender:data.gender,dateOfBirth:data.dateOfBirth,
                    phoneNumber:data.phone ,city:data.city,nationality:data.nationality,location:data.location,
                    regionTime:regionTime,LevelId:data.level,ClassId:data.class,CurriculumId:data.curriculum,
                    languages:languages})
            })
            const resData = await response.json()
            if(response.status!==200&&response.status!==201)
            {
                setLoad(false)
                throw new Error('failed occured')
            }
            setLoad(false)
        }
        catch(err)
        {
            console.log(err)
        }
    };

    const levels = useLevels()
    const classes = useClasses()
    const curriculums = useCurriculums()

    const [selectedClasses,setSelectedClasses] = useState([])
    const [selectedCurriculums,setSelectedCurriculums] = useState([])

    useEffect(()=>
    {
        if(classes?.data)
        {
            const filteredClasses = classes?.data.data.filter(item=>item.LevelId==watch('level'))
            setSelectedClasses(filteredClasses)
        }
        if(curriculums?.data)
        {
            const filteredCurriculms = curriculums.data.data.filter(item=>item.CurriculumLevels.findIndex(val=>val.LevelId==watch('level'))!==-1)
            setSelectedCurriculums(filteredCurriculms)
        }
    },[classes||watch('level')])


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
                                    <SelectTimeZone selectedTimezone={regionTime} setSelectedTimezone={setRegionTime}/>
                                </Box>
                                <Box sx={{marginBottom:"26px"}}>
                                    <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('birth')}</InputLabel>
                                    <Controller
                                    name="dateOfBirth"
                                    control={control}
                                    {...register("dateOfBirth", { required: "dateOfBirth Address is required" })}
                                    render={({ field }) => <TextField {...field} fullWidth type={"date"}/>}
                                    />
                                </Box>
                                <Box sx={{marginBottom:"26px"}}>
                                    <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('phone')}</InputLabel>
                                    <Controller
                                    name="phone"
                                    control={control}
                                    render={({ field }) => <TextField {...field} fullWidth/>}
                                    {...register("phone", { required: "phone Address is required" })}
                                    />
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
                                            selectedClasses.length>0
                                            &&selectedClasses.map((item,index)=>
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
                                                selectedCurriculums.length>0
                                                &&selectedCurriculums.map((item,index)=>
                                                {
                                                    return <FormControlLabel value={item.id} label={item.titleAR} key={index+'ma'} 
                                                    control={<Radio size="2px"/>}/>
                                                })
                                            }
                                    </RadioGroup>}
                                    />
                                </Box>
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
