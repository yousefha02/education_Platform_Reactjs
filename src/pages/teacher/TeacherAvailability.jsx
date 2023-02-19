import { Divider } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar'
import AvailablitlyDay from '../../components/teacher/AvailablitlyDay'
import TeacherLayout from '../../components/teacher/TeacherLayout'
import StepperButtons from '../../components/reusableUi/StepperButtons'

const Days = ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"]

export default function TeacherAvailability() {
    return (
        <Navbar>
            <TeacherLayout active={5} title="Availability">
                {
                    Days.map((day,index)=>
                    {
                        return(
                            <>
                                <AvailablitlyDay day={day} key={index+'1a'}/>
                                <Divider/>
                            </>
                        )
                    })
                }
                <StepperButtons/>
            </TeacherLayout>
        </Navbar>
    )
}
