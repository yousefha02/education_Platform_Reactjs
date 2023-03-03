import { Divider,Box,InputLabel } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import AvailablitlyDay from '../../components/teacher/AvailablitlyDay'
import TeacherLayout from '../../components/teacher/TeacherLayout'
import StepperButtons from '../../components/reusableUi/StepperButtons'
import days from '../../data/days'
import SelectTimeZone from '../../components/reusableUi/SelectTimeZone'
import { useTranslation } from 'react-i18next';

export default function TeacherAvailability() {
    const {t} = useTranslation()
    const [selectedDays,setSelectedDays] = useState([])

    const handleToggle = (value) => () => {
        const currentIndex = selectedDays.findIndex(selectedDay=>value.id===selectedDay.id);
        const newChecked = [...selectedDays];

        if (currentIndex === -1) {
        newChecked.push({...value,times:[]});
        } else {
        newChecked.splice(currentIndex, 1);
        }

        setSelectedDays(newChecked);
    };

    useEffect(()=>
    {
        console.log(selectedDays)
    },[selectedDays])

    return (
        <Navbar>
            <TeacherLayout active={5} title={t('availability')}>
                <Box>
                    <InputLabel sx={{marginBottom:"6px",fontSize:"14px"}}>{t('timezone')}</InputLabel>
                    <SelectTimeZone/>
                    {
                        days.map((day,index)=>
                        {
                            return(
                                <>
                                    <AvailablitlyDay day={day} key={index+'1a'} setSelectedDays={setSelectedDays}
                                    selectedDays={selectedDays} handleToggle={handleToggle}/>
                                    <Divider/>
                                </>
                            )
                        })
                    }
                    <StepperButtons link="description"/>
                </Box>
            </TeacherLayout>
        </Navbar>
    )
}
