import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import TeacherLayout from '../../components/teacher/TeacherLayout'
import CheckBoxSubjects from '../../components/teacher/CheckBoxSubjects'
import { Box, Checkbox, Divider, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import SelectedCategory from '../../components/teacher/SelectedCategory';
import StepperButtons from '../../components/reusableUi/StepperButtons'
import { useTranslation } from 'react-i18next';
import { useSubjects } from '../../hooks/useSubject';
import currencies from '../../data/currencies'
import { useSelector } from 'react-redux';
import { useTeacher } from '../../hooks/useTeacher';
import { useNavigate } from 'react-router-dom';

export default function TeacherSubjects() {
    const {t} = useTranslation()
    const [choseCategories,setChosenCategories] = useState([]);
    const {data , isLoading} = useSubjects();
    const [load,setLoad] = useState(false);

    function handleDeleteSelectedCategory(id)
    {
        setChosenCategories(back=>back.filter(categ=>categ.id!==id))
    }

    const {teacher , token} = useSelector((state)=>state.teacher);
    const [online,setOnline] = useState(false)
    const [person,setPerson] = useState(false)
    const [studentHome,setStudentHome] = useState(false)
    const [teeacherHome,setTeacherHome] = useState(false)
    const [remote , setRemote] = useState({});
    const [f2fStudent , setf2fStudent] = useState({});
    const [f2fTeacher , setf2fTeacher] = useState({});
    const {data : teacher2,isLoading : isLoading2} = useTeacher(teacher.id);
    const navigate = useNavigate();

    useEffect(()=>{
        if(teacher2){
            const user = teacher2?.data;
            console.log(user);
            if(user?.TeacherSubjects.length>0){
                setChosenCategories(user?.TeacherSubjects.map(cat => cat?.Subject))
            }
            if(user?.RemoteSession){
                setOnline(true);
                setRemote({price: +user?.RemoteSession?.price , TeacherId:user?.RemoteSession?.TeacherId , currency:user?.RemoteSession?.currency})
            }
            if(user?.F2FSessionStd){
                setPerson(true);
                setStudentHome(true);
                setf2fStudent({price: +user?.F2FSessionStd?.price , TeacherId:user?.F2FSessionStd?.TeacherId , currency:user?.F2FSessionStd?.currency})
            }
            if(user?.F2FSessionTeacher){
                setPerson(true);
                setTeacherHome(true);
                setf2fTeacher({price: +user?.F2FSessionTeacher?.price , TeacherId:user?.F2FSessionTeacher?.TeacherId , currency:user?.F2FSessionTeacher?.currency})
            }
        }
    },[teacher2])



    const onSubmit = async () => {
        let ar1=choseCategories.map(sub => {
            return {TeacherId:teacher.id , SubjectId:sub.id}
        });
        setLoad(true);
        const remote2 = Object.keys(remote).length >0 ? remote : null;
        const f2fStudent2 =  Object.keys(f2fStudent).length >0 ? f2fStudent : null;
        const f2fTeacher2 = Object.keys(f2fTeacher).length >0 ? f2fTeacher : null;
        try{
            const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/teacher/subjects/${teacher.id}`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":token
                },
                body:JSON.stringify({
                    subjects:ar1  , remote :remote2  , f2fStudent : f2fStudent2 , f2fTeacher: f2fTeacher2
                })
            });
            setLoad(false);
            const resData = await response.json();
            if(resData.status !== 200 && resData.status!==201){
                throw new Error('');
            }
            navigate('/teacher/resume')
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <Navbar>
            <TeacherLayout active={3} title={t('subjects')}>
                {
                    !isLoading&&
                    <Grid container spacing={4}>
                    <Grid item xs={12} lg={9}>
                    {
                        data?.data.map((subject,index)=>
                        {
                            return <CheckBoxSubjects subject={subject} key={index+'p1'} 
                                    choseCategories={choseCategories} 
                                    setChosenCategories={setChosenCategories}/>
                        })
                    }
                    </Grid>
                    <Grid item xs={9} md={5} lg={3}>
                        <Typography sx={{fontSize:"15px",marginBottom:"12px"}}>{t('selectedsubjects')}</Typography>
                        <Divider/>
                        {
                            choseCategories.length>0&&choseCategories.map((categ,index)=>
                            {
                                return <SelectedCategory categ={categ} key={index+"p1"}
                                onClick={()=>handleDeleteSelectedCategory(categ.id)}/>
                            })
                        }
                    </Grid>
                </Grid>
                }
                <Box sx={{marginTop:"40px",width:"800px"}}>
                    <Divider sx={{marginBottom:'40px'}}/>
                    <Typography sx={{fontSize:"20px",fontWeight:"600",marginBottom:"18px"}}>
                        {t('wouldTeach')}
                    </Typography>
                    <Box>
                    <Box sx={{marginBottom:"30px"}}>
                        <FormControlLabel control={<Checkbox onChange={()=>{setOnline(back=>!back);setRemote({})}} checked={online}/>}
                        label={t('online')} />
                        {online&&
                        <Grid container sx={{marginY:"2px",paddingX:"30px"}} spacing={3} alignItems="center">
                            <Grid item xs={6}>
                                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('rateperhour')}</InputLabel>
                                <TextField fullWidth type="number" name="rate" 
                                value={remote?.price}
                                onChange={e=>setRemote(pre=>{
                                    return {...pre , price:e.target.value , TeacherId: teacher.id}
                                })}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('Currency')}</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    fullWidth
                                    value={remote?.currency}
                                    onChange={e=>setRemote(pre=>{
                                        return {...pre , currency:e.target.value , TeacherId: teacher.id}
                                    })}
                                >
                                    {
                                        currencies.map((item,index)=>{
                                            return <MenuItem value={item.title} key={index+"mhb"}>{item.title}</MenuItem>
                                        })
                                    }
                                </Select>
                            </Grid>
                        </Grid>
                        }
                    </Box>
                    <Box>
                        <FormControlLabel control={<Checkbox onChange={()=>{setPerson(back=>!back);setf2fTeacher({});setf2fStudent({})}} checked={person}/>}
                        label={t('person')} />
                        {
                            person&&
                            <Box sx={{paddingX:"20px",marginTop:"20px"}}>
                                <Box sx={{marginBottom:"30px"}}>
                                    <FormControlLabel control={<Checkbox size='small' 
                                    onChange={()=>{setTeacherHome(back=>!back);setf2fTeacher({})}} checked={teeacherHome}/>}
                                    label={t('home')} />
                                    {teeacherHome&&
                                        <Grid container sx={{marginY:"2px",paddingX:"30px"}} spacing={3} alignItems="center">
                                        <Grid item xs={6}>
                                            <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('rateperhour')}</InputLabel>
                                            <TextField fullWidth type="number" name="rate" 
                                            value={f2fTeacher?.price}
                                            onChange={e=>setf2fTeacher(pre=>{
                                                return {...pre , price:e.target.value , TeacherId: teacher.id}
                                            })}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('Currency')}</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                fullWidth
                                                value={f2fTeacher?.currency}
                                                onChange={e=>setf2fTeacher(pre=>{
                                                    return {...pre , currency:e.target.value , TeacherId: teacher.id}
                                                })}
                                            >
                                                {
                                                    currencies.map((item,index)=>{
                                                        return <MenuItem value={item.title} key={index+"mhnmnjjnb"}>{item.title}</MenuItem>
                                                    })
                                                }
                                            </Select>
                                        </Grid>
                                    </Grid>
                                    }
                                </Box>
                                <Box sx={{marginBottom:"30px"}}>
                                    <FormControlLabel control={<Checkbox size='small' 
                                    onChange={()=>{setStudentHome(back=>!back);setf2fStudent({})}} checked={studentHome}/>}
                                    label={t('studenthome')} />
                                    {studentHome&&
                                        <Grid container sx={{marginY:"2px",paddingX:"30px"}} spacing={3} alignItems="center">
                                        <Grid item xs={6}>
                                            <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('rateperhour')}</InputLabel>
                                            <TextField fullWidth type="number" name="rate-"
                                            value={f2fStudent?.price} 
                                            onChange={e=>setf2fStudent(pre=>{
                                                return {...pre , price:e.target.value , TeacherId: teacher.id}
                                            })}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('Currency')}</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                fullWidth
                                                value={f2fStudent?.currency}
                                                onChange={e=>setf2fStudent(pre=>{
                                                    return {...pre , currency:e.target.value , TeacherId: teacher.id}
                                                })}
                                            >
                                                {
                                                    currencies.map((item,index)=>{
                                                        return <MenuItem value={item.title} key={index+"mhbnbhx"}>{item.title}</MenuItem>
                                                    })
                                                }
                                            </Select>
                                        </Grid>
                                    </Grid>
                                    }
                                </Box>
                            </Box>
                        }
                    </Box>
                </Box>
                </Box>
                <StepperButtons skipLink="resume" onSubmit={onSubmit} load={load}/>
            </TeacherLayout>
        </Navbar>
    )
}
