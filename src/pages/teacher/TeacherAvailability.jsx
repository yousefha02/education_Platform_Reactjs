import { Divider,Box,InputLabel } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import AvailablitlyDay from '../../components/teacher/AvailablitlyDay'
import TeacherLayout from '../../components/teacher/TeacherLayout'
import StepperButtons from '../../components/reusableUi/StepperButtons'
import days from '../../data/days'
import SelectTimeZone from '../../components/reusableUi/SelectTimeZone'
import { useTranslation } from 'react-i18next';
import {useTeacher} from '../../hooks/useTeacher'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function TeacherAvailability() {
    const {t} = useTranslation()
    const navigate = useNavigate()

    const {teacher,token} = useSelector((state)=>state.teacher)
    const {data,isLoading} = useTeacher(teacher.id)
    const [selectedTimes,setSelectedTimes] = useState([])
    const [selectedDays,setSelectedDays] = useState([])
    const [selectedTimezone, setSelectedTimezone] = useState(null)
    const [load,setLoad] = useState(false)

    useEffect(()=>
    {
        if(!isLoading)
        {
            setSelectedTimezone(data.data?.timeZone)
            setSelectedTimes(data?.data?.TeacherDays)
            for(const day of data?.data?.TeacherDays)
            {
                setSelectedDays(back=>[...back,day.DayId])
            }
            setSelectedDays(back=>[...new Set(back)])
        }
    },[data])
    

    const handleToggle = (value) => () => {
        const currentIndex = selectedDays.findIndex(selectedDay=>value.id===selectedDay);
        const newChecked = [...selectedDays];

        if (currentIndex === -1) {
        newChecked.push(value.id);
        } else {
        newChecked.splice(currentIndex, 1);
        const newSelectedTimes = selectedTimes.filter(time=>time.DayId!==value.id)
        setSelectedTimes(newSelectedTimes)
        }
        setSelectedDays(newChecked);
    };

    async function onSubmit()
    {
        const days = selectedTimes.map(day=>
        {
            return {...day,TeacherId:teacher.id}
        })
        try{
            setLoad(true)
            const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/teacher/availability/${teacher.id}`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":token
                },
                body:JSON.stringify({teacherDayes:days,timeZone:selectedTimezone})
            })
            const data = await response.json()
            navigate('/teacher/description')
        }
        catch(err)
        {
            console.log(err)
        }
    }
    
    return (
        <Navbar>
            <TeacherLayout active={5} title={t('availability')}>
                <Box>
                    <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>{t('timezone')}</InputLabel>
                    <SelectTimeZone selectedTimezone={selectedTimezone} setSelectedTimezone={setSelectedTimezone}/>
                    {
                        days.map((day,index)=>
                        {
                            return(
                                <>
                                    <AvailablitlyDay day={day} key={index+'1a'} setSelectedDays={setSelectedDays}
                                    selectedDays={selectedDays} handleToggle={handleToggle}
                                    setSelectedTimes={setSelectedTimes} selectedTimes={selectedTimes}/>
                                    <Divider/>
                                </>
                            )
                        })
                    }
                    <StepperButtons onSubmit={onSubmit} load={load}/>
                </Box>
            </TeacherLayout>
        </Navbar>
    )
}
