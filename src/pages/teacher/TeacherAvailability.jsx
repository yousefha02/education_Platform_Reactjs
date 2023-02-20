import { Divider } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import AvailablitlyDay from '../../components/teacher/AvailablitlyDay'
import TeacherLayout from '../../components/teacher/TeacherLayout'
import StepperButtons from '../../components/reusableUi/StepperButtons'
import days from '../../data/days'

export default function TeacherAvailability() {
    const [selectedDays,setSelectedDays] = useState([])

    const handleToggle = (value) => () => {
        const currentIndex = selectedDays.indexOf(value);
        const newChecked = [...selectedDays];

        if (currentIndex === -1) {
        newChecked.push(value);
        } else {
        newChecked.splice(currentIndex, 1);
        }

        setSelectedDays(newChecked);
    };

    return (
        <Navbar>
            <TeacherLayout active={5} title="Availability">
                {
                    days.map((day,index)=>
                    {
                        return(
                            <>
                                <AvailablitlyDay day={day} key={index+'1a'} 
                                selectedDays={selectedDays} handleToggle={handleToggle}/>
                                <Divider/>
                            </>
                        )
                    })
                }
                <StepperButtons link="description"/>
            </TeacherLayout>
        </Navbar>
    )
}
