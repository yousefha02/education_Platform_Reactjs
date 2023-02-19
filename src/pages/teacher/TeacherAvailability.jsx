import React from 'react'
import Navbar from '../../components/Navbar'
import TeacherLayout from '../../components/teacher/TeacherLayout'

export default function TeacherAvailability() {
    return (
        <Navbar>
            <TeacherLayout active={5} title="Availability">

            </TeacherLayout>
        </Navbar>
    )
}
