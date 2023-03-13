import { Box, Button, Container, FormControl, FormControlLabel, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm, Controller } from "react-hook-form";
import Navbar from '../../../components/Navbar';
import HeaderSteps from '../../../components/auth/HeaderSteps';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLevels } from '../../../hooks/useLevels';
import { useClasses } from '../../../hooks/useClasses';
import { useCurriculums } from '../../../hooks/useCurriculums';

export default function StudentFouthStep() {
    const navigate = useNavigate()
    const [load,setLoad] = useState(false)
    const { register,control, watch,formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            gender:'',
            level:'',
            class:'',
            curriculum:''
        }
    });

    const levels = useLevels()
    const classes = useClasses()
    const curriculums = useCurriculums()

    const [selectedClasses,setSelectedClasses] = useState([])
    const [selectedCurriculums,setSelectedCurriculums] = useState([])


    async function onSubmit(data)
    {
        setLoad(true)
        try{
            const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/student/signup/data`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({gender:data.gender,levelId:data.level,curriculumId:data.curriculum,
                classId:data.class,email:localStorage.getItem('studentEmail')})
            })
            const resData = await response.json()
            console.log(resData)
            if(response.status!==200&&response.status!==201)
            {
                setLoad(false)
                throw new Error('failed occured')
            }
            localStorage.removeItem('studentEmail')
            localStorage.removeItem('studentCode')
            navigate('/landing')
            setLoad(false)
        }
        catch(err)
        {
            console.log(err)
        }
    }

    const {t} = useTranslation()

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
    },[watch('level')])
    

    return (
        <Navbar>
            <Container>
                <Paper sx={{width:{md:"450px"},padding:"30px 50px",margin:"60px auto 60px"}}>
                    <HeaderSteps step={4} title={t('additionalInformation')} steps={4}/>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                        <MenuItem value={'male'}>Male</MenuItem>
                                        <MenuItem value={'female'}>Female</MenuItem>
                                    </Select>
                                    </FormControl>
                                    }
                                />
                                {errors.gender?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                    </Box>
                    <Box sx={{marginBottom:"26px"}}>
                    <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>{t('studylevel')}</InputLabel>
                    <Controller
                    name="level"
                    control={control}
                    render={({ field }) =>
                    <RadioGroup>
                        {
                            !levels.isLoading&&
                            levels.data.data.map((item,index)=>
                            {
                                return <FormControlLabel {...register("level", { required: "level Address is required" })}
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
                        control={control}
                        render={({ field }) =>
                        <RadioGroup>
                            {
                                selectedClasses.length>0
                                &&selectedClasses.map((item,index)=>
                                {
                                    return <FormControlLabel value={item.id} label={item.titleAR} key={index+'ma'} 
                                    control={<Radio size="2px" {...register("class", { required: "class Address is required" })}/>}/>
                                })
                            }
                        </RadioGroup>}
                        />
                        {errors.class?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                    </Box>
                    <Box sx={{marginBottom:"26px"}}>
                    <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>{t('studyCurriculum')}</InputLabel>
                    <Controller
                    name="level"
                    control={control}
                    render={({ field }) =>
                    <RadioGroup>
                        {
                                selectedCurriculums.length>0
                                &&selectedCurriculums.map((item,index)=>
                                {
                                    return <FormControlLabel value={item.id} label={item.titleAR} key={index+'ma'} 
                                    control={<Radio size="2px" {...register("curriculum", { required: "curriculum Address is required" })}/>}/>
                                })
                            }
                    </RadioGroup>}
                    />
                    </Box>
                    {
                        !load?
                        <Button variant='contained' color="secondary" fullWidth type='submit'
                        sx={{textTransform:"capitalize"}}>Save</Button>
                        :
                        <Button variant='contained' color="secondary" fullWidth
                        sx={{textTransform:"capitalize"}}>Save...</Button>
                    }
                    </form>
                </Paper>
            </Container>
        </Navbar>
    )
}
